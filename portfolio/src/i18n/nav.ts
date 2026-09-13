import type { UIKey } from './ui';

/** Punkty nawigacji — id sekcji + klucz tłumaczenia etykiety. */
export const navItems: { id: string; labelKey: UIKey }[] = [
  { id: 'o-mnie', labelKey: 'nav.about' },
  { id: 'doswiadczenie', labelKey: 'nav.experience' },
  { id: 'umiejetnosci', labelKey: 'nav.skills' },
  { id: 'projekty', labelKey: 'nav.projects' },
  { id: 'edukacja', labelKey: 'nav.education' },
  { id: 'kontakt', labelKey: 'nav.contact' },
];
