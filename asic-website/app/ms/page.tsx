import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { getContent } from '@/lib/content';

export default function HomeMalay() {
  const content = getContent('ms');

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 md:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {content.hero.emoji} {content.hero.title}
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-semibold">
              {content.hero.tagline}
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              {content.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/ms/programs" variant="secondary">
                {content.ctas.secondary}
              </Button>
              <Button href="/ms/community" variant="outline">
                {content.ctas.primary}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              &ldquo;{content.hero.quote}&rdquo;
            </blockquote>
            <p className="text-lg text-gray-600">
              {content.hero.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Talent Types */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            Kami adalah sekolah pengkomersilan khusus yang komited untuk membangunkan:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {content.talentTypes.map((talent, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-3">{talent.emoji}</div>
                <p className="font-medium text-gray-800">{talent.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {content.differentiators.title}
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            {content.differentiators.description}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {content.features.map((feature) => (
              <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{feature.emoji}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {content.programs.intro}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {content.programs.list.map((program) => (
              <div key={program.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{program.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{program.name}</h3>
                <p className="text-gray-600 mb-4">{program.tagline}</p>
                <Button href={`/ms/programs/${program.slug}`} variant="primary" className="w-full">
                  {content.ctas.learnMore}
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Vision */}
      <section className="py-16 bg-blue-600 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-6">{content.vision.emoji}</div>
            <h2 className="text-3xl font-bold mb-4">{content.vision.title}</h2>
            <p className="text-xl">{content.vision.statement}</p>
          </div>
        </Container>
      </section>

      {/* Target Audience */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {content.targetAudience.title}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {content.targetAudience.audiences.map((audience, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-medium text-gray-800">{audience}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bersedia untuk Mengubah Inovasi kepada Impak?
            </h2>
            <Button href="/ms/contact" variant="outline" className="text-lg px-8 py-4">
              {content.ctas.contact}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
