'use client';

import { useState, useRef, useEffect } from 'react';

type RecordButtonProps = {
  onRecordingComplete: (blob: Blob) => void;
  isSubmitting: boolean;
};

const RecordButton = ({ onRecordingComplete, isSubmitting }: RecordButtonProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
        onRecordingComplete(audioBlob);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      setAudioURL('');
    } catch (err) {
      console.error('Error starting recording:', err);
      alert('Could not start recording. Please check your microphone permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {!isRecording && !audioURL && (
        <button
          onClick={startRecording}
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M14 8a6 6 0 01-6 6v3a1 1 0 11-2 0v-3a6 6 0 01-6-6h-1a1 1 0 110-2h1a6 6 0 016-6v-1a1 1 0 112 0v1a6 6 0 016 6z" clipRule="evenodd" />
          </svg>
        </button>
      )}
      {isRecording && (
        <button
          onClick={stopRecording}
          className="bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition-colors animate-pulse"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4 4a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" clipRule="evenodd" />
          </svg>
        </button>
      )}
      {audioURL && (
        <>
          <audio src={audioURL} controls className="mt-4" />
          <button
            onClick={() => onRecordingComplete(new Blob())}
            className="mt-2 text-sm text-gray-500 hover:underline"
          >
            Clear recording
          </button>
        </>
      )}
      {isSubmitting && <p className="mt-2 text-gray-500">Processing...</p>}
    </div>
  );
};

export default RecordButton;