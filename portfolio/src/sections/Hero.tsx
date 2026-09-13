import { motion } from 'framer-motion';
import { useState } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { useTypewriter } from '../hooks/useTypewriter';

export function Hero() {
  const { cv, t } = useI18n();
  const { profile } = cv;
  const typed = useTypewriter(profile.roles);
  const [photoOk, setPhotoOk] = useState(true);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const stats: { value: string; key: 'hero.stats.years' | 'hero.stats.queries' | 'hero.stats.uptime' | 'hero.stats.debt' }[] = [
    { value: '9+', key: 'hero.stats.years' },
    { value: '10 000+', key: 'hero.stats.queries' },
    { value: '99.5%', key: 'hero.stats.uptime' },
    { value: '-40%', key: 'hero.stats.debt' },
  ];

  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden pt-16">
      {/* Subtelne tło: siatka + poświata */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/15 via-violet-500/10 to-cyan-500/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_320px]">
          {/* ---------- Tekst ---------- */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-sm font-medium tracking-wide text-indigo-600 dark:text-indigo-400"
            >
              {'// ' + profile.location}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 text-5xl font-extrabold tracking-tight text-ink-900 dark:text-white sm:text-6xl lg:text-7xl"
            >
              {profile.name}
            </motion.h1>

            {/* Linia z efektem typing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-5 flex min-h-[2.5rem] items-center gap-3 font-mono text-lg text-ink-700 dark:text-ink-200 sm:text-2xl"
              aria-live="polite"
            >
              <span className="text-indigo-600 dark:text-indigo-400" aria-hidden="true">
                $
              </span>
              <span aria-label={profile.roles.join(', ')}>{typed}</span>
              <motion.span
                aria-hidden="true"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                className="inline-block h-6 w-[3px] rounded bg-indigo-500 sm:h-7"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 max-w-2xl whitespace-pre-line text-lg leading-relaxed text-ink-600 dark:text-ink-300"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500 focus-visible:ring-2"
              >
                {t('hero.contact')}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#projekty"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('projekty');
                }}
                className="inline-flex items-center gap-2 rounded-lg border border-ink-300 px-6 py-3 text-sm font-semibold text-ink-800 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-ink-600 dark:text-ink-100 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
              >
                {t('hero.projects')}
              </a>
              <div className="flex items-center gap-4 sm:ml-2">
                {profile.links
                  .filter((l) => l.kind === 'github' || l.kind === 'linkedin')
                  .map((l) => (
                    <a
                      key={l.kind}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={l.label}
                      className="text-ink-500 transition hover:text-indigo-600 dark:text-ink-400 dark:hover:text-indigo-400"
                    >
                      {l.kind === 'github' ? (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                        </svg>
                      ) : (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
                        </svg>
                      )}
                    </a>
                  ))}
              </div>
            </motion.div>
          </div>

          {/* ---------- Zdjęcie ---------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto lg:mx-0 lg:justify-self-end"
          >
            {photoOk && (
              <div className="relative">
                {/* poświata */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 rounded-full bg-gradient-to-br from-indigo-500/25 via-violet-500/20 to-cyan-500/25 blur-2xl"
                />
                {/* gradientowy ring */}
                <div className="relative rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 p-[3px]">
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    width={300}
                    height={300}
                    onError={() => setPhotoOk(false)}
                    className="h-56 w-56 rounded-full bg-ink-100 object-cover dark:bg-ink-900 sm:h-64 sm:w-64 lg:h-72 lg:w-72"
                  />
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Statystyki z CV */}
        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-ink-200/70 pt-8 dark:border-ink-800/70 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.key}>
              <dt className="sr-only">{t(s.key)}</dt>
              <dd className="font-mono text-2xl font-semibold text-ink-900 dark:text-white">{s.value}</dd>
              <dd className="mt-1 text-sm text-ink-500 dark:text-ink-400">{t(s.key)}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
