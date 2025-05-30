import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { name: 'Services', href: '#services' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Keyword Tool', href: '#keyword-tool' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'GoHighLevel', href: 'https://highlevel.rahuntinternetassets.com/' },
];

export function AppHeader() {
  const phoneNumberStyle: React.CSSProperties = {
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-2">
            <Button asChild variant="ghost">
                <Link href="#contact">Contact Us</Link>
            </Button>
            <Button asChild className="shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Link href="tel:9288925233">
                  <span style={phoneNumberStyle}>
                    928-892-5233
                  </span>
                </Link>
            </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-6 p-6">
              <Logo />
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <Button asChild className="w-full shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Link href="tel:9288925233">
                 <span style={phoneNumberStyle}>
                    928-892-5233
                  </span>
                </Link>
              </Button>
               <Button asChild variant="outline" className="w-full">
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
