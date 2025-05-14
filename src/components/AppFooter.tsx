
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Facebook, Linkedin, Twitter, Instagram, MapPin } from 'lucide-react';

export function AppFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Elevating businesses in White Mountains, AZ &amp; Show Low, AZ with expert digital marketing strategies and asset growth for 15 years.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="https://www.facebook.com/internetassets" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://x.com/OptimizenWP" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">X (Twitter)</span>
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/internetassets/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="https://www.instagram.com/localinternetassets/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://maps.app.goo.gl/c3GhL8V8dcQZjbnj7" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Google Maps</span>
                <MapPin className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Solutions</h3>
              <ul role="list" className="mt-4 space-y-2">
                <li><Link href="#services" className="text-sm text-muted-foreground hover:text-primary">SEO Services</Link></li>
                <li><Link href="#services" className="text-sm text-muted-foreground hover:text-primary">Web Design</Link></li>
                <li><Link href="#services" className="text-sm text-muted-foreground hover:text-primary">Content Marketing</Link></li>
                <li><Link href="#keyword-tool" className="text-sm text-muted-foreground hover:text-primary">Keyword Tool</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Company</h3>
              <ul role="list" className="mt-4 space-y-2">
                <li><Link href="#case-studies" className="text-sm text-muted-foreground hover:text-primary">Case Studies</Link></li>
                <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
                 <li><Link href="#why-us" className="text-sm text-muted-foreground hover:text-primary">Why Choose Us</Link></li>
              </ul>
            </div>
             <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Legal</h3>
              <ul role="list" className="mt-4 space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {currentYear} Internet Assets. All rights reserved.{' '}
            <Link href="https://white-mountains.internet-assets.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">
              White Mountains, Arizona
            </Link>
            . Contact Russ Hunt at (928) 892-5233 or MARKETING@INTERNET-ASSETS.COM.
          </p>
        </div>
      </div>
    </footer>
  );
}
