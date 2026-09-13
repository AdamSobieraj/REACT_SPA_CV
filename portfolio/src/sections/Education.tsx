import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { useI18n } from '../i18n/I18nContext';

export function Education() {
  const { cv, t } = useI18n();

  return (
    <section id="edukacja" aria-labelledby="edu-title" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="05" title={t('edu.title')} />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Edukacja */}
          <div>
            <h3 className="mb-6 font-mono text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              {t('edu.school')}
            </h3>
            <ol className="space-y-5">
              {cv.education.map((e, i) => (
                <li key={e.degree}>
                  <Reveal delay={i * 0.08}>
                    <div className="rounded-xl border border-ink-200/70 bg-white/60 p-5 dark:border-ink-800 dark:bg-ink-900/40">
                      <div className="flex items-baseline justify-between gap-3">
                        <h4 className="font-semibold text-ink-900 dark:text-white">{e.degree}</h4>
                        <span className="shrink-0 font-mono text-xs text-indigo-600 dark:text-indigo-400">
                          {e.period}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-ink-600 dark:text-ink-300">{e.school}</p>
                      {e.note && (
                        <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">{e.note}</p>
                      )}
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-10">
            {/* Certyfikaty */}
            <div>
              <h3 className="mb-6 font-mono text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                {t('edu.certs')}
              </h3>
              <ul className="space-y-3">
                {cv.certifications.map((c, i) => (
                  <li key={c.name}>
                    <Reveal delay={i * 0.06}>
                      <div className="flex items-center justify-between gap-3 rounded-lg border border-ink-200/70 bg-white/60 px-4 py-3 dark:border-ink-800 dark:bg-ink-900/40">
                        <div>
                          <p className="text-sm font-medium text-ink-900 dark:text-ink-100">{c.name}</p>
                          <p className="text-xs text-ink-500 dark:text-ink-400">{c.issuer}</p>
                        </div>
                        <span className="shrink-0 font-mono text-xs text-ink-400 dark:text-ink-500">
                          {c.year}
                        </span>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>

            {/* Języki */}
            <div>
              <h3 className="mb-6 font-mono text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                {t('edu.languages')}
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {cv.languages.map((l, i) => (
                  <li key={l.name}>
                    <Reveal delay={i * 0.06}>
                      <div className="rounded-lg border border-ink-200/70 bg-white/60 px-4 py-3 dark:border-ink-800 dark:bg-ink-900/40">
                        <p className="text-sm font-medium text-ink-900 dark:text-ink-100">{l.name}</p>
                        <p className="mt-0.5 text-xs text-ink-500 dark:text-ink-400">{l.level}</p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
