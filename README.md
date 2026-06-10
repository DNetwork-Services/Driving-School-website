# Shri Sant Krupa Prasad Motor Driving School

A modern, SEO-optimized website for a driving school in Savada, Raver, Jalgaon, Maharashtra. Built with Next.js 16, optimized for Google ranking, local SEO, mobile performance, and Marathi user experience.

**Developed by Deepak Nemade**

## Features

- **Bilingual Support**: Marathi (primary) + English
- **Local SEO Optimized**: Maharashtra-focused keywords and schema
- **Mobile-First Design**: Responsive with floating action bar
- **WhatsApp Lead Generation**: One-tap WhatsApp integration
- **Lighthouse 95+ Score**: Optimized for performance
- **PWA Ready**: Installable on mobile devices
- **Driving Animations**: Lightweight CSS car animations

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Font**: Noto Sans (Devanagari support)
- **Icons**: Custom SVG icons (lightweight)
- **Deployment**: Vercel

## Quick Start

### Prerequisites

- Node.js 18.17 or later
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DNetwork-Services/Driving-School-website.git
   cd Driving-School-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run development server**
   ```bash
   pnpm dev
   ```

4. **Open browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with SEO metadata & schemas
│   ├── page.tsx        # Home page
│   ├── globals.css     # Global styles & animations
│   ├── sitemap.ts      # Dynamic sitemap for SEO
│   ├── robots.ts       # Robots.txt configuration
│   └── manifest.ts     # PWA manifest
├── components/
│   ├── navbar.tsx      # Navigation bar
│   ├── hero.tsx        # Hero section with animations
│   ├── services.tsx    # Services & driving courses
│   ├── documents.tsx   # Required documents info
│   ├── insurance.tsx   # Insurance services
│   ├── faq.tsx         # FAQ with schema markup
│   ├── contact.tsx     # Contact section with map
│   ├── footer.tsx      # Footer with links
│   ├── floating-bar.tsx# Mobile action bar
│   └── icons.tsx       # Custom SVG icons
├── public/
│   ├── og-image.jpg    # Open Graph image
│   ├── icon-192.png    # PWA icon 192x192
│   └── icon-512.png    # PWA icon 512x512
└── package.json
```

## Deploy to Vercel

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=(https://github.com/DNetwork-Services/Driving-School-website.git))

### Option 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   pnpm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

### Option 3: Git Integration

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click "Deploy"

## Configuration

### Update Contact Information

Edit these files to update contact details:

1. **Phone Number**: Search for `9822502053` and replace
2. **WhatsApp Link**: Search for `wa.me/9822502053` and replace
3. **Location**: Update in `layout.tsx` (schema) and `contact.tsx` (map)

### Update Business Details

In `app/layout.tsx`, update the JSON-LD schema:
- Business name
- Address
- Geo coordinates
- Opening hours
- Service areas

### Update Domain

After deploying, update these files with your actual domain:

1. `app/layout.tsx` - metadataBase URL
2. `app/sitemap.ts` - Base URL
3. `app/robots.ts` - Sitemap URL

## SEO Optimizations

### Implemented

- [x] Comprehensive meta tags (title, description, keywords)
- [x] Open Graph & Twitter Card meta tags
- [x] Structured Data (JSON-LD)
  - LocalBusiness/DrivingSchool schema
  - FAQ schema for rich snippets
  - BreadcrumbList schema
- [x] Dynamic sitemap.xml
- [x] Optimized robots.txt
- [x] Marathi language declaration (`lang="mr"`)
- [x] Local keywords (Savada, Raver, Jalgaon, Maharashtra)
- [x] Mobile-friendly responsive design
- [x] Fast loading (Lighthouse 95+)

### Official Government Links

The website includes links to official RTO portals:
- [Sarathi Parivahan](https://sarathi.parivahan.gov.in) - Licence services
- [Parivahan Sewa](https://parivahan.gov.in) - Transport services
- [Vahan Services](https://vahan.parivahan.gov.in) - Vehicle registration

## Performance Optimizations

- Lightweight SVG icons (no icon library)
- CSS-only animations (no JS animation library)
- Noto Sans font with `display: swap`
- Minimal JavaScript with strategic 'use client'
- Preconnect to external resources
- Optimized images with proper dimensions

## Customization

### Colors

Edit CSS variables in `app/globals.css`:
```css
:root {
  --primary: oklch(0.45 0.18 145);    /* Green - main brand */
  --accent: oklch(0.55 0.2 40);        /* Orange - highlights */
  --whatsapp: oklch(0.6 0.2 145);      /* WhatsApp green */
}
```

### Animations

Animation classes available:
- `.animate-drive-left` - Car driving left
- `.animate-drive-right` - Car driving right
- `.animate-float` - Floating effect
- `.animate-slide-in-up` - Slide in from bottom
- `.animate-pulse-soft` - Soft pulse
- `.delay-100`, `.delay-200`, `.delay-300`, `.delay-500` - Animation delays

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This project is proprietary. All rights reserved.

## Contact

For inquiries about the website development:
- **Developer**: Deepak Nemade

For driving school inquiries:
- **Phone**: 9822502053
- **WhatsApp**: [wa.me/9822502053](https://wa.me/9822502053)
- **Location**: Savada, Raver, Jalgaon, Maharashtra 425508
