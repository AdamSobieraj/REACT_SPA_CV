import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { ui, type Lang, type UIKey } from './ui';
import { cvPl, type CvContent } from '../data/cv';
import { cvEn } from '../data/cv-en';

interface I18nValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** Zwróć przetłumaczony tekst UI: t('nav.about') */
  t: (key: UIKey) => string;
  /** Treść CV w wybranym języku */
  cv: CvContent;
}

const I18nContext = createContext<I18nValue | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('pl');

  // Synchronizuj <html lang>, <title> i meta description z językiem
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = ui['meta.title'][lang];
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', ui['meta.description'][lang]);
  }, [lang]);

  const t = useCallback((key: UIKey) => ui[key][lang], [lang]);
  const cv = useMemo(() => (lang === 'pl' ? cvPl : cvEn), [lang]);

  return <I18nContext.Provider value={{ lang, setLang, t, cv }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
