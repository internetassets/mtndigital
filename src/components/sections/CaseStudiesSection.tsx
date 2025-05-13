
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'Mountain View Cafe SEO Overhaul',
    client: 'Local Pinetop Restaurant',
    imageSrc: 'https://picsum.photos/600/400?random=2',
    imageAlt: 'Cozy interior of Mountain View Cafe',
    imageHint: 'cozy restaurant',
    description: 'Implemented a targeted local SEO strategy and revamped their Google Business Profile, resulting in a significant increase in online visibility and reservations.',
    result: 'Increased online bookings by 40% within 3 months.',
    keywords: 'Pinetop restaurant SEO, local cafe marketing White Mountains, Arizona dining visibility'
  },
  {
    title: 'High Country Outfitters E-commerce Growth',
    client: 'Show Low Outdoor Gear Shop',
    imageSrc: 'https://picsum.photos/600/400?random=3',
    imageAlt: 'Exterior of High Country Outfitters store',
    imageHint: 'outdoor gear store',
    description: 'Developed a new e-commerce website with enhanced SEO and user experience, leading to a surge in online sales and broader customer reach.',
    result: 'Tripled website traffic and doubled online sales in 6 months.',
    keywords: 'Show Low e-commerce SEO, Arizona outdoor retail marketing, White Mountains online store'
  },
  {
    title: 'Lakeside B&B Website Redesign',
    client: 'Pinetop-Lakeside Bed & Breakfast',
    imageSrc: 'https://picsum.photos/600/400?random=4',
    imageAlt: 'Charming room at Lakeside B&B',
    imageHint: 'bed breakfast room',
    description: 'Crafted a visually stunning and mobile-friendly website, improving direct bookings and reducing reliance on third-party platforms.',
    result: 'Achieved 60% increase in direct bookings.',
    keywords: 'Pinetop-Lakeside web design, Arizona B&B marketing, hospitality SEO White Mountains'
  },
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Proven <span className="text-primary">Success Stories</span> from the White Mountains
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            See how we've helped local Arizona businesses like yours thrive online.
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
