
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Search, MonitorSmartphone, PenTool, Users, BarChart3, Mail } from 'lucide-react';

const services = [
  {
    icon: <Search className="h-10 w-10 text-primary mb-4" />,
    title: 'White Mountains AZ SEO Optimization: Boost Local Rankings',
    description: 'Boost your White Mountains AZ business ranking and attract more local customers with our expert SEO optimization. We tailor strategies for maximum online visibility and organic traffic growth.',
    keywords: 'SEO services White Mountains, search engine optimization Arizona, business ranking Show Low, local organic traffic'
  },
  {
    icon: <MonitorSmartphone className="h-10 w-10 text-primary mb-4" />,
    title: 'Custom Web Design in Show Low: High-Converting & Responsive Sites',
    description: 'Get a stunning, responsive custom web design that captivates Show Low & White Mountains visitors and converts them into loyal customers. Our websites are built for modern business success and user experience.',
    keywords: 'web design Show Low, responsive websites White Mountains, user experience design Arizona, website development Pinetop'
  },
  {
    icon: <PenTool className="h-10 w-10 text-primary mb-4" />,
    title: 'Strategic Content Marketing: LSI Keywords & White Mountains Authority',
    description: 'Engage your White Mountains audience with compelling, SEO-friendly content marketing. We write optimized content that tells your unique story and builds authority in the local market.',
    keywords: 'content strategy White Mountains, business blogging Show Low, brand storytelling Arizona, SEO content creation'
  },
  {
    icon: <Users className="h-10 w-10 text-primary mb-4" />,
    title: 'White Mountains Social Media: Local Engagement & Brand Growth',
    description: 'Connect with your White Mountains community and build brand loyalty through effective social media strategies tailored for your local audience and business type.',
    keywords: 'social media marketing White Mountains, SMM Show Low, community management Arizona, brand engagement Pinetop'
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary mb-4" />,
    title: 'Targeted PPC for White Mountains: Maximize ROI with Google Ads',
    description: 'Drive immediate, targeted traffic and leads for your White Mountains business with our expert pay-per-click campaigns. We focus on maximizing your ROI in the local market.',
    keywords: 'PPC services White Mountains, Google Ads Show Low, paid advertising Arizona, local online ad campaigns'
  },
  {
    icon: <Mail className="h-10 w-10 text-primary mb-4" />,
    title: 'Effective Email Marketing for White Mountains Customer Retention',
    description: 'Nurture leads and retain customers in the White Mountains area with personalized email campaigns designed for high engagement and conversion rates.',
    keywords: 'email campaigns White Mountains, marketing automation Show Low, customer retention Arizona, local lead nurturing'
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Our Digital Marketing Services for <span className="text-primary">White Mountains Business Growth: SEO, Web Design, LSI Keywords</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Comprehensive solutions to boost your online presence and achieve your business goals in the White Mountains region.
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
