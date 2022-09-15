import Link from 'next/link'
import { Avatar } from './Avatar';

export const Header = () => (
  <header className="z-30 w-full px-2 py-4 bg-white sm:px-4">
    <div className="container flex items-center justify-between mx-auto">
      <Link href="/" className="flex items-center">
        <a>
          Book Tracker
        </a>
      </Link>
      <Link href="/profile">
        <a>
          <Avatar className="w-10 h-10" />
        </a>
      </Link>
    </div>
  </header>
);
