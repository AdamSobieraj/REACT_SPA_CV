import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { useI18n } from '../i18n/I18nContext';
import type { UIKey } from '../i18n/ui';

function levelKey(level: number): UIKey {
  if (level >= 90) return 'skills.level.expert';
  if (level >= 75) return 'skills.level.advanced';
  return 'skills.level.good';
}

export function Skills() {
  const { cv, t, lang } = useI18n();
  const [filter, setFilter] = useState<string | null>(null);

  // Zmiana języka zmienia nazwy kategorii — reset filtru
  useEffect(() => setFilter(null), [lang]);

  const groups = cv.skillGroups;
  const visibleGroups = useMemo(
    () => (filter === null ? groups : groups.filter((g) => g.category === filter)),
    [groups, filter],
  );

  return (
    <section id="umiejetnosci" aria-labelledby="skills-title" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="03" title={t('skills.title')} subtitle={t('skills.subtitle')} />

        {/* Filtry */}
        <Reveal className="mb-10 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setFilter(null)}
            aria-pressed={filter === null}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filter === null
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                : 'border border-ink-200 text-ink-600 hover:border-indigo-400 hover:text-indigo-600 dark:border-ink-700 dark:text-ink-300 dark:hover:border-indigo-500 dark:hover:text-indigo-300'
            }`}
          >
            {t('skills.all')}
          </button>
          {groups.map((g) => {
            const isActive = filter === g.category;
            return (
              <button
                key={g.category}
                type="button"
                onClick={() => setFilter(g.category)}
                aria-pressed={isActive}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                    : 'border border-ink-200 text-ink-600 hover:border-indigo-400 hover:text-indigo-600 dark:border-ink-700 dark:text-ink-300 dark:hover:border-indigo-500 dark:hover:text-indigo-300'
                }`}
              >
                {g.category}
              </button>
            );
          })}
        </Reveal>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={filter ?? 'all'}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid gap-6 md:grid-cols-2"
          >
            {visibleGroups.map((group, gi) => (
              <div
                key={group.category}
                className="rounded-xl border border-ink-200/70 bg-white/60 p-6 dark:border-ink-800 dark:bg-ink-900/40"
              >
                <h3 className="mb-5 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                  <span aria-hidden="true">▸</span> {group.category}
                </h3>
                <ul className="space-y-4">
                  {group.items.map((skill, si) => (
                    <li key={skill.name}>
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-sm font-medium text-ink-800 dark:text-ink-200">
                          {skill.name}
                        </span>
                        <span className="shrink-0 text-xs text-ink-400 dark:text-ink-500">
                          {t(levelKey(skill.level))}
                        </span>
                      </div>
                      <div
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name} — ${skill.level}%`}
                        className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800"
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: gi * 0.05 + si * 0.04, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
