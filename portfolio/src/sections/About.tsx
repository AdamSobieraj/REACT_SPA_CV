import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { useI18n } from '../i18n/I18nContext';

export function About() {
  const { cv, t } = useI18n();
  const { profile } = cv;

  const quick: { labelKey: Parameters<typeof t>[0]; value: string }[] = [
    { labelKey: 'about.location', value: profile.location },
    { labelKey: 'about.role', value: t('about.roleValue') },
    { labelKey: 'about.interests', value: t('about.interestsValue') },
  ];

  return (
    <section id="o-mnie" aria-labelledby="about-title" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="01" title={t('about.title')} />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-lg leading-relaxed text-ink-700 dark:text-ink-300">
            {profile.summary.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="h-fit rounded-xl border border-ink-200/70 bg-ink-50/50 p-6 dark:border-ink-800 dark:bg-ink-900/40">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                {t('about.quick')}
              </h3>
              <dl className="mt-4 space-y-4 text-sm">
                {quick.map((row) => (
                  <div key={row.labelKey}>
                    <dt className="font-medium text-ink-500 dark:text-ink-400">{t(row.labelKey)}</dt>
                    <dd className="mt-0.5 font-medium text-ink-900 dark:text-ink-100">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
