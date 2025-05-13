
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

export function AppFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Elevating businesses with expert digital marketing strategies and asset growth.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
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
                <li><Link href="#why-us" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link href="#case-studies" className="text-sm text-muted-foreground hover:text-primary">Case Studies</Link></li>
                <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
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
            &copy; {currentYear} Internet Assets. All rights reserved. Helping businesses build valuable internet presence.
          </p>
        </div>
      </div>
    </footer>
  );
}
