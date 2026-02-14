# ASIC Website - Multi-language Next.js Application

Official website for ASIATECH SCHOOL OF INNOVATION & COMMERCIALIZATION (ASIC) with English and Bahasa Melayu support.

## 🚀 Features

- ✅ Multi-language support (English & Bahasa Melayu)
- ✅ Static Site Generation with Next.js 14
- ✅ Responsive design with Tailwind CSS
- ✅ SEO optimized
- ✅ Fast performance
- ✅ Modern UI with smooth animations

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Animations:** Framer Motion

## 📁 Project Structure

```
asic-website/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page (English)
│   ├── ms/                 # Malay language pages
│   │   └── page.tsx        # Home page (Malay)
│   ├── programs/           # Programs pages
│   ├── community/          # Community page
│   ├── contact/            # Contact page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   └── Container.tsx
│   ├── layout/             # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── LanguageSwitcher.tsx
├── lib/
│   └── content.ts          # All website content (i18n)
└── public/
    └── images/             # Static images
```

## 🌐 Language Support

The website supports two languages:

- **English (en)** - Default language at `/`
- **Bahasa Melayu (ms)** - Available at `/ms/`

### URL Structure

```
English:
https://asic.edu.my/
https://asic.edu.my/programs
https://asic.edu.my/community

Bahasa Melayu:
https://asic.edu.my/ms/
https://asic.edu.my/ms/programs
https://asic.edu.my/ms/community
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or 20 LTS
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# http://localhost:3000
```

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📝 Content Management

All website content is centralized in `lib/content.ts`. To update content:

1. Open `lib/content.ts`
2. Find the section you want to update
3. Edit the content in both `en` and `ms` objects
4. Save and rebuild

Example:

```typescript
content: {
  en: {
    hero: {
      tagline: "Building Asia's Commercialization Talents",
      // ... other content
    }
  },
  ms: {
    hero: {
      tagline: "Membina Bakat Pengkomersilan Asia",
      // ... other content
    }
  }
}
```

## 🎨 Customization

### Colors

Brand colors are defined in `app/globals.css`:

```css
@theme {
  --color-primary: #0066CC;
  --color-secondary: #00C896;
  --color-accent: #FF6B35;
}
```

### Components

Reusable components are in `components/ui/`:
- `Button.tsx` - Button with variants (primary, secondary, outline)
- `Container.tsx` - Max-width container with padding

## 🚢 Deployment

### Deploy to Netlify

1. Push code to GitHub/GitLab
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Deploy!

Netlify will auto-detect Next.js and configure everything.

### Environment Variables

No environment variables needed for basic deployment.

## 📊 Performance

Target metrics:
- Lighthouse Performance: > 90
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Mobile-friendly: 100%

## 🔧 Development Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint

# Type checking
npx tsc --noEmit     # Check TypeScript errors
```

## 📄 Pages

### Implemented Pages

- ✅ Home (English & Malay)
- ✅ Programs Overview
- ✅ Community
- ✅ Contact

### To Be Implemented

- [ ] Individual Program Pages (TCA, I4I, Mobility)
- [ ] Readiness Assessment Page
- [ ] Advisors Page
- [ ] Contact Form functionality

## 🤝 Contributing

To add new pages:

1. Create page file in `app/[page-name]/page.tsx`
2. Create Malay version in `app/ms/[page-name]/page.tsx`
3. Add navigation link in `lib/content.ts`
4. Update both English and Malay content

## 📞 Support

For questions or issues:
- Email: info@asic.edu.my
- Documentation: See project docs in root folder

## 📝 License

© 2026 ASIC - All rights reserved.

---

**Built with ❤️ for ASIC**
