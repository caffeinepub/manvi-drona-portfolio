import { Container, Section } from '../Primitives';
import { Button } from '@/components/ui/button';
import siteContent from '../../../content/siteContent.json';
import { ResumeCta } from '../ResumeCta';
import { RevealOnScroll } from '../Motion';

export function HeroSection() {
  const { hero } = siteContent;

  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x1080.png)' }}
      />
      <Container className="relative">
        <RevealOnScroll>
          <div className="max-w-4xl">
            <div className="mb-6">
              <img
                src="/assets/generated/wordmark.dim_800x200.png"
                alt="Manvi Drona"
                className="h-12 md:h-16 w-auto opacity-90"
              />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              {hero.title}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight mb-6">
              {hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-6 max-w-3xl">
              {hero.subhead}
            </p>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-12 max-w-3xl">
              {hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={scrollToWork}>
                View Case Studies
              </Button>
              <ResumeCta variant="outline" size="lg" />
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
