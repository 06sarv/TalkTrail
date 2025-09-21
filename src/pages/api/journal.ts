import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../lib/db';
import JournalEntry from '../../models/JournalEntry';
import { transcribeAudio, analyzeSentiment, generatePerspective } from '../../lib/aiService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { audioData } = req.body;

  if (!audioData) {
    return res.status(400).json({ message: 'No audio data provided' });
  }

  try {
    const transcription = await transcribeAudio(audioData);
    const sentimentLabel = await analyzeSentiment(transcription);
    const perspective = await generatePerspective(transcription, sentimentLabel);

    await connectToDatabase();
    const newEntry = new JournalEntry({
      transcription,
      sentiment: sentimentLabel,
      perspective,
      createdAt: new Date(),
    });
    await newEntry.save();

    return res.status(200).json({
      message: 'Journal entry processed and saved.',
      entry: newEntry,
    });
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}