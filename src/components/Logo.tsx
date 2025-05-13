
import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 group">
      <Image
        src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/Gzu2iW2sZuZiVlnRqNtN/media/664c46f47068a56568349c0d.png"
        alt="Internet Assets Logo"
        width={32}
        height={32}
        className="h-8 w-8 group-hover:opacity-80 transition-opacity duration-300"
        priority
      />
      <span className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
        Internet Assets
      </span>
    </Link>
  );
}
