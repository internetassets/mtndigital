
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

export function ContactCtaSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Ready to Grow Your Internet Assets?
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-primary-foreground/90">
          Let's discuss how Internet Assets can elevate your online presence. Schedule your free, no-obligation consultation today and take the first step towards digital market leadership.
        </p>
        <div className="mt-10">
          <Button size="lg" variant="secondary" asChild className="text-lg py-4 px-8 shadow-lg hover:shadow-xl transition-shadow bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="mailto:MARKETING@INTERNET-ASSETS.COM?subject=Consultation Request">Schedule Free Consultation</Link>
          </Button>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="flex items-start space-x-4 p-6 bg-background/10 rounded-lg">
            <Phone className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Call Us</h3>
              <p className="text-primary-foreground/80">Mon-Fri, 9am-5pm</p>
              <a href="tel:9288925233" className="hover:underline text-lg">(928) 892-5233</a>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-6 bg-background/10 rounded-lg">
            <Mail className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Email Us</h3>
              <p className="text-primary-foreground/80">Get a response within 24 hours</p>
              <a href="mailto:MARKETING@INTERNET-ASSETS.COM" className="hover:underline text-lg break-all">MARKETING@INTERNET-ASSETS.COM</a>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-6 bg-background/10 rounded-lg">
            <MapPin className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Our Reach</h3>
              <p className="text-primary-foreground/80">Serving businesses globally</p>
              <p className="text-lg">Digital Expertise, Global Reach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
