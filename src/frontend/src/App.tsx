import { LandingPage } from './pages/LandingPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { useState } from 'react';

export type View = 'landing' | 'case-study';

export interface AppState {
  view: View;
  caseStudySlug?: string;
}

function App() {
  const [appState, setAppState] = useState<AppState>({ view: 'landing' });

  const navigateToLanding = () => {
    setAppState({ view: 'landing' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCaseStudy = (slug: string) => {
    setAppState({ view: 'case-study', caseStudySlug: slug });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {appState.view === 'landing' && (
        <LandingPage onNavigateToCaseStudy={navigateToCaseStudy} />
      )}
      {appState.view === 'case-study' && appState.caseStudySlug && (
        <CaseStudyPage
          slug={appState.caseStudySlug}
          onNavigateBack={navigateToLanding}
        />
      )}
    </div>
  );
}

export default App;
