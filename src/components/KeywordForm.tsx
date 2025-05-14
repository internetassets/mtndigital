
"use client";

import { useState, type FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Lightbulb } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Updated mock keyword generation logic
const generateMockKeywords = (userInput: string): { category: string, keywords: string[] }[] => {
  const inputParts = userInput.toLowerCase().split(" ").filter(word => word.length > 2);
  const mainTopic = inputParts.length > 0 ? inputParts.join(" ") : "your business";
  const primaryInput = inputParts.length > 0 ? inputParts[0] : "digital marketing";
  const region = "White Mountains AZ"; // Assuming a default region for local context

  const categories = [
    {
      category: "High Traffic Keywords",
      keywords: [
        `${mainTopic} services`,
        `best ${mainTopic}`,
        `top ${primaryInput} companies ${region}`,
        `${primaryInput} agency ${region}`,
      ]
    },
    {
      category: "LSI Longtail High Traffic Keywords",
      keywords: [
        `how to improve ${primaryInput} for ${mainTopic}`,
        `affordable ${mainTopic} solutions ${region}`,
        `expert ${primaryInput} consulting for ${mainTopic}`,
        `benefits of professional ${mainTopic} services`,
      ]
    },
    {
      category: "Non-Competitive High Traffic Keywords",
      keywords: [
        `niche ${primaryInput} strategies for ${mainTopic} in ${region}`,
        `${mainTopic} growth hacks for local businesses`,
        `understanding ${primaryInput} analytics for ${mainTopic}`,
        `future of ${mainTopic} in ${region}`,
      ]
    }
  ];

  // Select a few keywords from each category to present
  return categories.map(cat => ({
    ...cat,
    keywords: cat.keywords.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 2) + 2) // pick 2-3 random keywords
  })).filter(cat => cat.keywords.length > 0);
};


export function KeywordForm() {
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('');
  const [niche, setNiche] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [keywordCategories, setKeywordCategories] = useState<{ category: string, keywords: string[] }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!industry.trim()) {
       toast({
        title: "Information Required",
        description: "Please fill in at least the Industry/Business Type field.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    const userInput = `${businessName} ${industry} ${niche} ${additionalInfo}`.trim();
    const generatedKeywords = generateMockKeywords(userInput || industry);
    setKeywordCategories(generatedKeywords);
    setIsLoading(false);
    toast({
      title: "Keyword Ideas Generated!",
      description: "Here are some example keyword categories for your business.",
    });
  };

  const handleAdditionalInfoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAdditionalInfo(event.target.value);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-foreground mb-1">
            Your Business Name (Optional)
          </label>
          <Input
            id="businessName"
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="e.g., 'Smith & Co. Photography'"
            className="w-full text-lg p-3"
          />
        </div>
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-foreground mb-1">
            Your Industry / Business Type
          </label>
          <Input
            id="industry"
            type="text"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            placeholder="e.g., 'E-commerce Store', 'Local Bakery', 'Tech Startup'"
            className="w-full text-lg p-3"
            aria-label="Your Industry or Business Type"
            required
          />
          <p className="mt-2 text-sm text-muted-foreground">
             Enter a brief description of your business to get keyword ideas for your target audience.
          </p>
        </div>
        <div>
          <label htmlFor="niche" className="block text-sm font-medium text-foreground mb-1">
            Your Niche (Optional)
          </label>
          <Input
            id="niche"
            type="text"
            value={niche}
            onChange={(e) => setNiche(e.target.value)}
            placeholder="e.g., 'Wedding Photography', 'Vegan Bakery', 'AI Software'"
            className="w-full text-lg p-3"
          />
           <p className="mt-2 text-sm text-muted-foreground">
            Specify your specialization within your industry for more targeted suggestions.
          </p>
        </div>
         <div>
          <label htmlFor="additionalInfo" className="block text-sm font-medium text-foreground mb-1">
            Additional Information (Optional, max 300 characters)
          </label>
          <Textarea 
            id="additionalInfo" 
            placeholder="e.g., Target audience, specific services, unique selling points" 
            className="w-full text-lg p-3" 
            maxLength={300}
            value={additionalInfo}
            onChange={handleAdditionalInfoChange}
          />
          <p className="mt-2 text-sm text-muted-foreground">{300 - additionalInfo.length} characters remaining</p>
         </div>
        <Button type="submit" className="w-full md:w-auto text-lg py-3 px-6" size="lg" disabled={isLoading}>
          {isLoading ? 'Generating Ideas...' : 'Generate Keyword Ideas'}
        </Button>
      </form>

      {keywordCategories.length > 0 && (
        <Card className="mt-10 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-6">
              <Lightbulb className="h-8 w-8 text-accent mr-3" />
              <h4 className="text-xl font-semibold text-foreground">
                 Potential SEO Keyword Categories for <span className="text-primary">{businessName || industry}</span>
              </h4>
            </div>
            <div className="space-y-6">
              {keywordCategories.map((category, index) => (
                <div key={index}>
                  <h5 className="text-lg font-semibold text-primary mb-2">{category.category}:</h5>
                  <ul className="space-y-2 list-disc list-inside pl-4">
                    {category.keywords.map((keyword, kwIndex) => (
                      <li key={kwIndex} className="text-foreground">
                        {keyword}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              <strong>Note:</strong> These are AI-generated examples to illustrate different keyword types. 
              For a comprehensive SEO strategy, including in-depth keyword research, competitor analysis, and content planning tailored to your business, please contact us for a consultation.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
