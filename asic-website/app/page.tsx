'use client';

import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { getContent } from '@/lib/content';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import EventGallery from '@/components/sections/EventGallery';
/* eslint-disable @next/next/no-img-element */

/* ─── Section Wrapper with Scroll Animation ─── */
function ScrollReveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const { language } = useLanguage();
  const content = getContent(language);

  // Default gallery images
  const defaultImages = [
    { src: '/images/hero-innovation.png', alt: 'ASIC Event 1', caption: 'Innovation Workshop 2024' },
    { src: '/images/feature-pathways.png', alt: 'ASIC Event 2', caption: 'TCA Certification Ceremony' },
    { src: '/images/feature-mobility.png', alt: 'ASIC Event 3', caption: 'Cross-border Collaboration' },
    { src: '/images/mission-bridge.png', alt: 'ASIC Event 4', caption: 'Industry Networking Session' },
    { src: '/images/feature-assessment.png', alt: 'ASIC Event 5', caption: 'Readiness Assessment Program' },
    { src: '/images/hero-innovation.png', alt: 'ASIC Event 6', caption: 'I4I Program Launch' },
    { src: '/images/feature-pathways.png', alt: 'ASIC Event 7', caption: 'Community Meetup' },
    { src: '/images/feature-mobility.png', alt: 'ASIC Event 8', caption: 'Edu-Tourism Programme' },
  ];

  // Load images from localStorage or use defaults
  const [galleryImages, setGalleryImages] = useState(defaultImages);
  const [isClient, setIsClient] = useState(false);

  const loadGalleryImages = () => {
    const stored = localStorage.getItem('asic_gallery_images');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.length > 0) {
          setGalleryImages(parsed);
        } else {
          setGalleryImages(defaultImages);
        }
      } catch (error) {
        console.error('Error loading gallery images:', error);
        setGalleryImages(defaultImages);
      }
    } else {
      setGalleryImages(defaultImages);
    }
  };

  useEffect(() => {
    // Mark as client-side
    setIsClient(true);
    
    // Load images
    loadGalleryImages();

    // Listen for storage changes (when admin updates images)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'asic_gallery_images') {
        loadGalleryImages();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for focus (when returning from admin page)
    const handleFocus = () => {
      loadGalleryImages();
    };
    
    window.addEventListener('focus', handleFocus);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  /* Pipeline steps with minimalist icons */
  const pipelineSteps = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: 'Idea'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 21L16.65 16.65" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: 'Research'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 17L12 22L22 17" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 12L12 17L22 12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: 'Prototype'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="12" y1="1" x2="12" y2="23" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17 5H9.5C7.01 5 5 7.01 5 9.5C5 11.99 7.01 14 9.5 14H14.5C16.99 14 19 16.01 19 18.5C19 20.99 16.99 23 14.5 23H6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: 'Market'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: 'Impact'
    },
  ];

  /* Feature cards with images */
  const featureCards = [
    {
      ...content.features[0],
      image: '/images/feature-pathways.png',
      gradient: 'linear-gradient(135deg, #E8724A 0%, #D4556B 50%, #1A3A6B 100%)',
      textColor: '#fff',
    },
    {
      ...content.features[1],
      image: '/images/feature-mobility.png',
      gradient: 'linear-gradient(135deg, #0D1B2A 0%, #1A3A6B 100%)',
      textColor: '#fff',
    },
    {
      ...content.features[2],
      image: '/images/feature-assessment.png',
      gradient: 'linear-gradient(135deg, #6B8CAE 0%, #8FAACC 50%, #B0C4DE 100%)',
      textColor: '#fff',
    },
  ];

  /* Program cards */
  const programCards = content.programs.list.map((program, i) => ({
    ...program,
    image: ['/images/feature-pathways.png', '/images/hero-innovation.png', '/images/feature-mobility.png'][i],
    gradient: [
      'linear-gradient(135deg, #F5C518 0%, #E8A317 50%, #D4910F 100%)',
      'linear-gradient(135deg, #1A3A6B 0%, #0D1B2A 100%)',
      'linear-gradient(135deg, #2B5EA7 0%, #1A8A7A 100%)',
    ][i],
    textColor: ['#0D1B2A', '#fff', '#fff'][i],
  }));

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          HERO — The Innovation Pipeline
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #1A3A6B 40%, #2B5EA7 100%)' }}>
        {/* Floating particles - hidden on mobile for performance */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          {[
            { w: 5, h: 5, top: 15, left: 10, bg: 'rgba(245,197,24,0.6)' },
            { w: 4, h: 4, top: 45, left: 75, bg: 'rgba(255,255,255,0.3)' },
            { w: 6, h: 6, top: 70, left: 25, bg: 'rgba(245,197,24,0.6)' },
            { w: 3, h: 3, top: 30, left: 85, bg: 'rgba(255,255,255,0.3)' },
          ].map((particle, i) => (
            <div
              key={i}
              className="hero-particle"
              style={{
                width: particle.w,
                height: particle.h,
                background: particle.bg,
                top: `${particle.top}%`,
                left: `${particle.left}%`,
                animationDelay: `${i * 0.7}s`,
              }}
            />
          ))}
          {/* Large ambient orbs - reduced for performance */}
          <div className="ambient-orb" style={{ width: 400, height: 400, top: '-15%', right: '-10%', background: 'radial-gradient(circle, rgba(245,197,24,0.06) 0%, transparent 70%)', willChange: 'transform' }} />
        </div>

        <Container>
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center relative z-10">
            {/* Left — Text Content (6 columns) */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-black text-white leading-[1.2] mb-6 sm:mb-8">
                  ASIATECH SCHOOL OF{' '}
                  <br className="hidden xs:block" />
                  INNOVATION <span className="text-gold-gradient">&amp;</span>{' '}
                  <br className="hidden xs:block" />
                  <span className="text-gold-gradient">COMMERCIALIZATION</span>{' '}
                  <span className="text-gold-gradient">(ASIC)</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-10 leading-relaxed">
                  {content.hero.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button href="/programs" variant="secondary">
                    {content.ctas.secondary}
                  </Button>
                  <Button href="/community" variant="outline">
                    {content.ctas.primary}
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Right — Hero Image (6 columns) */}
            <div className="lg:col-span-6 mt-8 lg:mt-0">
              <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl" style={{ boxShadow: '0 0 60px rgba(245,197,24,0.1)' }}>
                  <img
                    src="/images/hero-innovation.png"
                    alt="Innovation to Commercialization"
                    className="w-full h-auto"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* ─── Innovation Pipeline ─── */}
          <motion.div
            className="mt-16 sm:mt-20 md:mt-24 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="pipeline-container">
              <div className="pipeline-line" />
              <div className="pipeline-line-glow hidden md:block" />
              <div className="pipeline-dot-flow hidden md:block" />
              <div className="flex justify-between relative z-10">
                {pipelineSteps.map((step, i) => (
                  <div
                    key={i}
                    className="pipeline-step"
                  >
                    <div className="pipeline-icon">{step.icon}</div>
                    <span className="pipeline-label">{step.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Gradient Divider */}
      <div className="gradient-divider" />

      {/* ═══════════════════════════════════════════════════════════
          QUOTE / MISSION — Split Mega-Card
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-32" style={{ background: '#E8E0D8' }}>
        <Container>
          <ScrollReveal>
            <div className="mega-card grid md:grid-cols-2 overflow-hidden" style={{ borderRadius: 24 }}>
              {/* Left — Quote */}
              <div className="p-12 md:p-20 flex flex-col justify-center" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #1A3A6B 100%)' }}>
                <div className="text-6xl mb-6" style={{ color: '#F5C518', fontFamily: 'Georgia, serif' }}>&ldquo;</div>
                <blockquote className="text-2xl md:text-3xl font-bold text-white leading-snug mb-6">
                  {content.hero.quote}
                </blockquote>
                <p className="text-lg text-white/70 leading-relaxed">
                  {content.hero.description}
                </p>
              </div>
              {/* Right — Image */}
              <div className="relative h-[300px] sm:h-[350px] md:h-auto overflow-hidden">
                <img
                  src="/images/mission-bridge.png"
                  alt="Bridging Innovation to Market"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TALENT TYPES — Glowing Icon Strip
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0D1B2A 0%, #1A3A6B 100%)' }}>
        {/* Background particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { top: 20, left: 10 },
            { top: 35, left: 30 },
            { top: 50, left: 50 },
            { top: 65, left: 70 },
            { top: 80, left: 90 },
          ].map((particle, i) => (
            <div
              key={i}
              className="hero-particle"
              style={{
                width: 3,
                height: 3,
                background: 'rgba(245,197,24,0.4)',
                top: `${particle.top}%`,
                left: `${particle.left}%`,
                animationDelay: `${i * 1.5}s`,
              }}
            />
          ))}
        </div>

        <Container>
          <ScrollReveal>
            <p className="text-center text-white/70 mb-20 text-lg max-w-3xl mx-auto leading-relaxed">
              We are a specialized commercialization school committed to developing:
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 max-w-[1100px] mx-auto">
            {[
              {
                title: 'Innovators',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              },
              {
                title: 'Technology Founders',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 1V3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 21V23" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.22 4.22L5.64 5.64" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.36 18.36L19.78 19.78" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 12H3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 12H23" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.22 19.78L5.64 18.36" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.36 5.64L19.78 4.22" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              },
              {
                title: 'Intrapreneurs',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="3" y1="9" x2="21" y2="9" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="9" y1="21" x2="9" y2="9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              },
              {
                title: 'Researchers',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.5 2H20V22H6.5A2.5 2.5 0 0 1 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2Z" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="10" y1="8" x2="16" y2="8" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="10" y1="12" x2="16" y2="12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              },
              {
                title: 'Cross-border Talents',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="2" y1="12" x2="22" y2="12" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 2C14.5 4.5 16 8 16 12C16 16 14.5 19.5 12 22C9.5 19.5 8 16 8 12C8 8 9.5 4.5 12 2Z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              }
            ].map((talent, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="talent-card">
                  <div className="talent-card-icon">{talent.icon}</div>
                  <p className="font-semibold text-white text-center text-sm">{talent.title}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FEATURES — Alternating Split Mega-Cards
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-32" style={{ background: '#E8E0D8' }}>
        <Container>
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#1A3A6B' }}>
              {content.differentiators.title.replace('🎯 ', '')}
            </h2>
            <p className="text-xl text-center mb-14" style={{ color: '#2B5EA7' }}>
              {content.differentiators.description}
            </p>
          </ScrollReveal>

          <div className="space-y-16">
            {featureCards.map((feature, i) => (
              <ScrollReveal key={feature.id} delay={0.1}>
                <div
                  className="mega-card grid lg:grid-cols-2 overflow-hidden"
                  style={{ borderRadius: 20, background: feature.gradient }}
                >
                  {/* Text — alternates left/right */}
                  <div className={`p-10 sm:p-14 lg:p-16 xl:p-20 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <h3 className="text-2xl md:text-3xl font-bold mb-5" style={{ color: feature.textColor }}>
                      {feature.title}
                    </h3>
                    <p className="text-lg mb-7" style={{ color: feature.textColor, opacity: 0.95 }}>
                      {feature.description}
                    </p>
                    <ul className="space-y-4">
                      {feature.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-base" style={{ color: feature.textColor }}>
                          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#F5C518' }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image — alternates right/left */}
                  <div className={`relative h-[300px] sm:h-[350px] lg:h-auto lg:min-h-[420px] overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PROGRAMS — Premium Immersive Cards
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-32" style={{ background: '#F0F4F8' }}>
        <Container>
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#1A3A6B' }}>
              Our Flagship Programs
            </h2>
            <p className="text-xl text-center mb-14" style={{ color: '#2B5EA7' }}>
              Three pathways to commercialization excellence
            </p>
          </ScrollReveal>

          <div className="space-y-16">
            {programCards.map((program, i) => (
              <ScrollReveal key={program.id} delay={0.1}>
                <div
                  className="mega-card grid lg:grid-cols-2 overflow-hidden"
                  style={{ borderRadius: 20, background: program.gradient }}
                >
                  <div className={`p-10 sm:p-14 lg:p-16 xl:p-20 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: program.textColor }}>
                      {program.name}
                    </h3>
                    <p className="text-lg mb-8" style={{ color: program.textColor, opacity: 0.95 }}>
                      {program.tagline}
                    </p>
                    <Button href={`/programs/${program.slug}`} variant={i === 0 ? 'primary' : 'outline'} className="w-fit">
                      Learn More →
                    </Button>
                  </div>
                  <div className={`relative h-[300px] sm:h-[350px] lg:h-auto lg:min-h-[420px] overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <img
                      src={program.image}
                      alt={program.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          EVENT GALLERY — Photo Showcase
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-32" style={{ background: '#F0F4F8' }}>
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1A3A6B' }}>
                {language === 'en' ? 'Our Events & Activities' : 'Acara & Aktiviti Kami'}
              </h2>
              <p className="text-xl" style={{ color: '#2B5EA7' }}>
                {language === 'en' 
                  ? 'Moments from our innovation journey and community gatherings'
                  : 'Detik-detik dari perjalanan inovasi dan perhimpunan komuniti kami'}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            {isClient && <EventGallery images={galleryImages} />}
          </ScrollReveal>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          VISION — Cinematic Statement
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-40 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #1A3A6B 50%, #0D1B2A 100%)' }}>
        {/* Ambient effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="ambient-orb" style={{ width: 500, height: 500, top: '-20%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(245,197,24,0.12) 0%, transparent 70%)' }} />
          {[
            { top: 15, left: 10 },
            { top: 27, left: 25 },
            { top: 39, left: 40 },
            { top: 51, left: 55 },
            { top: 63, left: 70 },
            { top: 75, left: 85 },
          ].map((particle, i) => (
            <div
              key={i}
              className="hero-particle"
              style={{
                width: 3,
                height: 3,
                background: 'rgba(245,197,24,0.5)',
                top: `${particle.top}%`,
                left: `${particle.left}%`,
                animationDelay: `${i}s`,
              }}
            />
          ))}
        </div>

        <Container>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center relative z-10">
              {/* Gold star SVG instead of emoji */}
              <div className="mb-12 flex justify-center">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <path d="M32 4L39.5 24.5H60L43.5 37.5L50 58L32 45L14 58L20.5 37.5L4 24.5H24.5L32 4Z" fill="#F5C518" stroke="#F5C518" strokeWidth="1" />
                  <path d="M32 4L39.5 24.5H60L43.5 37.5L50 58L32 45L14 58L20.5 37.5L4 24.5H24.5L32 4Z" fill="url(#star-gradient)" />
                  <defs>
                    <linearGradient id="star-gradient" x1="4" y1="4" x2="60" y2="58">
                      <stop stopColor="#F5C518" />
                      <stop offset="1" stopColor="#E8A317" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Our <span className="text-gold-gradient">Vision</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                {content.vision.statement}
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TARGET AUDIENCE — Interactive Pill Cloud
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #111D2E 0%, #1A3A6B 100%)' }}>
        <Container>
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
              Who Should Join <span className="text-gold-gradient">ASIC</span>?
            </h2>
            <p className="text-center text-white/50 mb-20 text-lg">Our ecosystem welcomes change-makers across all domains</p>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
            {content.targetAudience.audiences.map((audience, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="audience-pill">
                  {audience}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA — Dramatic Closer
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1A3A6B 0%, #0D1B2A 50%, #1A3A6B 100%)' }}>
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="ambient-orb cta-orb-1" style={{ width: 600, height: 600, top: '-40%', right: '-10%', background: 'radial-gradient(circle, rgba(245,197,24,0.1) 0%, transparent 60%)' }} />
          <div className="ambient-orb cta-orb-2" style={{ width: 400, height: 400, bottom: '-30%', left: '-5%', background: 'radial-gradient(circle, rgba(43,94,167,0.15) 0%, transparent 60%)' }} />
        </div>

        <Container>
          <ScrollReveal>
            <div className="text-center relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Ready to Transform<br />
                <span className="text-gold-gradient">Innovation into Impact</span>?
              </h2>
              <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
                Join ASIC and be part of Asia&apos;s leading commercialization community
              </p>
              <Button href="/contact" variant="secondary" className="text-lg px-12 py-5 cta-glow-btn">
                {content.ctas.contact}
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
