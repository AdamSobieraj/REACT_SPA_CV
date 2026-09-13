import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { useI18n } from '../i18n/I18nContext';
import type { ExperienceItem } from '../data/cv';

function TimelineItem({ item, index }: { item: ExperienceItem; index: number }) {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <Reveal delay={Math.min(index * 0.06, 0.3)}>
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
        className="group relative w-full cursor-pointer rounded-xl border border-ink-200/70 bg-white/60 p-5 text-left transition-all hover:border-indigo-400/70 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-ink-800 dark:bg-ink-900/40 dark:hover:border-indigo-500/50 sm:p-6"
      >
        {/* Kropka na osi */}
        <span
          aria-hidden="true"
          className={`absolute -left-[27px] top-7 hidden h-3.5 w-3.5 rounded-full border-2 transition-colors sm:block ${
            expanded
              ? 'border-indigo-500 bg-indigo-500'
              : 'border-ink-300 bg-white group-hover:border-indigo-400 dark:border-ink-600 dark:bg-ink-950'
          }`}
        />

        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-lg font-semibold text-ink-900 transition-colors group-hover:text-indigo-700 dark:text-white dark:group-hover:text-indigo-300">
            {item.role} <span className="text-ink-400 dark:text-ink-500">@</span>{' '}
            <span className="text-ink-900 dark:text-white">{item.company}</span>
          </h3>
          <p className="shrink-0 font-mono text-xs font-medium text-indigo-600 dark:text-indigo-400">
            {item.period}
          </p>
        </div>

        <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">{item.description}</p>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.ul
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 space-y-2 overflow-hidden"
            >
              {item.highlights.map((h, i) => (
                <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink-700 dark:text-ink-300">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
                  {h}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {item.tech.map((tch) => (
            <span
              key={tch}
              className="rounded-md bg-ink-100 px-2 py-1 font-mono text-[11px] font-medium text-ink-600 dark:bg-ink-800 dark:text-ink-300"
            >
              {tch}
            </span>
          ))}
        </div>

        <span
          className={`mt-4 inline-flex items-center gap-1 font-mono text-xs font-medium transition-colors ${
            expanded ? 'text-indigo-600 dark:text-indigo-400' : 'text-ink-400 dark:text-ink-500'
          }`}
          aria-hidden="true"
        >
          {expanded ? t('exp.less') : t('exp.more')}
        </span>
      </button>
    </Reveal>
  );
}

export function Experience() {
  const { cv, t } = useI18n();

  return (
    <section id="doswiadczenie" aria-labelledby="exp-title" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="02"
          title={t('exp.title')}
          subtitle={t('exp.subtitle')}
        />

        {/* Oś czasu */}
        <div className="relative border-l-0 pl-0 sm:ml-5 sm:border-l sm:border-ink-200 dark:sm:border-ink-800">
          <div className="space-y-4 pl-0 sm:pl-8">
            {cv.experience.map((item, i) => (
              <TimelineItem key={item.company + item.period} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
