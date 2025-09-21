'use client';

import { useState } from 'react';
import RecordButton from '@/components/RecordButton';
import JournalEntryCard from '@/components/JournalEntryCard';

type JournalEntry = {
  _id: string;
  transcription: string;
  sentiment: string;
  perspective: string;
  createdAt: string;
};

export default function HomePage() {
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const [lastEntry, setLastEntry] = useState<JournalEntry | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRecordingComplete = (blob: Blob) => {
    setRecordedBlob(blob);
  };

  const handleSubmit = async () => {
    if (!recordedBlob) {
      alert("Please record something first!");
      return;
    }

    setIsLoading(true);
    setLastEntry(null);

    const reader = new FileReader();
    reader.readAsDataURL(recordedBlob);
    reader.onloadend = async () => {
      const base64data = reader.result;

      try {
        const response = await fetch('/api/journal', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ audioData: base64data }),
        });

        if (!response.ok) {
          throw new Error('Failed to process journal entry.');
        }

        const data = await response.json();
        setLastEntry(data.entry);
        console.log('Processed entry:', data.entry);
      } catch (error) {
        console.error('Submission error:', error);
        alert('An error occurred. Please try again.');
      } finally {
        setIsLoading(false);
        setRecordedBlob(null);
      }
    };
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <div className="w-full max-w-lg text-center p-8 bg-white rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">TalkTrail</h1>
        <p className="text-xl text-gray-600 mb-8">Voice your thoughts. Discover new perspectives.</p>

        <RecordButton
          onRecordingComplete={handleRecordingComplete}
          isSubmitting={isLoading}
        />

        {recordedBlob && !isLoading && (
          <button
            onClick={handleSubmit}
            className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors"
          >
            Submit Journal Entry
          </button>
        )}

        {isLoading && (
          <div className="mt-8">
            <p className="text-gray-500">Processing your entry...</p>
          </div>
        )}

        {lastEntry && (
          <div className="mt-8 w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your New Perspective</h2>
            <JournalEntryCard entry={lastEntry} />
          </div>
        )}
      </div>
    </main>
  );
}