
import { AppHeader } from '@/components/AppHeader';
import { AppFooter } from '@/components/AppFooter';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { KeywordToolSection } from '@/components/sections/KeywordToolSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { ContactCtaSection } from '@/components/sections/ContactCtaSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <CaseStudiesSection />
        <KeywordToolSection />
        <WhyChooseUsSection />
        <ContactCtaSection />
      </main>
      <AppFooter />
    </div>
  );
}
