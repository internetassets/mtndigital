
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const benefits = [
  { text: 'Deep understanding of digital marketing trends and best practices.' },
  { text: 'Proven SEO results for businesses, driving growth and visibility.' },
  { text: 'Personalized digital strategies tailored to your unique business goals.' },
  { text: 'Transparent communication and detailed reporting on campaign progress.' },
  { text: 'Dedicated team passionate about helping businesses build valuable internet assets.' },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Why Partner With Us?</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Your Trusted Partner for <span className="text-primary">Digital Growth</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              At Internet Assets, we combine cutting-edge digital marketing expertise with a commitment to understanding your business. We craft strategies that deliver real results and help you build a strong, valuable online presence.
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
              alt="Professional team collaborating in a modern office"
              width={800}
              height={600}
              className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-105"
              data-ai-hint="team meeting office"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
