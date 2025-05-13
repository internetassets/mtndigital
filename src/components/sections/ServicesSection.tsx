
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Search, MonitorSmartphone, PenTool, Users, BarChart3, Mail } from 'lucide-react';

const services = [
  {
    icon: <Search className="h-10 w-10 text-primary mb-4" />,
    title: 'Local SEO Optimization',
    description: 'Rank higher in White Mountains searches and attract more local customers. We optimize your online presence for Pinetop, Show Low, and beyond.',
    keywords: 'White Mountains SEO, Pinetop local search, Show Low business ranking'
  },
  {
    icon: <MonitorSmartphone className="h-10 w-10 text-primary mb-4" />,
    title: 'Custom Web Design',
    description: 'Beautiful, responsive websites that captivate visitors and convert them into loyal customers. Tailored for businesses in Arizona\'s high country.',
    keywords: 'Arizona web design, responsive websites White Mountains, Pinetop web developer'
  },
  {
    icon: <PenTool className="h-10 w-10 text-primary mb-4" />,
    title: 'Content Marketing',
    description: 'Engaging, SEO-friendly content that tells your unique local story and builds authority in the White Mountains market.',
    keywords: 'Content strategy Arizona, local business blogging, White Mountains storytelling'
  },
  {
    icon: <Users className="h-10 w-10 text-primary mb-4" />,
    title: 'Social Media Management',
    description: 'Connect with your community and build brand loyalty through effective social media strategies tailored for the White Mountains audience.',
    keywords: 'White Mountains social media, local marketing Pinetop, Show Low Facebook ads'
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary mb-4" />,
    title: 'PPC Advertising',
    description: 'Targeted pay-per-click campaigns that drive immediate traffic and leads for your White Mountains business. Maximize your ROI.',
    keywords: 'Arizona PPC, Google Ads White Mountains, local advertising Show Low'
  },
  {
    icon: <Mail className="h-10 w-10 text-primary mb-4" />,
    title: 'Email Marketing',
    description: 'Nurture leads and retain customers with personalized email campaigns designed for White Mountains businesses.',
    keywords: 'Email campaigns Pinetop, Arizona local marketing, customer retention Show Low'
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Our Digital Marketing Services for <span className="text-primary">Arizona's High Country</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Comprehensive solutions to boost your online presence and achieve your business goals in the White Mountains.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
              <CardHeader className="items-center text-center">
                {service.icon}
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base text-center">{service.description}</CardDescription>
                <p className="mt-3 text-xs text-center text-muted-foreground/80 italic">Keywords: {service.keywords}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
