'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center fixed top-0 left-0 w-full z-10">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-gray-800">TalkTrail</h1>
      </div>
      <nav className="space-x-4">
        <Link href="/" className="text-gray-600 hover:text-blue-500 transition-colors">
          Home
        </Link>
        <Link href="/journal" className="text-gray-600 hover:text-blue-500 transition-colors">
          Journal
        </Link>
      </nav>
    </header>
  );
};

export default Header;