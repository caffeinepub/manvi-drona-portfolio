import { Container, Section } from '../Primitives';
import { ContactLinks } from '../ContactLinks';
import { RevealOnScroll } from '../Motion';

export function LetsTalkSection() {
  return (
    <Section id="contact" className="py-16 md:py-24">
      <Container>
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Let's Talk
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              If this sounds like the kind of work you're doing, I'd love to connect.
            </p>
            <ContactLinks />
          </div>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
