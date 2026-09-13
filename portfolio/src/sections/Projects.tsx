import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { useI18n } from '../i18n/I18nContext';

export function Projects() {
  const { cv, t } = useI18n();

  return (
    <section id="projekty" aria-labelledby="projects-title" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="04" title={t('projects.title')} subtitle={t('projects.subtitle')} />

        <div className="grid gap-6 lg:grid-cols-3">
          {cv.projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="group flex h-full flex-col rounded-xl border border-ink-200/70 bg-white/60 p-6 transition-colors hover:border-indigo-400/70 dark:border-ink-800 dark:bg-ink-900/40 dark:hover:border-indigo-500/50"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-base font-semibold leading-snug text-ink-900 dark:text-white">
                    {project.title}
                  </h3>
                  {project.openSource && (
                    <span className="shrink-0 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                      {t('projects.openSource')}
                    </span>
                  )}
                </div>

                <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {project.description}
                </p>

                <ul className="mt-4 flex-1 space-y-2">
                  {project.highlights.slice(0, 3).map((h, i) => (
                    <li key={i} className="flex gap-2 text-[13px] leading-relaxed text-ink-600 dark:text-ink-400">
                      <span aria-hidden="true" className="mt-1 h-1 w-1 shrink-0 rounded-full bg-indigo-500" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-ink-200/70 pt-4 dark:border-ink-800">
                  {project.tech.map((tch) => (
                    <span
                      key={tch}
                      className="rounded-md bg-ink-100 px-2 py-0.5 font-mono text-[11px] text-ink-600 dark:bg-ink-800 dark:text-ink-300"
                    >
                      {tch}
                    </span>
                  ))}
                </div>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition group-hover:gap-2.5 dark:text-indigo-400"
                  >
                    {t('projects.github')} <span aria-hidden="true">→</span>
                  </a>
                )}
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
