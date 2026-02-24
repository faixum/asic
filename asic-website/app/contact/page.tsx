'use client';

import Container from '@/components/ui/Container';
import { siteContent } from '@/lib/content';
import { Mail, Phone } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

function generateMathQuestion() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { a, b, answer: a + b };
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [captchaInput, setCaptchaInput] = useState('');
  const [math, setMath] = useState({ a: 0, b: 0, answer: 0 });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setMath(generateMathQuestion());
  }, []);

  const resetForm = useCallback(() => {
    setForm({ name: '', email: '', subject: '', message: '' });
    setCaptchaInput('');
    setMath(generateMathQuestion());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');

    if (parseInt(captchaInput) !== math.answer) {
      setStatus('error');
      return;
    }

    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${encodeURIComponent(form.message)}`;
    const subject = encodeURIComponent(form.subject || 'Enquiry from ASIC Website');
    window.location.href = `mailto:hello@asiatech.ltd?subject=${subject}&body=${body}`;
    setStatus('success');
    setTimeout(resetForm, 3000);
  };
  return (
    <div className="py-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Get in touch with us to learn more about our programs
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* Company Info */}
              <div className="p-6 rounded-xl mb-2" style={{ background: '#F0F4F8' }}>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#1A3A6B' }}>Asiatech Education Sdn. Bhd.</h3>
                <p className="text-sm text-gray-600">(Reg. No.: 1443045-A)</p>
                <p className="text-sm text-gray-600 mt-2">
                  Level 9, Integra Tower, 348, Jalan Tun Razak,<br />
                  50400 Kuala Lumpur, Malaysia
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href={`mailto:${siteContent.contact.email}`} className="text-blue-600 hover:underline">
                    {siteContent.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p>{siteContent.contact.phone}</p>
                </div>
              </div>

              </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6" style={{ color: '#1A3A6B' }}>Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                    placeholder="Your message"
                  />
                </div>

                {/* Math Captcha */}
                <div>
                  <label htmlFor="captcha" className="block text-sm font-medium text-gray-700 mb-1">
                    Security check: What is {math.a} + {math.b}? *
                  </label>
                  <input
                    id="captcha"
                    type="number"
                    required
                    value={captchaInput}
                    onChange={(e) => { setCaptchaInput(e.target.value); setStatus('idle'); }}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    placeholder="Your answer"
                  />
                  {status === 'error' && (
                    <p className="text-red-500 text-sm mt-1">Wrong answer. Please try again.</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #1A3A6B 0%, #2B5EA7 100%)' }}
                >
                  Send Message
                </button>

                {status === 'success' && (
                  <p className="text-green-600 text-sm text-center">Your email client should open shortly.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
