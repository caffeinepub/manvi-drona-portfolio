import { Container } from './Primitives';
import { Heart } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 py-8 mt-24">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-1.5">
            © 2026. Built with{' '}
            <Heart className="h-3.5 w-3.5 fill-current text-foreground/60" />{' '}
            using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
