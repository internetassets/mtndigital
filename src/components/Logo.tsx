
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 group">
      <svg
        width="32"
        height="32"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <style>
          {`
            .ia-logo-bg { fill: hsl(var(--primary)); transition: fill 0.3s ease-in-out; }
            .ia-logo-text { fill: hsl(var(--primary-foreground)); }
            .group:hover .ia-logo-bg { fill: hsl(var(--accent)); }
          `}
        </style>
        <rect className="ia-logo-bg" width="100" height="100" rx="20" ry="20" />
        <text
          className="ia-logo-text"
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="60"
          fontWeight="bold"
        >
          IA
        </text>
      </svg>
      <span className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
        Internet Assets
      </span>
    </Link>
  );
}
