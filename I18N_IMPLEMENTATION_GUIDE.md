# 🌐 Multi-Language Implementation Guide
## English & Bahasa Melayu Support for ASIC Website

---

## Overview

Website akan support 2 bahasa:
- **English (en)** - Default language
- **Bahasa Melayu (ms)** - Secondary language

---

## Implementation Strategy

### Option 1: Next.js i18n Routing (Recommended)

Guna Next.js built-in i18n support dengan URL-based language switching:

```
https://asic.edu.my/          → English (default)
https://asic.edu.my/ms/       → Bahasa Melayu
https://asic.edu.my/programs  → English
https://asic.edu.my/ms/programs → Bahasa Melayu
```

### Option 2: Client-Side Language Toggle

Simpler approach - guna localStorage untuk save language preference, no URL change.

---

## Setup Instructions

### Step 1: Configure Next.js i18n

Edit `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ms'],
    defaultLocale: 'en',
    localeDetection: true, // Auto-detect browser language
  },
}

module.exports = nextConfig
```

### Step 2: Create Language Context

Create `lib/LanguageContext.tsx`:

```typescript
'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useParams } from 'next/navigation';
import { Language, getContent } from './content-i18n';

interface LanguageContextType {
  lang: Language;
  content: ReturnType<typeof getContent>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const params = useParams();
  const lang = (params?.lang as Language) || 'en';
  const content = getContent(lang);

  return (
    <LanguageContext.Provider value={{ lang, content }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
```

### Step 3: Create Language Switcher Component

Create `components/LanguageSwitcher.tsx`:

```typescript
'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Detect current language from URL
  const currentLang = pathname.startsWith('/ms') ? 'ms' : 'en';

  const switchLanguage = (newLang: 'en' | 'ms') => {
    if (newLang === currentLang) return;

    let newPath = pathname;
    
    if (newLang === 'ms') {
      // Switch to Malay
      newPath = pathname.startsWith('/ms') ? pathname : `/ms${pathname}`;
    } else {
      // Switch to English
      newPath = pathname.replace(/^\/ms/, '') || '/';
    }

    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Change language"
      >
        <span className="text-xl">🌐</span>
        <span className="font-medium">{currentLang.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          <button
            onClick={() => switchLanguage('en')}
            className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
              currentLang === 'en' ? 'bg-blue-50 text-primary font-medium' : ''
            }`}
          >
            🇬🇧 English
          </button>
          <button
            onClick={() => switchLanguage('ms')}
            className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
              currentLang === 'ms' ? 'bg-blue-50 text-primary font-medium' : ''
            }`}
          >
            🇲🇾 Bahasa Melayu
          </button>
        </div>
      )}
    </div>
  );
}
```

### Step 4: Update Header Component

Add language switcher to header:

```typescript
import LanguageSwitcher from '../LanguageSwitcher';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="text-xl font-bold text-primary">
            ASIC
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {/* Navigation links */}
          </div>

          {/* Language Switcher */}
          <LanguageSwitcher />
        </nav>
      </Container>
    </header>
  );
}
```

### Step 5: Update Page Components to Use i18n Content

Example for Home page:

```typescript
'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function Home() {
  const { content, lang } = useLanguage();

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">
              {content.hero.emoji} {content.hero.title}
            </h1>
            <p className="text-2xl mb-4">
              {content.hero.tagline}
            </p>
            <p className="text-lg mb-8 opacity-90">
              {content.hero.subtitle}
            </p>
            <div className="flex gap-4 justify-center">
              <Button href={`${lang === 'ms' ? '/ms' : ''}/programs`} variant="secondary">
                {content.ctas.secondary}
              </Button>
              <Button href={`${lang === 'ms' ? '/ms' : ''}/community`} variant="outline">
                {content.ctas.primary}
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
              "{content.hero.quote}"
            </blockquote>
            <p className="text-lg text-gray-600">
              {content.hero.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Talent Types */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {content.talentTypes.map((talent, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-3">{talent.emoji}</div>
                <p className="font-medium">{talent.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
```

---

## Folder Structure for i18n

```
app/
├── [lang]/                    # Dynamic language segment
│   ├── layout.tsx            # Layout with LanguageProvider
│   ├── page.tsx              # Home page
│   ├── programs/
│   │   ├── page.tsx
│   │   ├── tca/page.tsx
│   │   ├── i4i/page.tsx
│   │   └── mobility/page.tsx
│   ├── readiness/page.tsx
│   ├── community/page.tsx
│   ├── advisors/page.tsx
│   └── contact/page.tsx
├── layout.tsx                # Root layout
└── page.tsx                  # Redirect to /en or detect language
```

---

## Alternative: Simpler Client-Side Approach

Jika tak nak guna URL-based routing, boleh guna localStorage:

### Simple Language Hook

```typescript
'use client';

import { useState, useEffect } from 'react';
import { Language, getContent } from './content-i18n';

export function useLanguage() {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem('asic-lang') as Language;
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const switchLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('asic-lang', newLang);
  };

  return {
    lang,
    content: getContent(lang),
    switchLanguage,
  };
}
```

### Simple Language Switcher

```typescript
'use client';

export default function SimpleLanguageSwitcher() {
  const { lang, switchLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 rounded ${
          lang === 'en' ? 'bg-primary text-white' : 'bg-gray-200'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage('ms')}
        className={`px-3 py-1 rounded ${
          lang === 'ms' ? 'bg-primary text-white' : 'bg-gray-200'
        }`}
      >
        MS
      </button>
    </div>
  );
}
```

---

## SEO Considerations

### Add hreflang tags for SEO

In `app/layout.tsx`:

```typescript
export async function generateMetadata({ params }: { params: { lang: Language } }) {
  const lang = params.lang || 'en';
  const content = getContent(lang);

  return {
    title: content.seo.defaultTitle,
    description: content.seo.defaultDescription,
    alternates: {
      canonical: `https://asic.edu.my${lang === 'ms' ? '/ms' : ''}`,
      languages: {
        'en': 'https://asic.edu.my',
        'ms': 'https://asic.edu.my/ms',
      },
    },
  };
}
```

---

## Testing Checklist

- [ ] Language switcher visible on all pages
- [ ] Content changes when switching language
- [ ] Language preference persists (if using localStorage)
- [ ] URLs update correctly (if using URL-based routing)
- [ ] All emojis display correctly in both languages
- [ ] Navigation links work in both languages
- [ ] SEO meta tags correct for both languages
- [ ] Mobile responsive language switcher

---

## Recommended Approach

**For ASIC Website, I recommend Option 1 (Next.js i18n Routing)** because:

1. ✅ Better for SEO (separate URLs for each language)
2. ✅ Shareable links in specific language
3. ✅ Browser back/forward works correctly
4. ✅ More professional implementation
5. ✅ Easier to add more languages in future

---

## Next Steps

1. Choose implementation approach (URL-based or localStorage)
2. Setup Next.js i18n configuration
3. Create language context and switcher
4. Update all page components to use i18n content
5. Test language switching on all pages
6. Add SEO meta tags for both languages

---

**Nak saya proceed dengan implementation? Pilih approach mana yang awak prefer.**
