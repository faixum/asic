import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { getContent } from '@/lib/content';

export default function ProgramsPage() {
  const content = getContent('en');

  return (
    <div className="py-16">
      <Container>
        <h1 className="text-4xl font-bold text-center mb-8">Our Programs</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          {content.programs.intro}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {content.programs.list.map((program) => (
            <div key={program.id} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">{program.emoji}</div>
              <h2 className="text-2xl font-bold mb-3">{program.name}</h2>
              <p className="text-gray-600 mb-4">{program.tagline}</p>
              <p className="text-gray-700 mb-4">{program.description}</p>
              
              {program.learningOutcomes && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Learning Outcomes:</h3>
                  <ul className="space-y-1">
                    {program.learningOutcomes.map((outcome, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {program.activities && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Activities:</h3>
                  <ul className="space-y-1">
                    {program.activities.map((activity, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Button href={`/programs/${program.slug}`} variant="primary" className="w-full mt-4">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
