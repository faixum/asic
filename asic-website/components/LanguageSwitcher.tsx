'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Detect current language from URL
  const currentLang = pathname.startsWith('/ms') ? 'ms' : 'en';

  const switchLanguage = (newLang: 'en' | 'ms') => {
    if (newLang === currentLang) {
      setIsOpen(false);
      return;
    }

    let newPath = pathname;

    if (newLang === 'ms') {
      // Switch to Malay
      newPath = pathname.startsWith('/ms') ? pathname : `/ms${pathname === '/' ? '' : pathname}`;
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
        className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-[#1A3A6B]/5"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" style={{ color: '#1A3A6B' }} />
        <span className="font-semibold text-sm" style={{ color: '#1A3A6B' }}>{currentLang.toUpperCase()}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="#1A3A6B"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 z-20" style={{ border: '1px solid rgba(26,58,107,0.08)' }}>
            <button
              onClick={() => switchLanguage('en')}
              className={`w-full text-left px-4 py-2.5 transition-all duration-300 flex items-center gap-3 ${currentLang === 'en' ? 'bg-[#1A3A6B]/5 font-semibold' : 'hover:bg-[#F0F4F8]'
                }`}
              style={{ color: currentLang === 'en' ? '#1A3A6B' : '#2B5EA7' }}
            >
              <span className="text-lg">🇬🇧</span>
              <span className="text-sm">English</span>
              {currentLang === 'en' && (
                <span className="ml-auto w-2 h-2 rounded-full" style={{ background: '#F5C518' }} />
              )}
            </button>
            <button
              onClick={() => switchLanguage('ms')}
              className={`w-full text-left px-4 py-2.5 transition-all duration-300 flex items-center gap-3 ${currentLang === 'ms' ? 'bg-[#1A3A6B]/5 font-semibold' : 'hover:bg-[#F0F4F8]'
                }`}
              style={{ color: currentLang === 'ms' ? '#1A3A6B' : '#2B5EA7' }}
            >
              <span className="text-lg">🇲🇾</span>
              <span className="text-sm">Bahasa Melayu</span>
              {currentLang === 'ms' && (
                <span className="ml-auto w-2 h-2 rounded-full" style={{ background: '#F5C518' }} />
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
