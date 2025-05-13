
import Link from 'next/link';
import { Mountain } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 group">
      <Mountain className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
      <span className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
        White Mountain Digital
      </span>
    </Link>
  );
}
