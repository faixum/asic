'use client';

import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { getContent } from '@/lib/content';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function ScrollReveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] as const }}
    >
      {children}
    </motion.div>
  );
}

export default function CommunityPage() {
  const { language } = useLanguage();
  const content = getContent(language);

  const benefitIcons = [
    <svg key="1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key="3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key="4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key="5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="17 8 12 3 7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="3" x2="12" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key="6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #1A3A6B 40%, #2B5EA7 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          {[
            { w: 4, h: 4, top: 20, left: 15, bg: 'rgba(245,197,24,0.4)' },
            { w: 3, h: 3, top: 60, left: 80, bg: 'rgba(255,255,255,0.2)' },
            { w: 5, h: 5, top: 75, left: 30, bg: 'rgba(245,197,24,0.4)' },
            { w: 4, h: 4, top: 40, left: 60, bg: 'rgba(255,255,255,0.2)' },
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
        </div>

        <Container>
          <motion.div
            className="text-center relative z-10 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              {content.community.title}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {content.community.intro}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-32" style={{ background: '#F0F4F8' }}>
        <Container>
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#1A3A6B' }}>
              {language === 'en' ? 'Community Benefits' : 'Manfaat Komuniti'}
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {content.community.benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div 
                  className="group p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2"
                  style={{ 
                    background: 'white',
                    boxShadow: '0 4px 20px rgba(26,58,107,0.08)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(26,58,107,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(26,58,107,0.08)';
                  }}
                >
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                    style={{ 
                      background: 'linear-gradient(135deg, #F5C518 0%, #E8A317 100%)',
                      color: '#0D1B2A'
                    }}
                  >
                    {benefitIcons[index % benefitIcons.length]}
                  </div>
                  <p className="text-lg font-semibold leading-relaxed" style={{ color: '#1A3A6B' }}>
                    {benefit}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Tagline Section */}
      <section className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1A3A6B 0%, #0D1B2A 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="ambient-orb" style={{ width: 500, height: 500, top: '-20%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(245,197,24,0.12) 0%, transparent 70%)' }} />
        </div>

        <Container>
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div className="mb-12 flex justify-center">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <path d="M32 4L39.5 24.5H60L43.5 37.5L50 58L32 45L14 58L20.5 37.5L4 24.5H24.5L32 4Z" fill="#F5C518" stroke="#F5C518" strokeWidth="1" />
                </svg>
              </div>
              <p className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight whitespace-pre-line">
                {content.community.tagline}
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2B5EA7 0%, #1A8A7A 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="ambient-orb cta-orb-1" style={{ width: 600, height: 600, top: '-40%', right: '-10%', background: 'radial-gradient(circle, rgba(245,197,24,0.1) 0%, transparent 60%)' }} />
        </div>

        <Container>
          <ScrollReveal>
            <div className="text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                {language === 'en' ? 'Join the ASIC Community' : 'Sertai Komuniti ASIC'}
              </h2>
              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                {language === 'en' 
                  ? 'Connect with innovators, researchers, and entrepreneurs across Asia. Be part of a community that transforms ideas into impact.'
                  : 'Berhubung dengan inovator, penyelidik, dan usahawan di seluruh Asia. Jadilah sebahagian daripada komuniti yang mengubah idea kepada impak.'}
              </p>
              <Button href="/contact" variant="secondary" className="text-lg px-12 py-5 cta-glow-btn">
                {language === 'en' ? 'Get in Touch' : 'Hubungi Kami'}
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
