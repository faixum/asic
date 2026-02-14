'use client';

import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { getContent } from '@/lib/content';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CommunityPage() {
  const { language } = useLanguage();
  const content = getContent(language);

  return (
    <div className="py-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">
            {content.community.title}
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            {content.community.intro}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {content.community.benefits.map((benefit, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <p className="text-lg font-medium text-gray-800">{benefit}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-12 rounded-lg text-center">
            <p className="text-2xl font-bold mb-8 whitespace-pre-line">
              {content.community.tagline}
            </p>
            <Button href="/contact" variant="outline" className="text-lg px-8 py-4">
              Join ASIC Community
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
