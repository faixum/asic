'use client';

import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { getContent } from '@/lib/content';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
/* eslint-disable @next/next/no-img-element */

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

export default function ProgramsPage() {
  const { language } = useLanguage();
  const content = getContent(language);

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
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #1A3A6B 40%, #2B5EA7 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          {[
            { w: 4, h: 4, top: 20, left: 15, bg: 'rgba(245,197,24,0.4)' },
            { w: 3, h: 3, top: 60, left: 80, bg: 'rgba(255,255,255,0.2)' },
            { w: 5, h: 5, top: 75, left: 30, bg: 'rgba(245,197,24,0.4)' },
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
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              {language === 'en' ? 'Our Flagship Programs' : 'Program Utama Kami'}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              {content.programs.intro}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Programs Section */}
      <section className="py-32" style={{ background: '#F0F4F8' }}>
        <Container>
          <div className="space-y-16">
            {programCards.map((program, i) => (
              <ScrollReveal key={program.id} delay={0.1}>
                <div
                  className="mega-card grid lg:grid-cols-2 overflow-hidden"
                  style={{ borderRadius: 20, background: program.gradient }}
                >
                  {/* Text Content */}
                  <div className={`p-10 sm:p-14 lg:p-16 xl:p-20 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="text-5xl mb-6">{program.emoji}</div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: program.textColor }}>
                      {program.name}
                    </h2>
                    <p className="text-lg mb-6" style={{ color: program.textColor, opacity: 0.95 }}>
                      {program.tagline}
                    </p>
                    <p className="text-base mb-8" style={{ color: program.textColor, opacity: 0.9 }}>
                      {program.description}
                    </p>

                    {/* Learning Outcomes */}
                    {program.learningOutcomes && (
                      <div className="mb-8">
                        <h3 className="font-bold mb-4 text-lg" style={{ color: program.textColor }}>
                          {language === 'en' ? 'Learning Outcomes:' : 'Hasil Pembelajaran:'}
                        </h3>
                        <ul className="space-y-3">
                          {program.learningOutcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm" style={{ color: program.textColor, opacity: 0.9 }}>
                              <span className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ background: '#F5C518' }} />
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Activities */}
                    {program.activities && (
                      <div className="mb-8">
                        <h3 className="font-bold mb-4 text-lg" style={{ color: program.textColor }}>
                          {language === 'en' ? 'Activities:' : 'Aktiviti:'}
                        </h3>
                        <ul className="space-y-3">
                          {program.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm" style={{ color: program.textColor, opacity: 0.9 }}>
                              <span className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ background: '#F5C518' }} />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Recognition */}
                    {program.recognition && (
                      <div className="mb-8 p-4 rounded-lg" style={{ background: 'rgba(245,197,24,0.15)' }}>
                        <p className="text-sm font-medium" style={{ color: program.textColor }}>
                          ⭐ {program.recognition}
                        </p>
                      </div>
                    )}

                    <Button href={`/programs/${program.slug}`} variant={i === 0 ? 'primary' : 'outline'} className="w-fit">
                      {language === 'en' ? 'Learn More' : 'Ketahui Lebih Lanjut'} →
                    </Button>
                  </div>

                  {/* Image */}
                  <div className={`relative h-[300px] sm:h-[350px] lg:h-auto lg:min-h-[500px] overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <img
                      src={program.image}
                      alt={program.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1A3A6B 0%, #0D1B2A 50%, #1A3A6B 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="ambient-orb" style={{ width: 600, height: 600, top: '-40%', right: '-10%', background: 'radial-gradient(circle, rgba(245,197,24,0.1) 0%, transparent 60%)' }} />
        </div>

        <Container>
          <ScrollReveal>
            <div className="text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                {language === 'en' ? 'Ready to Start Your Journey?' : 'Bersedia Memulakan Perjalanan Anda?'}
              </h2>
              <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
                {language === 'en' 
                  ? 'Join ASIC and transform your innovation into real impact'
                  : 'Sertai ASIC dan ubah inovasi anda kepada impak sebenar'}
              </p>
              <Button href="/contact" variant="secondary" className="text-lg px-12 py-5">
                {language === 'en' ? 'Get in Touch' : 'Hubungi Kami'}
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
