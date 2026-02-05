import { Container, Section } from '../Primitives';
import siteContent from '../../../content/siteContent.json';
import { RevealOnScroll } from '../Motion';

export function AboutSection() {
  const { about } = siteContent;

  return (
    <Section id="about" className="py-16 md:py-24">
      <Container>
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-8">About</h2>
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/80">
              {about.content}
            </p>
          </div>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
