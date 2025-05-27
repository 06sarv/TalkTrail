import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              href="/"
              className="flex items-center px-4 text-gray-900 font-semibold"
            >
              TalkTrail
            </Link>
          </div>

          <div className="flex space-x-4">
            <Link
              href="/journal/new"
              className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                isActive('/journal/new')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              New Entry
            </Link>
            <Link
              href="/journal"
              className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                isActive('/journal')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Journal
            </Link>
            <Link
              href="/insights"
              className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                isActive('/insights')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Insights
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 