import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://me-mu-ecru.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    // If you add more pages later (like /projects or /about), add them here!
  ];
}