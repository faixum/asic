'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from '../LanguageSwitcher';
import { getContent } from '@/lib/content';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { language } = useLanguage();
  const content = getContent(language);

  // Track scroll for glassmorphism effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Animation variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } },
    exit: { opacity: 0, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const } },
  };

  const leftPanelVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
    exit: { x: '-100%', transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } },
  };

  const rightPanelVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
    exit: { x: '100%', transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 + i * 0.08,
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    }),
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
  };

  return (
    <>
      {/* ─── Glassmorphism Header ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 header-glass ${scrolled ? 'scrolled' : ''}`}
      >
        <div className="max-w-[1280px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <nav className="flex items-center justify-between py-5">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group"
              onClick={closeMenu}
            >
              <img
                src="/images/asic-logo.png"
                alt="ASIC - ASIATECH School of Innovation & Commercialization"
                className="transition-all duration-300 object-contain"
                style={{
                  height: scrolled ? '36px' : '44px',
                  padding: scrolled ? '0' : '4px 8px',
                  background: scrolled ? 'transparent' : 'rgba(255,255,255,0.95)',
                  borderRadius: scrolled ? '0' : '8px',
                }}
              />
            </Link>

            {/* Right side controls */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher />

              {/* Hamburger Button */}
              <button
                onClick={toggleMenu}
                className={`relative z-[110] p-2 rounded-lg transition-colors ${isOpen ? 'hamburger-active' : ''
                  }`}
                aria-label="Toggle menu"
                style={{ cursor: 'pointer' }}
              >
                <div className="flex flex-col gap-[6px]">
                  <span
                    className="hamburger-line transition-colors duration-300"
                    style={{ background: scrolled || isOpen ? '#1A3A6B' : '#FFFFFF' }}
                  />
                  <span
                    className="hamburger-line transition-colors duration-300"
                    style={{ background: scrolled || isOpen ? '#1A3A6B' : '#FFFFFF' }}
                  />
                  <span
                    className="hamburger-line transition-colors duration-300"
                    style={{ background: scrolled || isOpen ? '#1A3A6B' : '#FFFFFF' }}
                  />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Header spacer to prevent content jump */}
      <div className="h-[80px]" />

      {/* ─── Fullscreen Overlay Menu ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="overlay-menu"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close Button */}
            <motion.button
              className="close-btn"
              onClick={closeMenu}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </motion.button>

            {/* Left Panel — Navigation */}
            <motion.div
              className="overlay-left"
              variants={leftPanelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Nav Links */}
              <nav className="flex flex-col gap-2">
                {content.navigation.main.map((item, i) => {
                  const isActive = pathname === item.href;

                  return (
                    <motion.div
                      key={item.href}
                      custom={i}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <Link
                        href={item.href}
                        className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom info in overlay */}
              <motion.div
                className="mt-auto pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  © {new Date().getFullYear()} ASIC. All rights reserved.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Panel — Abstract Visual */}
            <motion.div
              className="overlay-right"
              variants={rightPanelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Animated orbs */}
              <div className="overlay-orb overlay-orb-1" />
              <div className="overlay-orb overlay-orb-2" />
              <div className="overlay-orb overlay-orb-3" />

              {/* Decorative text */}
              <motion.div
                className="absolute bottom-12 left-8 z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <p
                  className="text-6xl font-black tracking-tighter opacity-10"
                  style={{ color: 'white' }}
                >
                  ASIC
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
