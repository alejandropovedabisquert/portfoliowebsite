import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.alejandropoveda.es'
  
  return [
    {
      url: baseUrl,
      lastModified:  new Date(),
      alternates: {
        languages: {
          es: baseUrl,
          en: `${baseUrl}/en`,
        },
      },
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: baseUrl,
          en:  `${baseUrl}/en`,
        },
      },
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}