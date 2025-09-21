import mongoose, { Schema } from 'mongoose';

export interface IJournalEntry extends Document {
  transcription: string;
  sentiment: string;
  perspective: string;
  createdAt: Date;
}

const JournalEntrySchema = new Schema<IJournalEntry>({
  transcription: { type: String, required: true },
  sentiment: { type: String, required: true },
  perspective: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Avoids recompiling the model on every hot reload in development.
const JournalEntry = (mongoose.models.JournalEntry || mongoose.model<IJournalEntry>('JournalEntry', JournalEntrySchema));

export default JournalEntry;