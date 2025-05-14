
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
        `${mainTopic} services ${region}`,
        `best ${mainTopic} ${region}`,
        `top ${primaryInput} companies ${region}`,
        `${primaryInput} agency ${region}`,
      ]
    },
    // {
    //   category: "LSI Longtail High Traffic Keywords",
    //   keywords: [
    //     `how to improve ${primaryInput} for ${mainTopic} in ${region}`,
    //     `affordable ${mainTopic} solutions ${region}`,
    //     `expert ${primaryInput} consulting for ${mainTopic} in ${region}`,
    //     `benefits of professional ${mainTopic} services for ${mainTopic}`,
    //   ]
    // },
    {
      category: "Non-Competitive High Traffic Keywords",
      keywords: [
        `niche ${primaryInput} strategies for ${mainTopic} in ${region}`,
        `${mainTopic} growth hacks for local businesses ${region}`,
        `understanding ${primaryInput} analytics for ${mainTopic}`,
        `future of ${mainTopic} in ${region} for local businesses`,
      ]
    }
  ];

  // Select a few keywords from each category to present
  return categories.map(cat => ({
    ...cat,
    keywords: cat.keywords.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 2) + 3) // pick 3-4 random keywords
  })).filter(cat => cat.keywords.length > 0);
};


export function KeywordForm() {
  const [niche, setNiche] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [keywordCategories, setKeywordCategories] = useState<{ category: string, keywords: string[] }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!additionalInfo.trim()) {
       toast({
        title: "Business Details Required",
        description: "Please describe your business type & key details to generate keyword ideas.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    const userInput = `${niche} ${additionalInfo}`.trim();
    const generatedKeywords = generateMockKeywords(userInput || "general business");
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
          <label htmlFor="niche" className="block text-sm font-medium text-foreground mb-1">
            Specific Niche or Service (Optional)
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
            Specify a specialization for more targeted suggestions.
          </p>
        </div>
         <div>
          <label htmlFor="additionalInfo" className="block text-sm font-medium text-foreground mb-1">
            Your Business Type & Key Details*
          </label>
          <Textarea 
            id="additionalInfo" 
            placeholder="e.g., 'Boutique hotel in Pinetop offering pet-friendly rooms', 'Landscaping service in Show Low specializing in xeriscaping'"
            className="w-full text-lg p-3" 
            maxLength={300}
            value={additionalInfo}
            onChange={handleAdditionalInfoChange}
            required
            aria-required="true"
          />
          <p className="mt-2 text-sm text-muted-foreground">
            Describe your business, including its type/industry, main services, and target audience in the White Mountains region. (Max {300 - additionalInfo.length} characters remaining)
            </p>
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
                 Keyword Ideas Based On Your Input
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

