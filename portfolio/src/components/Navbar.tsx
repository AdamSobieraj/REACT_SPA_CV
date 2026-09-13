import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navItems } from '../i18n/nav';
import { useI18n } from '../i18n/I18nContext';
import { useActiveSection } from '../hooks/useActiveSection';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

const sectionIds = navItems.map((n) => n.id);

export function Navbar() {
  const { t, cv } = useI18n();
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-200/60 bg-white/80 backdrop-blur-md dark:border-ink-800/60 dark:bg-ink-950/80">
      <nav
        aria-label="Nawigacja główna"
        className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:justify-end"
      >
        {/* Desktop menu — wyśrodkowane na dużych ekranach */}
        <ul className="hidden items-center gap-1 md:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.id);
                  }}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-ink-900 dark:text-white'
                      : 'text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-white'
                  }`}
                >
                  {t(item.labelKey)}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />

          {/* Hamburger (mobile) */}
          <button
            type="button"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-md md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t('aria.closeMenu') : t('aria.openMenu')}
            onClick={() => setOpen((o) => !o)}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-5 bg-ink-900 dark:bg-white"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-5 bg-ink-900 dark:bg-white"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-5 bg-ink-900 dark:bg-white"
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-ink-200/60 bg-white/95 dark:border-ink-800/60 dark:bg-ink-950/95 md:hidden"
          >
            <ul className="space-y-1 px-4 py-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(item.id);
                    }}
                    className={`block rounded-lg px-4 py-3 text-base font-medium ${
                      active === item.id
                        ? 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300'
                        : 'text-ink-700 dark:text-ink-300'
                    }`}
                  >
                    {t(item.labelKey)}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${cv.profile.email}`}
                  className="block rounded-lg px-4 py-3 text-base font-semibold text-indigo-600 dark:text-indigo-400"
                >
                  {t('nav.contactCta')} →
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
