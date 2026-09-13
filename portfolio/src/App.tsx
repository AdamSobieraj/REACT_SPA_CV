import { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { useI18n } from './i18n/I18nContext';

// Code splitting: sekcje poniżej Hero ładowane leniwie
const Experience = lazy(() => import('./sections/Experience').then((m) => ({ default: m.Experience })));
const Skills = lazy(() => import('./sections/Skills').then((m) => ({ default: m.Skills })));
const Projects = lazy(() => import('./sections/Projects').then((m) => ({ default: m.Projects })));
const Education = lazy(() => import('./sections/Education').then((m) => ({ default: m.Education })));
const Contact = lazy(() => import('./sections/Contact').then((m) => ({ default: m.Contact })));

export default function App() {
  const { t } = useI18n();

  return (
    <div className="min-h-svh">
      <a
        href="#o-mnie"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-white"
      >
        {t('skip.toContent')}
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Suspense fallback={<div className="py-20 text-center text-sm text-ink-400">{t('loading')}</div>}>
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
