import Container from '@/components/ui/Container';
import { siteContent } from '@/lib/content';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
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

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p>{siteContent.contact.address.street}</p>
                  <p>{siteContent.contact.address.city}, {siteContent.contact.address.state}</p>
                  <p>{siteContent.contact.address.postcode}</p>
                  <p>{siteContent.contact.address.country}</p>
                </div>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Send us a message</h3>
              <p className="text-gray-600">
                Contact form will be implemented here. For now, please reach out via email or phone.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
