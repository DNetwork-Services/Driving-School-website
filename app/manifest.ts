import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'श्री संत कृपा प्रसाद मोटर ड्रायव्हिंग स्कूल',
    short_name: 'संत कृपा ड्रायव्हिंग',
    description: 'Best Driving School in Savada, Raver, Jalgaon, Maharashtra. Learning Licence, Permanent Licence, RTO Services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fafaf9',
    theme_color: '#16a34a',
    orientation: 'portrait',
    categories: ['education', 'business'],
    lang: 'mr',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
