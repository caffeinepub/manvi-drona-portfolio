import { SiteHeader } from '../components/site/SiteHeader';
import { SiteFooter } from '../components/site/SiteFooter';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import caseStudies from '../content/caseStudies.json';
import { Container, Section } from '../components/site/Primitives';
import { RevealOnScroll } from '../components/site/Motion';

interface CaseStudyPageProps {
  slug: string;
  onNavigateBack: () => void;
}

interface CaseStudyImage {
  src: string;
  alt: string;
  caption?: string;
}

interface CaseStudySection {
  heading: string;
  content: string[];
  bullets?: string[];
}

interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  images?: CaseStudyImage[];
  sections: CaseStudySection[];
}

export function CaseStudyPage({ slug, onNavigateBack }: CaseStudyPageProps) {
  const caseStudy = caseStudies.caseStudies.find((cs) => cs.slug === slug) as CaseStudy | undefined;

  if (!caseStudy) {
    return (
      <>
        <SiteHeader />
        <main>
          <Section className="py-24">
            <Container>
              <h1 className="text-3xl font-medium mb-6">Case Study Not Found</h1>
              <Button onClick={onNavigateBack} variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Container>
          </Section>
        </main>
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <SiteHeader />
      <main>
        <Section className="py-12 md:py-16">
          <Container>
            <Button
              onClick={onNavigateBack}
              variant="ghost"
              className="mb-8 -ml-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Work
            </Button>

            <RevealOnScroll>
              <div className="space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
                  {caseStudy.title}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  {caseStudy.client}
                </p>
              </div>
            </RevealOnScroll>

            {caseStudy.images && caseStudy.images.length > 0 && (
              <RevealOnScroll delay={0.1}>
                <div className="mb-16 space-y-8">
                  {caseStudy.images.map((image, index) => (
                    <figure key={index} className="space-y-3">
                      <div className="rounded-lg overflow-hidden bg-muted/30 border border-border">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto"
                          loading="lazy"
                        />
                      </div>
                      {image.caption && (
                        <figcaption className="text-sm text-muted-foreground text-center">
                          {image.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </RevealOnScroll>
            )}

            <div className="prose prose-lg max-w-none">
              {caseStudy.sections.map((section, index) => (
                <RevealOnScroll key={index} delay={index * 0.1}>
                  <div className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-medium mb-4">
                      {section.heading}
                    </h2>
                    <div className="space-y-4">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-lg leading-relaxed text-foreground/90">
                          {paragraph}
                        </p>
                      ))}
                      {section.bullets && section.bullets.length > 0 && (
                        <ul className="space-y-2 mt-4">
                          {section.bullets.map((bullet, bIndex) => (
                            <li key={bIndex} className="text-lg leading-relaxed text-foreground/90">
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll>
              <div className="mt-16 pt-8 border-t border-border">
                <Button onClick={onNavigateBack} variant="outline" size="lg">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  View More Work
                </Button>
              </div>
            </RevealOnScroll>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
