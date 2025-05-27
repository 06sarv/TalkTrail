import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to TalkTrail
        </h1>
        <p className="text-xl text-gray-600">
          Your voice journaling companion with AI-powered insights
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Start Journaling</h2>
          <p className="text-gray-600 mb-6">
            Record your thoughts and feelings through voice, and let AI help you gain new perspectives.
          </p>
          <Link
            href="/journal/new"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            New Entry
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">View Insights</h2>
          <p className="text-gray-600 mb-6">
            Explore your emotional journey and discover patterns in your thoughts.
          </p>
          <Link
            href="/insights"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            View Insights
          </Link>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600">
          Don't have an account?{' '}
          <Link href="/auth/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>{' '}
          to get started.
        </p>
      </div>
    </div>
  );
}
