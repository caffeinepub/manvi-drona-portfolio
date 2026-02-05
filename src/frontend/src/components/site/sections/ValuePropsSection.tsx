import { Container, Section } from '../Primitives';
import siteContent from '../../../content/siteContent.json';
import { RevealOnScroll } from '../Motion';

export function ValuePropsSection() {
  const { valueProps } = siteContent;

  return (
    <Section className="py-16 md:py-24 bg-muted/30">
      <Container>
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center">
            {valueProps.heading}
          </h2>
        </RevealOnScroll>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {valueProps.items.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className="space-y-3">
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}
