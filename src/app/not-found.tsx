
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AppHeader } from '@/components/AppHeader';
import { AppFooter } from '@/components/AppFooter';
import { SearchX } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-16 bg-background">
        <SearchX className="h-24 w-24 text-primary mb-8" />
        <h1 className="text-6xl font-extrabold text-foreground mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-primary mb-6">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-md">
          Oops! The page you're looking for doesn't seem to exist. It might have been moved, deleted, or perhaps you mistyped the URL.
        </p>
        <Button asChild size="lg">
          <Link href="/">
            Go Back to Homepage
          </Link>
        </Button>
      </main>
      <AppFooter />
    </div>
  );
}
