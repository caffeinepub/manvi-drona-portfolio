import { SiteHeader } from '../components/site/SiteHeader';
import { HeroSection } from '../components/site/sections/HeroSection';
import { ValuePropsSection } from '../components/site/sections/ValuePropsSection';
import { SelectedWorkSection } from '../components/site/sections/SelectedWorkSection';
import { AboutSection } from '../components/site/sections/AboutSection';
import { LetsTalkSection } from '../components/site/sections/LetsTalkSection';
import { SiteFooter } from '../components/site/SiteFooter';

interface LandingPageProps {
  onNavigateToCaseStudy: (slug: string) => void;
}

export function LandingPage({ onNavigateToCaseStudy }: LandingPageProps) {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ValuePropsSection />
        <AboutSection />
        <SelectedWorkSection onNavigateToCaseStudy={onNavigateToCaseStudy} />
        <LetsTalkSection />
      </main>
      <SiteFooter />
    </>
  );
}
