
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'Case Study: White Mountains Solar - SEO & Local Lead Generation',
    client: 'Local Solar Panel Installers',
    imageSrc: 'https://www.wmsolaraz.com/wp-content/uploads/2024/02/WHITE-MOUNTAINS-SOLAR-SOLAR-PANELS-SOLAR-KITS-AND-LOCAL-SHOW-LOW-AZ-SOLAR-PANLE-INSTALLERS-928-251-0114-92-845x684.webp',
    imageAlt: 'White Mountains Solar project image with solar panels',
    imageHint: 'solar project',
    description: 'Implemented a comprehensive SEO strategy to enhance online visibility for a local solar panel installation company, driving targeted traffic and lead generation.',
    result: 'Significant increase in local search rankings and qualified leads.',
    keywords: 'solar panel SEO, local solar installers, renewable energy marketing',
    linkText: 'View White Mountains Solar Project',
    linkHref: 'https://www.wmsolaraz.com/off-grid-solar/'
  },
  {
    title: 'Case Study: Sweet Logistics - National SEO & Car Shipping Keywords',
    client: 'Enclosed Car Shipping',
    imageSrc: 'https://www.sweetlogisticsllc.com/wp-content/uploads/2024/02/5eaf8961d7d621c56d37ffbcb834203a-e1633835850736-836x471x117x0x601x471x1634255180-1.jpg',
    imageAlt: 'Sweet Logistics car shipping service image',
    imageHint: 'car transport',
    description: 'Optimized online presence and lead generation for a nationwide enclosed car shipping company, improving search visibility and customer acquisition.',
    result: 'Increased organic traffic by 150% and doubled lead conversion rates.',
    keywords: 'car shipping SEO, enclosed auto transport, logistics marketing',
    linkText: 'View Sweet Logistics Project',
    linkHref: 'https://www.sweetlogisticsllc.com/'
  },
  {
    title: 'Case Study: WM Portable Buildings - Local SEO & Graceland Sheds Showcase',
    client: 'Graceland Portable Buildings Dealer',
    imageSrc: 'https://www.wmportablebuildings.com/wp-content/uploads/2024/11/GRACELAND-PORTABLE-BUILDINGS-LOOK-FOR-THE-G-SHOW-LOW-AZ-look-for-the-G.png',
    imageAlt: 'WM Portable Buildings - Graceland Portable Buildings Dealer',
    imageHint: 'portable buildings',
    description: 'Developed a user-friendly website showcasing a wide range of Graceland portable buildings, streamlining the customer inquiry and sales process in Show Low, AZ.',
    result: 'Enhanced online presence and significantly improved lead generation for portable building sales.',
    keywords: 'portable buildings, Graceland sheds, Show Low buildings, shed sales website, storage solutions',
    linkText: 'Visit WM Portable Buildings',
    linkHref: 'https://www.wmportablebuildings.com/'
  },
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Proven <span className="text-primary">White Mountains SEO Success: Digital Marketing & LSI Keyword Case Studies</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            See how we've helped businesses like yours thrive online.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Card key={study.title} className="flex flex-col overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
              <CardHeader className="p-0">
                <div className="aspect-w-16 aspect-h-9 bg-muted">
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
                <p className="text-base font-semibold text-accent-foreground dark:text-foreground bg-accent/20 p-2 rounded-md">{study.result}</p>
                <p className="mt-3 text-xs text-muted-foreground/80 italic">Keywords: {study.keywords}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="link" asChild className="p-0 h-auto">
                  <Link href={study.linkHref} target={study.linkHref.startsWith('http') ? '_blank' : undefined} rel={study.linkHref.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    {study.linkText} <ArrowRight className="ml-2 h-4 w-4" />
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
