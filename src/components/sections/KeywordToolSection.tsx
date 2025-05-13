
import { KeywordForm } from '@/components/KeywordForm';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function KeywordToolSection() {
  return (
    <section id="keyword-tool" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Discover Your Keywords: <span className="text-primary">SEO Keyword Generator</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Explore potential keywords to target your ideal customers. Get a glimpse of how we approach SEO strategy.
          </p>
        </div>
        
        <KeywordForm />

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready for a deep dive into your business's SEO potential?
          </p>
          <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
            <Link href="#contact">Request Full SEO Audit</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
