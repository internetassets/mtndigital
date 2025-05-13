
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const benefits = [
  { text: 'Deep understanding of the White Mountains, Pinetop, and Show Low markets.' },
  { text: 'Proven SEO results for Arizona businesses, big and small.' },
  { text: 'Personalized digital marketing strategies, no cookie-cutter solutions.' },
  { text: 'Transparent communication and detailed reporting on your campaign progress.' },
  { text: 'Dedicated local team passionate about helping White Mountains businesses succeed.' },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Why Partner With Us?</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Your Trusted Digital Agency in the <span className="text-primary">White Mountains, AZ</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              At White Mountain Digital, we're not just another agency; we're your neighbors. We live, work, and play in Arizona's beautiful high country. This local insight, combined with our digital marketing expertise, allows us to craft strategies that truly resonate with the White Mountains community and drive real results for your business.
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-6 w-6 text-accent mr-3 mt-1" />
                  <span className="text-foreground">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2 aspect-w-4 aspect-h-3 lg:aspect-w-1 lg:aspect-h-1 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://picsum.photos/800/600?random=5"
              alt="Friendly team collaborating in an office with mountain views"
              width={800}
              height={600}
              className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-105"
              data-ai-hint="team meeting mountains"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
