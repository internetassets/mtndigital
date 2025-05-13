
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-background to-secondary/30 py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
         <Image
            src="https://picsum.photos/1920/1080?random=1"
            alt="Abstract background representing digital connections"
            layout="fill"
            objectFit="cover"
            priority
            data-ai-hint="abstract technology"
          />
      </div>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Elevate Your</span>
            <span className="block text-primary">White Mountains Business Online</span>
          </h1>
          <p className="mt-6 max-w-md mx-auto text-lg text-muted-foreground sm:text-xl md:mt-8 md:max-w-3xl">
            Expert digital marketing and SEO services designed for local success in Pinetop, Show Low, and throughout Arizona's high country. Let's grow your brand together.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="#services">Discover Our Solutions</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="#contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
