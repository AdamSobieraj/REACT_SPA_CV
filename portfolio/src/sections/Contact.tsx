import { useState, type FormEvent } from 'react';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { useI18n } from '../i18n/I18nContext';

/**
 * Formularz działa przez mailto (bez backendu).
 * Aby podpiąć EmailJS/Formspree: w onSubmit wyślij dane fetchem
 * pod swój endpoint i usuń budowanie mailto.
 */
export function Contact() {
  const { cv, t } = useI18n();
  const { profile } = cv;
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`${t('contact.subject')}${data.get('name')}`);
    const body = encodeURIComponent(
      `${data.get('message')}\n\n— ${data.get('name')}\n${data.get('email')}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass =
    'w-full rounded-lg border border-ink-300 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:border-indigo-500 dark:border-ink-700 dark:bg-ink-900/60 dark:text-white';

  return (
    <section id="kontakt" aria-labelledby="contact-title" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="06" title={t('contact.title')} subtitle={t('contact.subtitle')} />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Dane kontaktowe */}
          <Reveal>
            <ul className="space-y-4">
              {profile.links.map((link) => (
                <li key={link.kind}>
                  <a
                    href={link.url}
                    {...(link.kind === 'github' || link.kind === 'linkedin'
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="group flex items-center justify-between rounded-xl border border-ink-200/70 bg-white/60 px-5 py-4 transition-all hover:border-indigo-400/70 dark:border-ink-800 dark:bg-ink-900/40 dark:hover:border-indigo-500/50"
                  >
                    <span className="text-sm font-medium text-ink-800 dark:text-ink-200">
                      {link.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-indigo-600 transition-transform group-hover:translate-x-1 dark:text-indigo-400"
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Formularz */}
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    {t('contact.name')}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className={inputClass}
                    placeholder={t('contact.namePh')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                    {t('contact.email')}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClass}
                    placeholder={t('contact.emailPh')}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={`resize-y ${inputClass}`}
                  placeholder={t('contact.messagePh')}
                />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500"
                >
                  {t('contact.send')}
                </button>
                {sent && (
                  <p role="status" className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    {t('contact.sent')}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
