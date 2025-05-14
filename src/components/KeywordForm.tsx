
"use client";

import { useState, type FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Lightbulb } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Updated mock keyword generation logic
const generateMockKeywords = (nicheInput: string, businessInfoInput: string): { category: string, keywords: string[] }[] => {
  const niche = nicheInput.trim();
  const businessInfo = businessInfoInput.trim();

  let mainSubject = "";
  if (niche) {
    mainSubject = niche;
  } else if (businessInfo) {
    const commonBusinessWords = ["services", "company", "agency", "provider", "shop", "store", "business", "in", "for", "and", "the", "with", "llc", "inc", "az", "white", "mountains", "show", "low", "pinetop", "lakeside"];
    const businessWords = businessInfo.toLowerCase().split(' ').filter(word => !commonBusinessWords.includes(word) && word.length > 2);
    mainSubject = businessWords.slice(0, 2).join(' ');
    if (!mainSubject) {
        mainSubject = "local business"; // Fallback if parsing fails
    }
  } else {
    mainSubject = "digital marketing"; // Default fallback
  }

  // Ensure mainSubject is not empty or just whitespace before proceeding
  if (!mainSubject.trim()) {
    mainSubject = "keyword ideas"; // A more generic fallback if all else fails
  }


  const highTrafficKeywordsList: string[] = [
    `${mainSubject}`,
    `best ${mainSubject}`,
    `${mainSubject} services`,
    `local ${mainSubject}`,
    `${mainSubject} company`,
    `top ${mainSubject}`,
    `leading ${mainSubject} provider`,
  ];

  const nonCompetitiveKeywordsList: string[] = [
    `affordable ${mainSubject}`,
    `top-rated ${mainSubject}`,
    `expert ${mainSubject} for small business`,
    `custom ${mainSubject} solutions`,
    `reliable ${mainSubject} services`,
    `results-driven ${mainSubject}`,
  ];

  if (niche && businessInfo && businessInfo.split(' ').length > 1) {
    const specificBusinessAction = businessInfo.split(' ').slice(0,2).join(' ');
    nonCompetitiveKeywordsList.push(`${specificBusinessAction} for ${niche}`);
    nonCompetitiveKeywordsList.push(`how to find ${mainSubject} for ${niche}`);
  }


  const pickRandom = (arr: string[], count: number) => {
    const uniqueArr = Array.from(new Set(arr));
    const shuffled = [...uniqueArr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const finalCategories = [];

  const htKeywords = pickRandom(highTrafficKeywordsList, 3).filter(kw => kw.trim().toLowerCase() !== mainSubject.toLowerCase() && kw.replace(mainSubject, "").trim().length > 0);
  if (htKeywords.length > 0) {
    finalCategories.push({
      category: "High Traffic Keywords",
      keywords: htKeywords,
    });
  }

  const ncKeywords = pickRandom(nonCompetitiveKeywordsList, 3).filter(kw => kw.trim().toLowerCase() !== mainSubject.toLowerCase() && kw.replace(mainSubject, "").trim().length > 0);
   if (ncKeywords.length > 0) {
    finalCategories.push({
      category: "Non-Competitive High Traffic Keywords",
      keywords: ncKeywords,
    });
  }

  return finalCategories;
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
    const generatedKeywords = generateMockKeywords(niche, additionalInfo);
    setKeywordCategories(generatedKeywords);
    setIsLoading(false);

    if (generatedKeywords.length > 0 && generatedKeywords.some(cat => cat.keywords.length > 0)) {
        toast({
        title: "Keyword Ideas Generated!",
        description: "Here are some example keyword categories for your business.",
        });
    } else {
        toast({
        title: "Could Not Generate Keywords",
        description: "Please try refining your input for more specific keyword ideas.",
        variant: "destructive"
        });
    }
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
            placeholder="e.g., 'Boutique hotel offering pet-friendly rooms', 'Landscaping service specializing in xeriscaping'"
            className="w-full text-lg p-3"
            maxLength={300}
            value={additionalInfo}
            onChange={handleAdditionalInfoChange}
            required
            aria-required="true"
          />
          <p className="mt-2 text-sm text-muted-foreground">
            Describe your business, including its type/industry, main services, and target audience. (Max {300 - additionalInfo.length} characters remaining)
            </p>
         </div>
        <Button type="submit" className="w-full md:w-auto text-lg py-3 px-6" size="lg" disabled={isLoading}>
          {isLoading ? 'Generating Ideas...' : 'Generate Keyword Ideas'}
        </Button>
      </form>

      {keywordCategories.length > 0 && keywordCategories.some(cat => cat.keywords.length > 0) && (
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
                category.keywords.length > 0 && (
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
                )
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
