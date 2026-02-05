import { Container } from './Primitives';
import { Button } from '@/components/ui/button';
import { ResumeCta } from './ResumeCta';
import contactInfo from '../../content/contact.json';

export function SiteHeader() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-lg font-medium hover:text-foreground/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            Manvi Drona
          </button>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              Contact
            </button>
            <ResumeCta variant="outline" size="sm" />
            <Button
              asChild
              size="sm"
              className="ml-2"
            >
              <a
                href={contactInfo.contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
          </nav>

          <div className="flex md:hidden items-center gap-2">
            <ResumeCta variant="outline" size="sm" />
          </div>
        </div>
      </Container>
    </header>
  );
}
