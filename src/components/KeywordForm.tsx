
"use client";

import { useState, type FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock keyword generation logic
const generateMockKeywords = (industry: string): string[] => {
  const baseKeywords = [
    "SEO services", "digital marketing", "local business", "online presence",
    "web design", "content creation", "social media", "PPC ads",
    "White Mountains", "Pinetop", "Show Low", "Arizona", "AZ"
  ];
  
  const industrySpecific = industry.toLowerCase().split(" ").filter(word => word.length > 2);
  let generated: string[] = [];

  if (industrySpecific.length > 0) {
    generated.push(`${industrySpecific.join(" ")} White Mountains`);
    generated.push(`best ${industrySpecific.join(" ")} Pinetop AZ`);
    generated.push(`local ${industrySpecific.join(" ")} Show Low`);
    generated.push(`${industrySpecific[0]} SEO services Arizona`);
  }

  // Add some generic local keywords
  generated.push(`White Mountains ${industrySpecific[0] || baseKeywords[Math.floor(Math.random() * 4)]}`);
  generated.push(`Pinetop ${industrySpecific[0] || baseKeywords[Math.floor(Math.random() * 4) + 4]}`);
  generated.push(`Show Low ${baseKeywords[Math.floor(Math.random() * baseKeywords.length)]}`);
  generated.push(`affordable ${industrySpecific[0] || 'digital marketing'} White Mountains`);

  // Ensure unique keywords and limit to 5-7
  return Array.from(new Set(generated.filter(kw => kw))).slice(0, Math.floor(Math.random() * 3) + 5);
};


export function KeywordForm() {
  const [industry, setIndustry] = useState('');
  const [keywords, setKeywords] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!industry.trim()) {
      toast({
        title: "Industry Required",
        description: "Please enter your industry or business type.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    const generatedKeywords = generateMockKeywords(industry);
    setKeywords(generatedKeywords);
    setIsLoading(false);
    toast({
      title: "Keywords Generated!",
      description: "Here are some initial keyword ideas for your business.",
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-foreground mb-1">
            Your Industry / Business Type
          </label>
          <Input
            id="industry"
            type="text"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            placeholder="e.g., 'Pinetop Bakery', 'Show Low Plumbing'"
            className="w-full text-lg p-3"
            aria-label="Your Industry or Business Type"
          />
          <p className="mt-2 text-sm text-muted-foreground">
            Enter a brief description of your business to get keyword ideas tailored for the White Mountains region.
          </p>
        </div>
        <Button type="submit" className="w-full md:w-auto text-lg py-3 px-6" size="lg" disabled={isLoading}>
          {isLoading ? 'Generating...' : 'Generate Keyword Ideas'}
        </Button>
      </form>

      {keywords.length > 0 && (
        <Card className="mt-10 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Lightbulb className="h-6 w-6 text-accent mr-3" />
              <h4 className="text-xl font-semibold text-foreground">
                Potential SEO Keywords for <span className="text-primary">{industry}</span>
              </h4>
            </div>
            <ul className="space-y-2 list-disc list-inside">
              {keywords.map((keyword, index) => (
                <li key={index} className="text-foreground">
                  {keyword}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              <strong>Note:</strong> These are AI-generated suggestions. For a comprehensive SEO strategy and keyword research tailored to your specific business goals in the White Mountains, please contact us for a consultation.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
