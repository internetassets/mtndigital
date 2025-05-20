
import type { MetadataRoute } from 'next';

const BASE_URL = 'https://rahuntinternetassets.com'; // Updated domain

export default function sitemap(): MetadataRoute.Sitemap {
  // For a single-page application (SPA) with hash-based routing for sections,
  // the primary URL is the most important to include.
  // If sections were actual separate pages (e.g., /services, /case-studies),
  // they would be listed individually here.

  const lastModified = new Date().toISOString();

  const mainPage = {
    url: BASE_URL,
    lastModified: lastModified,
    changeFrequency: 'monthly' as MetadataRoute.Sitemap[0]['changeFrequency'], // Ensuring type correctness
    priority: 1.0,
  };

  // If you had actual separate pages, you would add them like this:
  // const servicesPage = {
  //   url: `${BASE_URL}/services`,
  //   lastModified: lastModified,
  //   changeFrequency: 'monthly',
  //   priority: 0.8,
  // };
  // return [mainPage, servicesPage];

  return [mainPage];
}

