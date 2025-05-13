
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Mountain, MapPin, Phone, Mail, Award, UserCircle, GraduationCap, Briefcase, Dog, Club } from 'lucide-react'; // Using Club for Golf

export function AboutUsSection() {
  return (
    <section id="about-us" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            About <span className="text-primary">Internet Assets</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Your dedicated partner for digital success in the White Mountains.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-start">
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Mountain className="h-7 w-7 mr-3 text-primary" />
                  Our Mission &amp; Presence
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg">
                <p>
                  Internet Assets is committed to empowering local businesses in{' '}
                  <strong>White Mountains, AZ &amp; Show Low, AZ</strong> through innovative digital marketing solutions.
                  With <strong>15 years of experience</strong>, we specialize in growing your online footprint and turning it into a valuable asset.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    <span>Serving: White Mountains, AZ &amp; Show Low, AZ</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-primary" />
                    <a href="tel:9288925233" className="hover:text-primary">(928) 892-5233</a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-primary" />
                    <a href="mailto:MARKETING@INTERNET-ASSETS.COM" className="hover:text-primary break-all">MARKETING@INTERNET-ASSETS.COM</a>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 mr-2 text-primary" />
                    <span>Over 15 Years of Digital Marketing Experience</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <UserCircle className="h-7 w-7 mr-3 text-primary" />
                  Meet Russ Hunt - Founder
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-lg">
                <div className="flex items-center">
                   <Avatar className="h-16 w-16 mr-4">
                     <AvatarImage src="https://picsum.photos/seed/russ-hunt/100/100" alt="Russ Hunt" data-ai-hint="professional portrait" />
                     <AvatarFallback>RH</AvatarFallback>
                   </Avatar>
                   <p className="text-xl font-semibold">Russ Hunt, ASU Small Business Graduate</p>
                </div>
                <p>
                  Russ brings a wealth of knowledge and a passion for helping small businesses thrive. His diverse background enriches his approach to digital strategy.
                </p>
                <ul className="list-none space-y-2 pl-0">
                  <li className="flex items-center"><GraduationCap className="h-5 w-5 mr-2 text-primary" /><span>ASU Small Business Graduate</span></li>
                  <li className="flex items-center"><Briefcase className="h-5 w-5 mr-2 text-primary" /><span>Expertise in Real Estate, Hospitality &amp; Swing Trading</span></li>
                  <li className="flex items-center"><Dog className="h-5 w-5 mr-2 text-primary" /><span>Loves his dog, Bella</span></li>
                  <li className="flex items-center"><Club className="h-5 w-5 mr-2 text-primary" /><span>Enjoys golfing on weekends</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MapPin className="h-7 w-7 mr-3 text-primary" />
                  Find Us in Show Low, AZ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden border">
                  <iframe
                    src="https://maps.google.com/maps?q=Show%20Low%2C%20AZ&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map of Show Low, AZ"
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
                <p className="mt-4 text-sm text-muted-foreground text-center">
                  While we serve the entire White Mountains region, our heart is in Show Low.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
