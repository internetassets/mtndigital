
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Leaf, Truck } from "lucide-react";
import Image from 'next/image';

const testimonials = [
  {
    logo: <Leaf className="h-10 w-10 text-primary mb-3" />,
    website: "NorthwoodsAZ.com Testimonial: Website & SEO Optimization",
    name: "Maria S.",
    title: "Owner",
    services: "Website, SEO, google",
    date: "Oct 2024",
    quote:
      "Russ has been a great help in transferring a website to us as new owners of the business, updating the pages, and getting it optimized.",
    rating: 5,
    imageSrc: null, 
    imageAlt: null,
    imageHint: null,
  },
  {
    logo: <Truck className="h-10 w-10 text-primary mb-3" />,
    website: "SweetLogisticsLLC.com Testimonial: SEO & PPC Lead Generation Impact",
    name: "Cyndy L.",
    title: "Owner",
    services: "Website, SEO, PPC",
    date: "Oct 2024",
    quote:
      "We have worked with Russ over 6 years gaining a substantial web presence, drawing leads/quotes. His services have increased our work flow, as well put our name out there in our industry 10 fold. THX Russ",
    rating: 5,
    imageSrc: null,
    imageAlt: null,
    imageHint: null,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/40">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            White Mountains Business SEO Success: <span className="text-primary">Client Testimonials</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Hear from businesses we've helped succeed online.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card shadow-xl flex flex-col p-6 rounded-lg border hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="p-0 mb-4">
                {testimonial.logo ? (
                  testimonial.logo
                ) : (
                  testimonial.imageSrc && (
                    <div className="h-10 mb-3 flex items-center">
                      <Image
                        src={testimonial.imageSrc}
                        alt={testimonial.imageAlt || "Client Logo"}
                        width={120}
                        height={50}
                        className="object-contain h-full w-auto"
                        data-ai-hint={testimonial.imageHint || undefined}
                      />
                    </div>
                  )
                )}
                <CardTitle className="text-lg font-semibold text-primary tracking-wide">
                  {testimonial.website}
                </CardTitle>
                 <hr className="border-border my-2" />
              </CardHeader>
              <CardContent className="p-0 flex-grow flex flex-col">
                <div className="mb-3">
                  <p className="text-md font-medium text-foreground">
                    {testimonial.name} | {testimonial.title}
                  </p>
                  <p className="text-sm text-muted-foreground">{testimonial.services}</p>
                  <p className="text-xs text-muted-foreground/80">{testimonial.date}</p>
                </div>
                <blockquote className="text-base text-foreground italic border-l-4 border-primary pl-4 py-2 mb-4 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center mt-auto">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                    ))}
                  {Array(5 - testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={`empty-${i}`} className="h-5 w-5 text-accent" />
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
