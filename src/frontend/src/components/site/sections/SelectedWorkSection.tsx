import { Container, Section } from '../Primitives';
import { Card, CardContent } from '@/components/ui/card';
import projects from '../../../content/projects.json';
import { RevealOnScroll } from '../Motion';
import { ArrowRight } from 'lucide-react';

interface SelectedWorkSectionProps {
  onNavigateToCaseStudy: (slug: string) => void;
}

export function SelectedWorkSection({ onNavigateToCaseStudy }: SelectedWorkSectionProps) {
  return (
    <Section id="work" className="py-16 md:py-24">
      <Container>
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-medium mb-12">
            Selected Work
          </h2>
        </RevealOnScroll>
        <div className="space-y-8">
          {projects.projects.map((project, index) => (
            <RevealOnScroll key={project.slug} delay={index * 0.1}>
              <Card
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-foreground/20"
                onClick={() => onNavigateToCaseStudy(project.slug)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onNavigateToCaseStudy(project.slug);
                  }
                }}
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-5 gap-6">
                    <div className="md:col-span-2 aspect-[3/2] overflow-hidden">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-medium mb-3 group-hover:text-foreground/80 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-4">
                        {project.client}
                      </p>
                      <p className="text-foreground/70 leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex items-center text-sm font-medium text-foreground/60 group-hover:text-foreground transition-colors">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}
