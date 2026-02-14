# 🚀 ASIC Website - Quick Start Guide

Panduan ringkas untuk mula develop website ASIC menggunakan Next.js dan deploy ke Netlify.

---

## ⚡ Setup Pantas (15 Minit)

### Step 1: Install Requirements

Pastikan anda ada tools ini:

```bash
# Check Node.js version (need v18 or higher)
node --version

# Check npm version
npm --version

# Jika belum install Node.js, download dari:
# https://nodejs.org/
```

### Step 2: Create Next.js Project

```bash
# Navigate ke folder kerja awak
cd ~/projects

# Create Next.js app dengan nama 'asic-website'
npx create-next-app@latest asic-website

# Pilih options berikut:
✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like to use `src/` directory? … No
✔ Would you like to use App Router? … Yes
✔ Would you like to customize the default import alias? … No

# Masuk ke folder project
cd asic-website

# Test run development server
npm run dev
```

Buka browser: `http://localhost:3000` - patut nampak default Next.js page

### Step 3: Install Additional Dependencies

```bash
# Install animation library
npm install framer-motion

# Install icons (optional, boleh guna emoji je)
npm install lucide-react

# Install form handling (untuk contact form nanti)
npm install react-hook-form

# Install date formatting (jika perlu)
npm install date-fns
```

### Step 4: Setup Project Structure

```bash
# Create folders yang diperlukan
mkdir -p components/ui components/sections components/layout
mkdir -p lib public/images

# Create content file
# Copy content data file yang saya bagi ke lib/content.ts
```

### Step 5: Add Content Data

Salin file `asic-content-data.ts` yang saya dah buat ke dalam `lib/content.ts`:

```bash
cp /path/to/asic-content-data.ts lib/content.ts
```

---

## 📁 Project Structure Setup

Organize folder macam ni:

```
asic-website/
├── app/
│   ├── layout.tsx          # Main layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── programs/
│   │   ├── page.tsx
│   │   ├── tca/
│   │   │   └── page.tsx
│   │   ├── i4i/
│   │   │   └── page.tsx
│   │   └── mobility/
│   │       └── page.tsx
│   ├── readiness/
│   │   └── page.tsx
│   ├── community/
│   │   └── page.tsx
│   ├── advisors/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── ui/                 # Reusable components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Container.tsx
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   └── ProgramCard.tsx
│   └── layout/             # Layout components
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── Navigation.tsx
├── lib/
│   └── content.ts          # All website content
├── public/
│   ├── images/
│   └── favicon.ico
├── tailwind.config.ts
└── package.json
```

---

## 🎨 Configure Tailwind (Color Scheme)

Edit `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ASIC Brand Colors - Update with actual brand colors
        primary: {
          DEFAULT: '#0066CC',
          dark: '#004C99',
          light: '#3385D6',
        },
        secondary: {
          DEFAULT: '#00C896',
          dark: '#009670',
          light: '#33D6AC',
        },
        accent: {
          DEFAULT: '#FF6B35',
          dark: '#CC5528',
          light: '#FF8A5C',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}
export default config
```

---

## 🏗️ Build Your First Component

### 1. Create Container Component

`components/ui/Container.tsx`:

```typescript
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
```

### 2. Create Button Component

`components/ui/Button.tsx`:

```typescript
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary',
  className = '' 
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-200';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
```

### 3. Create Header Component

`components/layout/Header.tsx`:

```typescript
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import { siteContent } from '@/lib/content';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary">
            {siteContent.brand.shortName}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {siteContent.navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {siteContent.navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </header>
  );
}
```

### 4. Update Home Page

`app/page.tsx`:

```typescript
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { siteContent } from '@/lib/content';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">
              {siteContent.hero.emoji} {siteContent.brand.name}
            </h1>
            <p className="text-2xl mb-4">
              {siteContent.hero.tagline}
            </p>
            <p className="text-lg mb-8 opacity-90">
              {siteContent.hero.subtitle}
            </p>
            <div className="flex gap-4 justify-center">
              <Button href="/programs" variant="secondary">
                Explore Programs
              </Button>
              <Button href="/community" variant="outline" className="bg-white/10">
                Join Community
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-3xl font-semibold text-gray-900 mb-4">
              "{siteContent.hero.quote}"
            </blockquote>
            <p className="text-lg text-gray-600">
              {siteContent.hero.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Talent Types */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            We are a specialized commercialization school committed to developing:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {siteContent.talentTypes.map((talent, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-3">{talent.emoji}</div>
                <p className="font-medium">{talent.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Add more sections here... */}
    </main>
  );
}
```

### 5. Update Layout

`app/layout.tsx`:

```typescript
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import { siteContent } from '@/lib/content';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: siteContent.seo.defaultTitle,
  description: siteContent.seo.defaultDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Header />
        {children}
        {/* Footer component - create nanti */}
      </body>
    </html>
  );
}
```

---

## 🚢 Deploy to Netlify

### Method 1: Git + Netlify (Recommended)

1. **Initialize Git & Push to GitHub:**

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - ASIC website"

# Create repo on GitHub/GitLab, then:
git remote add origin https://github.com/yourusername/asic-website.git
git branch -M main
git push -u origin main
```

2. **Deploy on Netlify:**

- Go to https://app.netlify.com
- Click "Add new site" → "Import an existing project"
- Choose GitHub/GitLab
- Select your repository
- Build settings:
  - Build command: `npm run build`
  - Publish directory: `.next`
- Click "Deploy site"

3. **Install Next.js Plugin:**

Netlify will auto-detect Next.js and suggest the plugin. Install it.

### Method 2: Netlify CLI (Alternative)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

---

## ✅ Post-Deployment Checklist

After deploy, check:

- [ ] Website loads at Netlify URL
- [ ] All pages accessible
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] Images load properly
- [ ] No console errors

---

## 🔧 Development Tips

### Run Development Server

```bash
npm run dev
# Open http://localhost:3000
```

### Build for Production (Test Locally)

```bash
npm run build
npm start
# Test at http://localhost:3000
```

### Check for Errors

```bash
# Run linter
npm run lint

# Type checking (if using TypeScript)
npx tsc --noEmit
```

---

## 📚 Next Steps

1. **Complete All Pages**
   - Programs pages (TCA, I4I, Mobility)
   - Readiness page
   - Community page
   - Advisors page
   - Contact page

2. **Add Images**
   - Logo
   - Hero images
   - Advisor photos
   - Program illustrations

3. **Optimize**
   - Add animations
   - Optimize images
   - Improve SEO
   - Add analytics

4. **Test**
   - Cross-browser testing
   - Mobile testing
   - Performance testing (Lighthouse)

---

## 🆘 Common Issues & Solutions

### Issue: Port 3000 already in use
```bash
# Find and kill the process
lsof -ti:3000 | xargs kill
# Or use different port
npm run dev -- -p 3001
```

### Issue: Module not found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Build fails on Netlify
- Check Node.js version in `package.json`:
```json
"engines": {
  "node": ">=18.0.0"
}
```

---

## 📞 Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Deployment Guide:** https://nextjs.org/docs/deployment

---

**Selamat coding! 🚀**

Jika ada masalah, refer back to PRD document untuk detail requirements.
