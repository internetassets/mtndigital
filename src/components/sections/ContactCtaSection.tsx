
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { BookingModal } from '@/components/BookingModal';

export function ContactCtaSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Ready to Elevate Your White Mountains Business? <span className="block">Contact Internet Assets Today!</span>
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-primary-foreground/90">
          Let's discuss how Internet Assets can elevate your online presence. Schedule your free, no-obligation consultation today and take the first step towards digital market leadership.
        </p>
        <div className="mt-10">
           <BookingModal
            trigger={
              <Button
                size="lg"
                className="text-lg py-4 px-8 shadow-lg hover:shadow-xl transition-shadow bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Schedule Free Consultation
              </Button>
            }
          />
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="flex flex-col items-start space-y-3 p-6 bg-background/10 rounded-lg">
            <div className="flex items-start space-x-4">
                <Phone className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Call Or Text Us For SEO, PPC, Or Web Design Ideas</h3>
                  <p className="text-primary-foreground/80">Mon-Fri, 9am-5pm</p>
                  <a href="tel:9288925233" className="hover:underline text-lg">(928) 892-5233</a>
                </div>
            </div>
            <p className="text-base italic text-accent/90 mt-auto pt-2">"We Make The Phone Ring"</p>
          </div>
          <div className="flex items-start space-x-4 p-6 bg-background/10 rounded-lg">
            <Mail className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Email for Your White Mountains SEO & Web Design Project Quote</h3>
              <p className="text-primary-foreground/80">Get a response within 24 hours</p>
              <a href="mailto:MARKETING@INTERNET-ASSETS.COM" className="hover:underline text-lg break-all">MARKETING@INTERNET-ASSETS.COM</a>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-6 bg-background/10 rounded-lg">
            <MapPin className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Local Business Website SEO Marketing</h3>
              <p className="text-primary-foreground/80">Serving businesses locally to get more calls, leads and sales.</p>
              <p className="text-lg">White Mountains, AZ & Show Low, AZ</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-3 text-accent">Proudly Serving the White Mountains Area:</h4>
            <h4 className="text-md text-primary-foreground/90 leading-relaxed font-normal tracking-normal">
              Show Low, Pinetop-Lakeside, Snowflake, Taylor, Heber-Overgaard, Springerville, Eagar, St. Johns, Greer, Vernon, Linden, Concho, Shumway, Clay Springs, White Mountain Lakes.
            </h4>
          </div>
          <h3 className="text-xl font-semibold mb-6">Connect With Us: White Mountains Digital Marketing Leaders</h3>
          <div className="flex justify-center space-x-6">
            <Link href="https://www.facebook.com/internetassets" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-8 w-8" />
            </Link>
            <Link href="https://x.com/OptimizenWP" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent">
              <span className="sr-only">X (Twitter)</span>
              <Twitter className="h-8 w-8" />
            </Link>
            <Link href="https://www.linkedin.com/in/internetassets/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-8 w-8" />
            </Link>
            <Link href="https://www.instagram.com/localinternetassets/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-8 w-8" />
            </Link>
            <Link href="https://maps.app.goo.gl/c3GhL8V8dcQZjbnj7" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent">
              <span className="sr-only">Google Maps</span>
              <MapPin className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
