'use client';

import { useState } from 'react';
import VoiceRecorder from '@/components/journal/VoiceRecorder';

export default function NewJournalEntry() {
  const [transcript, setTranscript] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleRecordingComplete = async (text: string) => {
    setTranscript(text);
    setIsAnalyzing(true);
    
    // TODO: Implement emotion analysis and perspective generation
    // This will be implemented in the next steps
    
    setIsAnalyzing(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">New Journal Entry</h1>
        <p className="text-gray-600 mt-2">
          Record your thoughts and feelings through voice
        </p>
      </header>

      <VoiceRecorder onRecordingComplete={handleRecordingComplete} />

      {isAnalyzing && (
        <div className="mt-8 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-2 text-gray-600">Analyzing your entry...</p>
        </div>
      )}

      {transcript && !isAnalyzing && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Your Entry</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-800 whitespace-pre-wrap">{transcript}</p>
          </div>
          
          {/* TODO: Add emotion analysis results and alternative perspective here */}
        </div>
      )}
    </div>
  );
} 