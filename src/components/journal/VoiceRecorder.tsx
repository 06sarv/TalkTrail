import { useState, useEffect } from 'react';
import { MicrophoneIcon, StopIcon } from '@heroicons/react/24/solid';

interface VoiceRecorderProps {
  onRecordingComplete: (text: string) => void;
}

export default function VoiceRecorder({ onRecordingComplete }: VoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onresult = (event) => {
          const current = event.resultIndex;
          const transcript = event.results[current][0].transcript;
          setTranscript(transcript);
        };

        recognition.onerror = (event) => {
          console.error('Speech recognition error:', event.error);
          setIsRecording(false);
        };

        setRecognition(recognition);
      }
    }
  }, []);

  const startRecording = () => {
    if (recognition) {
      recognition.start();
      setIsRecording(true);
      setTranscript('');
    }
  };

  const stopRecording = () => {
    if (recognition) {
      recognition.stop();
      setIsRecording(false);
      onRecordingComplete(transcript);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-center mb-4">
          <button
            onClick={isRecording ? stopRecording : startRecording}
            className={`p-4 rounded-full ${
              isRecording
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white transition-colors`}
          >
            {isRecording ? (
              <StopIcon className="h-6 w-6" />
            ) : (
              <MicrophoneIcon className="h-6 w-6" />
            )}
          </button>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-2">
            {isRecording ? 'Recording...' : 'Click to start recording'}
          </p>
          {transcript && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-800">{transcript}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 