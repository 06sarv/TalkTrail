export type Emotion = 'joy' | 'sadness' | 'anger' | 'fear' | 'surprise' | 'neutral';

export interface EmotionScore {
  emotion: Emotion;
  score: number;
}

export interface JournalEntry {
  id: string;
  userId: string;
  content: string;
  audioUrl?: string;
  createdAt: Date;
  emotionScores: EmotionScore[];
  alternativePerspective?: string;
}

export interface User {
  id: string;
  email: string;
  displayName?: string;
  createdAt: Date;
  lastLogin: Date;
} 