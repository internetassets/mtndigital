
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { CheckCircle, Mountain, MapPin, Phone, Mail, Award, CircleUser, GraduationCap, Briefcase, Dog, Club, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const benefits = [
  { text: 'Deep understanding of digital marketing trends and White Mountains local SEO best practices.' },
  { text: 'Proven SEO results driving growth and online visibility for businesses in Show Low and surrounding areas.' },
  { text: 'Personalized digital strategies tailored to your unique business goals in the White Mountains market.' },
  { text: 'Transparent communication and detailed reporting on campaign progress for your peace of mind.' },
  { text: 'Dedicated local team passionate about helping White Mountains businesses build valuable, high-ranking internet assets.' },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Why Partner With Us?</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Your Trusted <span className="text-primary">White Mountains Digital Marketing Partner for SEO & Non-Competitive Keyword Growth</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              At Internet Assets, we combine cutting-edge White Mountains digital marketing expertise with a deep understanding of your unique business. We craft tailored SEO and content strategies that deliver measurable results, helping Show Low and White Mountains businesses build a strong, valuable online presence and achieve significant growth.
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-6 w-6 text-accent mr-3 mt-1" />
                  <span className="text-foreground">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2 aspect-w-4 aspect-h-3 lg:aspect-w-1 lg:aspect-h-1 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://storage.googleapis.com/msgsndr/Gzu2iW2sZuZiVlnRqNtN/media/6823d47175cc4686c35fee37.jpeg"
              alt="Scenic mountain landscape representing partnership and trust in the White Mountains for Internet Assets"
              width={800}
              height={600}
              className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-105"
              data-ai-hint="mountain landscape"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
              sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 48px), 576px"
            />
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              More About <span className="text-primary">Internet Assets: Your Local SEO & LSI Keyword Experts in Show Low & White Mountains</span>
            </h3>
            <p className="mt-3 max-w-xl mx-auto text-lg text-muted-foreground">
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
                    With <strong>15 years of experience</strong>, we specialize in growing your online footprint and turning it into a valuable asset. Our focus includes local SEO, LSI keyword strategies, and effective content marketing.
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
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <h4 className="text-md font-semibold mb-3 text-foreground">Connect With Us:</h4>
                    <div className="flex space-x-4 items-center">
                      <Link href="https://www.facebook.com/internetassets" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="Facebook">
                        <Facebook className="h-6 w-6" />
                      </Link>
                      <Link href="https://x.com/OptimizenWP" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="X (formerly Twitter)">
                        <Twitter className="h-6 w-6" />
                      </Link>
                      <Link href="https://www.instagram.com/localinternetassets/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="Instagram">
                        <Instagram className="h-6 w-6" />
                      </Link>
                      <Link href="https://www.linkedin.com/in/internetassets/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="LinkedIn">
                        <Linkedin className="h-6 w-6" />
                      </Link>
                      <Link href="https://maps.app.goo.gl/c3GhL8V8dcQZjbnj7" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="Google Maps">
                        <MapPin className="h-6 w-6" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <CircleUser className="h-7 w-7 mr-3 text-primary" />
                    Meet Russ Hunt - Founder
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-lg">
                  <div className="flex items-center">
                     <Avatar className="h-24 w-24 mr-4">
                       <AvatarImage 
                        src="https://storage.googleapis.com/msgsndr/Gzu2iW2sZuZiVlnRqNtN/media/6823d471b44e3c41ed37ded7.jpeg" 
                        alt="Russ Hunt - Internet Assets Founder & White Mountains SEO Expert" 
                        data-ai-hint="person portrait"
                        className="object-cover object-top"
                        />
                       <AvatarFallback>RH</AvatarFallback>
                     </Avatar>
                     <p className="text-xl font-semibold">Russ Hunt, ASU Small Business Graduate</p>
                  </div>
                  <p>
                    Russ brings a wealth of knowledge from his ASU education and diverse professional background, including real estate and hospitality, to help White Mountains small businesses thrive online. He applies his passion to digital strategy and SEO.
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

            <div className="lg:col-span-1 space-y-8"> {/* Ensure cards in this column stack */}
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
                      title="Google Map of Show Low, AZ - Internet Assets Service Area"
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground text-center">
                    While we serve the entire White Mountains region, our heart is in Show Low.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Mail className="h-7 w-7 mr-3 text-primary" />
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg overflow-hidden border">
                    <iframe
                      src="https://api.internet-assets.com/widget/form/2OCDKAJYPIaTVWpgznK2"
                      style={{ width:'100%', border:'none', borderRadius:'4px', minHeight: '487px' }}
                      id="inline-2OCDKAJYPIaTVWpgznK2" 
                      data-layout="{'id':'INLINE'}"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="Internet Assets New Lead SHOW LOW"
                      data-height="487"
                      data-layout-iframe-id="inline-2OCDKAJYPIaTVWpgznK2"
                      data-form-id="2OCDKAJYPIaTVWpgznK2"
                      title="Internet Assets New Lead SHOW LOW"
                      scrolling="no"
                    >
                    </iframe>
                  </div>
                  <Script 
                    src="https://api.internet-assets.com/js/form_embed.js" 
                    strategy="lazyOnload" 
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

    