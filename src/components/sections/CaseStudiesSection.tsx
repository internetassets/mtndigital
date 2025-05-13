
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'Artisan Cafe SEO Boost',
    client: 'Local Cafe Business',
    imageSrc: 'https://picsum.photos/600/400?random=2',
    imageAlt: 'Cozy interior of a modern cafe',
    imageHint: 'modern cafe',
    description: 'Implemented a targeted local SEO strategy and revamped their online profiles, resulting in a significant increase in online visibility and customer engagement.',
    result: 'Increased online bookings by 40% within 3 months.',
    keywords: 'cafe SEO services, local restaurant marketing, online food business visibility'
  },
  {
    title: 'Retail E-commerce Expansion',
    client: 'Online Gear Shop',
    imageSrc: 'https://picsum.photos/600/400?random=3',
    imageAlt: 'E-commerce website on a laptop',
    imageHint: 'ecommerce website',
    description: 'Developed a new e-commerce platform with enhanced SEO and user experience, leading to a surge in online sales and broader customer reach.',
    result: 'Tripled website traffic and doubled online sales in 6 months.',
    keywords: 'e-commerce SEO, online retail marketing, digital store growth'
  },
  {
    title: 'Hospitality Website Redesign',
    client: 'Boutique Accommodation Provider',
    imageSrc: 'https://picsum.photos/600/400?random=4',
    imageAlt: 'Charming room in a boutique hotel',
    imageHint: 'boutique hotel room',
    description: 'Crafted a visually stunning and mobile-friendly website, improving direct bookings and reducing reliance on third-party platforms.',
    result: 'Achieved 60% increase in direct bookings.',
    keywords: 'hospitality web design, accommodation marketing, direct booking SEO'
  },
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Proven <span className="text-primary">Success Stories</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            See how we've helped businesses like yours thrive online.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Card key={study.title} className="flex flex-col overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
              <CardHeader className="p-0">
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    src={study.imageSrc}
                    alt={study.imageAlt}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                    data-ai-hint={study.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-xl md:text-2xl mb-2">{study.title}</CardTitle>
                <p className="text-sm text-primary font-medium mb-2">{study.client}</p>
                <CardDescription className="text-base mb-3">{study.description}</CardDescription>
                <p className="text-base font-semibold text-accent-foreground bg-accent/20 p-2 rounded-md">{study.result}</p>
                <p className="mt-3 text-xs text-muted-foreground/80 italic">Keywords: {study.keywords}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="link" asChild className="p-0 h-auto">
                  <Link href="#">
                    Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
