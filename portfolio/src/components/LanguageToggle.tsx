import { motion } from 'framer-motion';
import { useI18n } from '../i18n/I18nContext';
import type { Lang } from '../i18n/ui';

const LANGS: Lang[] = ['pl', 'en'];

/** Przełącznik PL/EN — segmentowany, z animowanym wskaźnikiem. */
export function LanguageToggle() {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t('aria.lang')}
      className="flex items-center rounded-full border border-ink-200 bg-white/60 p-0.5 dark:border-ink-700 dark:bg-ink-900/60"
    >
      {LANGS.map((l) => {
        const active = lang === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={active}
            className={`relative rounded-full px-2.5 py-1 font-mono text-xs font-semibold uppercase transition-colors ${
              active
                ? 'text-white'
                : 'text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-white'
            }`}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-full bg-indigo-600"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{l}</span>
          </button>
        );
      })}
    </div>
  );
}
