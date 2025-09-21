'use client';

type JournalEntry = {
  transcription: string;
  sentiment: string;
  perspective: string;
  createdAt: string;
};

type JournalEntryCardProps = {
  entry: JournalEntry;
};

const JournalEntryCard = ({ entry }: JournalEntryCardProps) => {
  const sentimentColor = entry.sentiment === 'POSITIVE' ? 'text-green-600' : 'text-red-600';
  const formattedDate = new Date(entry.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-500">{formattedDate}</span>
        <span className={`font-semibold ${sentimentColor}`}>
          {entry.sentiment}
        </span>
      </div>
      <blockquote className="border-l-4 border-gray-300 pl-4 text-gray-700 italic mb-4">
        &ldquo;{entry.transcription}&rdquo;
      </blockquote>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">A Different Perspective:</h4>
        <p className="text-gray-600">
          {entry.perspective}
        </p>
      </div>
    </div>
  );
};

export default JournalEntryCard;