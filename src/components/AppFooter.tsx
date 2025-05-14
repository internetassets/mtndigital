
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Facebook, Linkedin, Twitter, Instagram, MapPin, Phone, Mail, Search, MonitorSmartphone, PenTool, Lightbulb, Briefcase, ThumbsUp } from 'lucide-react';

export function AppFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Elevating businesses in White Mountains, AZ &amp; Show Low, AZ with expert digital marketing strategies and asset growth for 15 years.
            </p>
            <div className="mt-6 space-y-3">
              <h4 className="text-xs font-semibold text-foreground tracking-wider uppercase">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-muted-foreground">
                  <Phone className="mr-3 h-4 w-4 flex-shrink-0 text-primary" />
                  <a href="tel:9288925233" className="hover:text-primary">(928) 892-5233</a>
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <Mail className="mr-3 h-4 w-4 flex-shrink-0 text-primary" />
                  <a href="mailto:MARKETING@INTERNET-ASSETS.COM" className="hover:text-primary break-all">MARKETING@INTERNET-ASSETS.COM</a>
                </li>
                 <li className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-3 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>White Mountains, AZ &amp; Show Low, AZ</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 flex space-x-4">
              <Link href="https://www.facebook.com/internetassets" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://x.com/OptimizenWP" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="X (Twitter)">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/internetassets/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="https://www.instagram.com/localinternetassets/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://maps.app.goo.gl/c3GhL8V8dcQZjbnj7" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="Google Maps">
                <MapPin className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="sm:col-span-1">
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Solutions</h3>
              <ul role="list" className="mt-4 space-y-2">
                <li>
                  <Link href="#services" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary py-1">
                    <Search className="mr-3 h-4 w-4 text-primary/80" />
                    SEO Services
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary py-1">
                    <MonitorSmartphone className="mr-3 h-4 w-4 text-primary/80" />
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary py-1">
                    <PenTool className="mr-3 h-4 w-4 text-primary/80" />
                    Content Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#keyword-tool" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary py-1">
                    <Lightbulb className="mr-3 h-4 w-4 text-primary/80" />
                    Keyword Tool
                  </Link>
                </li>
                <li>
                  <Link href="#case-studies" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary py-1">
                    <Briefcase className="mr-3 h-4 w-4 text-primary/80" />
                    Case Studies
                  </Link>
                </li>
                 <li>
                  <Link href="#why-us" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary py-1">
                    <ThumbsUp className="mr-3 h-4 w-4 text-primary/80" />
                    Why Choose Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sm:col-span-2">
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Our Service Area</h3>
              <div className="mt-4 aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border min-h-[200px] sm:min-h-[250px]">
                <iframe
                  src="https://www.google.com/maps/d/u/4/embed?mid=1a5c0ucUJhT7I4TFp3cS-3hAg3X4&ehbc=2E312F"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Internet Assets Service Area Map"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {currentYear} Internet Assets. All rights reserved.{' '}
            <Link href="https://white-mountains.internet-assets.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">
              White Mountains, Arizona
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

