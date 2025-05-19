
import { AppHeader } from '@/components/AppHeader';
import { AppFooter } from '@/components/AppFooter';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { KeywordToolSection } from '@/components/sections/KeywordToolSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactCtaSection } from '@/components/sections/ContactCtaSection';
import type { Metadata } from 'next';

// Re-applying metadata here if it's specific to the homepage and needs to be dynamic or use LocalBusiness schema.
// Otherwise, if layout.tsx metadata is sufficient, this can be simpler.
export const metadata: Metadata = {
  title: 'Internet Assets | White Mountains Digital Marketing | 928-892-5233',
  description: 'Boost your White Mountains AZ business with expert Digital Marketing, SEO Services & Web Design from Internet Assets. Call 928-892-5233 for high-traffic results and local SEO success.',
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService", // Using ProfessionalService as it's a digital marketing agency. Could also use LocalBusiness or Organization.
  "name": "Internet Assets",
  "image": "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/Gzu2iW2sZuZiVlnRqNtN/media/664c46f47068a56568349c0d.png",
  "url": "https://white-mountains.internet-assets.com/",
  "telephone": "+1-928-892-5233",
  "email": "MARKETING@INTERNET-ASSETS.COM",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Show Low",
    "addressRegion": "AZ",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Show Low"
    },
    {
      "@type": "City",
      "name": "Pinetop-Lakeside"
    },
    {
      "@type": "City",
      "name": "Snowflake"
    },
    {
      "@type": "City",
      "name": "Taylor"
    },
    {
      "@type": "City",
      "name": "Heber-Overgaard"
    },
    {
      "@type": "City",
      "name": "Springerville"
    },
    {
      "@type": "City",
      "name": "Eagar"
    },
    {
      "@type": "City",
      "name": "St. Johns"
    },
    {
      "@type": "City",
      "name": "Greer"
    },
    {
      "@type": "City",
      "name": "Vernon"
    },
    {
      "@type": "City",
      "name": "Linden"
    },
    {
      "@type": "City",
      "name": "Concho"
    },
    {
      "@type": "City",
      "name": "Shumway"
    },
    {
      "@type": "City",
      "name": "Clay Springs"
    },
    {
      "@type": "AdministrativeArea",
      "name": "White Mountains Arizona"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "description": "Expert Digital Marketing, SEO Services & Web Design for businesses in White Mountains, AZ. Grow your internet assets with proven strategies. Call 928-892-5233.",
  "founder": {
    "@type": "Person",
    "name": "Russ Hunt",
    "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Arizona State University",
        "sameAs": "https://www.asu.edu/"
    },
    "knowsAbout": ["Digital Marketing", "SEO", "Web Design", "Small Business Strategy", "Real Estate", "Hospitality", "Swing Trading"]
  },
  "sameAs": [
    "https://www.facebook.com/internetassets",
    "https://x.com/OptimizenWP",
    "https://www.linkedin.com/in/internetassets/",
    "https://www.instagram.com/localinternetassets/",
    "https://maps.app.goo.gl/c3GhL8V8dcQZjbnj7"
  ],
  "priceRange": "$$" // Example price range, adjust as needed
};


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <AppHeader />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <CaseStudiesSection />
        <KeywordToolSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ContactCtaSection />
      </main>
      <AppFooter />
    </div>
  );
}
