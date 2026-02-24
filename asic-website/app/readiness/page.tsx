'use client';

import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FlaskConical, BarChart3, User } from 'lucide-react';

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

export default function ReadinessPage() {
  const { language } = useLanguage();

  const assessments = [
    {
      id: 'trl',
      icon: <FlaskConical className="w-12 h-12 text-white" strokeWidth={1.5} />,
      title: 'Technology Readiness Level (TRL)',
      titleMs: 'Tahap Kesediaan Teknologi (TRL)',
      description: 'A systematic framework to evaluate how ready your technology is for the market. From basic research (TRL 1) to proven deployment (TRL 9), we help you identify where you stand and what it takes to move forward.',
      descriptionMs: 'Rangka kerja sistematik untuk menilai kesediaan teknologi anda untuk pasaran. Dari penyelidikan asas (TRL 1) hingga penggunaan terbukti (TRL 9), kami membantu anda mengenal pasti kedudukan anda dan apa yang diperlukan untuk maju.',
      highlights: [
        'TRL 1–3: Research & Concept Validation',
        'TRL 4–6: Prototype & Testing',
        'TRL 7–9: Market-Ready & Deployment',
      ],
      highlightsMs: [
        'TRL 1–3: Penyelidikan & Pengesahan Konsep',
        'TRL 4–6: Prototaip & Pengujian',
        'TRL 7–9: Sedia Pasaran & Penggunaan',
      ],
      gradient: 'linear-gradient(135deg, #1A3A6B 0%, #2B5EA7 100%)',
    },
    {
      id: 'crl',
      icon: <BarChart3 className="w-12 h-12 text-white" strokeWidth={1.5} />,
      title: 'Commercialization Readiness Level (CRL)',
      titleMs: 'Tahap Kesediaan Pengkomersilan (CRL)',
      description: 'Beyond technology, commercialization requires market strategy, business model clarity, and ecosystem alignment. CRL measures your readiness to bring innovation from lab to market — covering customer validation, revenue models, and go-to-market execution.',
      descriptionMs: 'Selain teknologi, pengkomersilan memerlukan strategi pasaran, kejelasan model perniagaan, dan penjajaran ekosistem. CRL mengukur kesediaan anda membawa inovasi dari makmal ke pasaran — meliputi pengesahan pelanggan, model hasil, dan pelaksanaan go-to-market.',
      highlights: [
        'Market validation & customer discovery',
        'Business model & revenue readiness',
        'Go-to-market strategy & execution plan',
      ],
      highlightsMs: [
        'Pengesahan pasaran & penemuan pelanggan',
        'Model perniagaan & kesediaan hasil',
        'Strategi go-to-market & pelan pelaksanaan',
      ],
      gradient: 'linear-gradient(135deg, #E8724A 0%, #D4556B 50%, #1A3A6B 100%)',
    },
    {
      id: 'kf',
      icon: <User className="w-12 h-12 text-white" strokeWidth={1.5} />,
      title: 'KAREERfit (Kf)',
      titleMs: 'KAREERfit (Kf)',
      description: 'KAREERfit is an AI-powered career assessment platform that evaluates your career readiness, strengths, and development areas. It helps talents identify suitable career pathways, assess their competencies, and align their skills with industry demands.',
      descriptionMs: 'KAREERfit adalah platform penilaian kerjaya berkuasa AI yang menilai kesediaan kerjaya, kekuatan, dan bidang pembangunan anda. Ia membantu bakat mengenal pasti laluan kerjaya yang sesuai, menilai kecekapan mereka, dan menyelaraskan kemahiran dengan permintaan industri.',
      highlights: [
        'Career readiness & competency assessment',
        'Strengths & development area mapping',
        'Industry-aligned career pathway guidance',
      ],
      highlightsMs: [
        'Penilaian kesediaan kerjaya & kecekapan',
        'Pemetaan kekuatan & bidang pembangunan',
        'Panduan laluan kerjaya sejajar industri',
      ],
      gradient: 'linear-gradient(135deg, #0D4B3C 0%, #1A6B4A 50%, #2B8A5E 100%)',
    },
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
              {language === 'en' ? 'Readiness Assessment Ecosystem' : 'Ekosistem Penilaian Kesediaan'}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              {language === 'en'
                ? 'At ASIC, we don\'t just train — we assess. Our structured readiness frameworks help innovators, founders, and researchers understand exactly where they stand and what it takes to move forward.'
                : 'Di ASIC, kami bukan sekadar melatih — kami menilai. Rangka kerja kesediaan berstruktur kami membantu inovator, pengasas, dan penyelidik memahami kedudukan mereka dan apa yang diperlukan untuk maju.'}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Assessment Cards */}
      <section className="py-32" style={{ background: '#F0F4F8' }}>
        <Container>
          <div className="space-y-16">
            {assessments.map((assessment, i) => (
              <ScrollReveal key={assessment.id} delay={0.1}>
                <div
                  className="mega-card grid lg:grid-cols-2 overflow-hidden"
                  style={{ borderRadius: 20, background: assessment.gradient }}
                >
                  <div className={`p-10 sm:p-14 lg:p-16 xl:p-20 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="mb-6">{assessment.icon}</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {language === 'en' ? assessment.title : assessment.titleMs}
                    </h2>
                    <p className="text-lg text-white/90 mb-8 leading-relaxed">
                      {language === 'en' ? assessment.description : assessment.descriptionMs}
                    </p>
                    <ul className="space-y-3">
                      {(language === 'en' ? assessment.highlights : assessment.highlightsMs).map((h, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-base text-white">
                          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#F5C518' }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`relative flex items-center justify-center p-16 ${i % 2 === 1 ? 'lg:order-1' : ''}`} style={{ background: 'rgba(0,0,0,0.15)' }}>
                    <div className="text-center">
                      <div className="mb-6 flex justify-center">{assessment.icon}</div>
                      <p className="text-2xl font-bold text-white/80">{assessment.id.toUpperCase()}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* What Makes Us Unique */}
      <section className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1A3A6B 0%, #0D1B2A 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="ambient-orb" style={{ width: 500, height: 500, top: '-20%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(245,197,24,0.12) 0%, transparent 70%)' }} />
        </div>

        <Container>
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                {language === 'en' ? 'What Makes ASIC\'s Assessment Unique?' : 'Apa Yang Membezakan Penilaian ASIC?'}
              </h2>
              <p className="text-xl text-white/80 leading-relaxed mb-12">
                {language === 'en'
                  ? 'These assessments help participants move forward with clarity — not confusion. We combine TRL, CRL, and KAREERfit into a holistic view of your innovation journey.'
                  : 'Penilaian ini membantu peserta bergerak ke hadapan dengan kejelasan — bukan kekeliruan. Kami menggabungkan TRL, CRL, dan KAREERfit ke dalam pandangan holistik perjalanan inovasi anda.'}
              </p>
              <Button href="/contact" variant="secondary" className="text-lg px-12 py-5 cta-glow-btn">
                {language === 'en' ? 'Take Your Assessment' : 'Ambil Penilaian Anda'}
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
