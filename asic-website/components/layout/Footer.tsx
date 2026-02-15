'use client';

import Link from 'next/link';
import Container from '../ui/Container';
import { getContent, siteContent } from '@/lib/content';
import { Facebook, Linkedin, Instagram, Twitter, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

export default function Footer() {
  const { language } = useLanguage();
  const content = getContent(language);
  const [showCompanyDetails, setShowCompanyDetails] = useState(false);

  return (
    <footer style={{ background: '#0D1B2A' }} className="text-gray-400">
      {/* Top gradient line */}
      <div className="gradient-divider" />

      <Container>
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* About */}
          <div>
            <div className="mb-4">
              <img
                src="/images/asic-logo.png"
                alt="ASIC"
                className="h-10 object-contain"
                style={{
                  padding: '4px 8px',
                  background: 'rgba(255,255,255,0.95)',
                  borderRadius: '8px',
                }}
              />
            </div>
            <p className="text-sm mb-5 leading-relaxed">
              {content.hero.tagline}
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: siteContent.contact.socialMedia.facebook },
                { icon: Linkedin, href: siteContent.contact.socialMedia.linkedin },
                { icon: Instagram, href: siteContent.contact.socialMedia.instagram },
                { icon: Twitter, href: siteContent.contact.socialMedia.twitter },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(245,197,24,0.15)';
                    e.currentTarget.style.borderColor = 'rgba(245,197,24,0.4)';
                    e.currentTarget.style.color = '#F5C518';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = '';
                  }}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {language === 'en' ? 'Quick Links' : 'Pautan Pantas'}
            </h4>
            <ul className="space-y-3 text-sm">
              {content.navigation.main.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#F5C518] transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {language === 'en' ? 'Programs' : 'Program'}
            </h4>
            <ul className="space-y-3 text-sm">
              {content.programs.list.map((program) => (
                <li key={program.id}>
                  <Link
                    href={`/programs/${program.slug}`}
                    className="hover:text-[#F5C518] transition-colors duration-300"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {language === 'en' ? 'Contact Us' : 'Hubungi Kami'}
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#F5C518' }} />
                <a href={`mailto:${siteContent.contact.email}`} className="hover:text-[#F5C518] transition-colors duration-300">
                  {siteContent.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#F5C518' }} />
                <span>{siteContent.contact.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 text-center text-sm" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="relative inline-block">
            <p 
              className="text-gray-500 cursor-pointer transition-colors duration-300 hover:text-[#F5C518]"
              onMouseEnter={() => setShowCompanyDetails(true)}
              onMouseLeave={() => setShowCompanyDetails(false)}
              onClick={() => setShowCompanyDetails(!showCompanyDetails)}
            >
              © {new Date().getFullYear()} {siteContent.brand.shortName}.
              {language === 'en' ? ' All rights reserved.' : ' Hak cipta terpelihara.'}
            </p>
            
            {/* Company Details Tooltip */}
            {showCompanyDetails && (
              <div 
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 rounded-lg text-xs whitespace-nowrap z-50 animate-fadeIn"
                style={{ 
                  background: 'rgba(26,58,107,0.95)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(245,197,24,0.2)'
                }}
              >
                <p className="text-white font-semibold mb-1">ASIATECH EDUCATION SDN. BHD.</p>
                <p className="text-gray-300">1443045A</p>
                {/* Arrow */}
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-px"
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: '6px solid transparent',
                    borderRight: '6px solid transparent',
                    borderTop: '6px solid rgba(26,58,107,0.95)',
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}
