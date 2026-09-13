import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useI18n } from '../i18n/I18nContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t('aria.light') : t('aria.dark')}
      className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 bg-white/60 text-ink-700 transition-colors hover:border-indigo-400 hover:text-indigo-600 dark:border-ink-700 dark:bg-ink-900/60 dark:text-ink-200 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="text-base"
        aria-hidden="true"
      >
        {isDark ? '☀️' : '🌙'}
      </motion.span>
    </button>
  );
}
