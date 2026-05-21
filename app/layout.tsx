import type { Metadata, Viewport } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans({
  subsets: ['latin', 'devanagari'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
})

// SEO optimized metadata for Maharashtra local SEO and Google ranking
export const metadata: Metadata = {
  metadataBase: new URL('https://santkrupadriving.vercel.app'),
  title: {
    default: 'श्री संत कृपा प्रसाद मोटर ड्रायव्हिंग स्कूल | Driving School Savada, Raver, Jalgaon',
    template: '%s | श्री संत कृपा प्रसाद मोटर ड्रायव्हिंग स्कूल'
  },
  description: 'महाराष्ट्रातील सावदा, रावेर, जळगाव येथील विश्वासार्ह ड्रायव्हिंग स्कूल. Learning Licence, Permanent Licence, RTO Services, Car & Bike Training. Best Driving School in Raver Taluka. संपर्क: 9822502053, 9403555482',
  keywords: [
    // Marathi keywords
    'ड्रायव्हिंग स्कूल सावदा',
    'ड्रायव्हिंग स्कूल रावेर',
    'ड्रायव्हिंग स्कूल जळगाव',
    'लर्निंग लायसन्स सावदा',
    'परमनंट लायसन्स रावेर',
    'गाडी शिकायला सावदा',
    'मोटर ट्रेनिंग जळगाव',
    'RTO सेवा रावेर',
    // English keywords
    'driving school savada',
    'driving school raver',
    'driving school jalgaon maharashtra',
    'learning licence raver',
    'permanent licence jalgaon',
    'RTO services savada',
    'car driving training raver',
    'bike driving school jalgaon',
    'best driving school raver taluka',
    'motor driving school maharashtra',
    'licence renewal jalgaon',
    'RC transfer raver',
    'vehicle insurance savada'
  ],
  authors: [{ name: 'Deepak Nemade', url: 'https://github.com/deepaknemade' }],
  creator: 'Deepak Nemade',
  publisher: 'श्री संत कृपा प्रसाद मोटर ड्रायव्हिंग स्कूल',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
    languages: {
      'mr-IN': '/mr',
      'en-IN': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'mr_IN',
    alternateLocale: 'en_IN',
    url: '/',
    siteName: 'श्री संत कृपा प्रसाद मोटर ड्रायव्हिंग स्कूल',
    title: 'श्री संत कृपा प्रसाद मोटर ड्रायव्हिंग स्कूल | Best Driving School Savada, Raver',
    description: 'महाराष्ट्रातील सावदा, रावेर येथील विश्वासार्ह ड्रायव्हिंग स्कूल. Learning & Permanent Licence, RTO Services, Car & Bike Training. Call: 9822502053',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'श्री संत कृपा प्रसाद मोटर ड्रायव्हिंग स्कूल - Driving School Savada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'श्री संत कृपा प्रसाद मोटर ड्रायव्हिंग स्कूल | Driving School Raver',
    description: 'Best Driving School in Savada, Raver, Jalgaon. Learning Licence, Permanent Licence, RTO Services. Call: 9822502053',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'Driving School',
  classification: 'Motor Driving Training Institute',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#16a34a' },
  ],
}

// Local Business Schema for Google Local SEO
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'DrivingSchool',
  '@id': 'https://santkrupadriving.vercel.app/#organization',
  name: 'श्री संत कृपा प्रसाद मोटर ड्रायव्हिंग स्कूल',
  alternateName: 'Shri Sant Krupa Prasad Motor Driving School',
  description: 'Best Driving School in Savada, Raver, Jalgaon, Maharashtra. We provide Learning Licence, Permanent Licence, RTO Services, Car & Bike Driving Training.',
  url: 'https://santkrupadriving.vercel.app',
  telephone: ['+919822502053', '+919403555482'],
  email: 'contact@santkrupadriving.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop No 15, In Front of Bus Stand, Sarode Complex',
    addressLocality: 'Savada',
    addressRegion: 'Maharashtra',
    postalCode: '425508',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 21.2747,
    longitude: 75.8997,
  },
  areaServed: [
    { '@type': 'City', name: 'Savada' },
    { '@type': 'City', name: 'Raver' },
    { '@type': 'City', name: 'Jalgaon' },
    { '@type': 'State', name: 'Maharashtra' },
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 21.2747,
      longitude: 75.8997,
    },
    geoRadius: '50000',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI, Bank Transfer',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Driving School Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Learning Licence Application',
          description: 'Complete assistance for Learning Licence at RTO Jalgaon',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Permanent Licence Application',
          description: 'Full support for Permanent Driving Licence',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Car Driving Training',
          description: 'Professional car driving training with experienced instructors',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Two Wheeler Training',
          description: 'Bike and scooter driving lessons',
        },
      },
    ],
  },
  founder: {
    '@type': 'Person',
    name: 'Ulhas Nemade',
  },
  sameAs: [
    'https://maps.app.goo.gl/CcXPGmcQj7cYhAaz5',
  ],
  image: 'https://santkrupadriving.vercel.app/og-image.jpg',
  logo: 'https://santkrupadriving.vercel.app/logo.svg',
}

// FAQ Schema for rich snippets
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'लर्निंग लायसन्ससाठी कोणती कागदपत्रे लागतात?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'लर्निंग लायसन्ससाठी आधार कार्ड, पत्त्याचा पुरावा, वयाचा पुरावा, पासपोर्ट फोटो आणि मोबाइल नंबर आवश्यक आहे.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents are required for Learning Licence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For Learning Licence you need Aadhaar Card, Address Proof, Age Proof, Passport Size Photo, and Mobile Number linked with Aadhaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Driving Training किती दिवसात पूर्ण होते?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Car Driving Training साधारणपणे 15-30 दिवसात पूर्ण होते. Two Wheeler Training 7-15 दिवसात पूर्ण होते.',
      },
    },
  ],
}

// Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://santkrupadriving.vercel.app',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="mr" dir="ltr" className={`${notoSans.variable} bg-background`}>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  )
}
