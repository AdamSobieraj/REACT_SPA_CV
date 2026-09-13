import { useI18n } from '../i18n/I18nContext';

export function Footer() {
  const { cv } = useI18n();

  return (
    <footer className="border-t border-ink-200/60 py-10 dark:border-ink-800/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row">
        <p className="text-sm text-ink-500 dark:text-ink-400">
          © {new Date().getFullYear()} {cv.profile.name} — {cv.profile.location}
        </p>
      </div>
    </footer>
  );
}
