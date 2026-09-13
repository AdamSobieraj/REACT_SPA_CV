// ============================================================
// Tłumaczenia UI — wszystkie teksty interfejsu (PL/EN)
// Treść CV (doświadczenie, umiejętności…) jest w data/cv.ts + data/cv-en.ts
// ============================================================

export type Lang = 'pl' | 'en';

export const ui = {
  // --- SEO ---
  'meta.title': {
    pl: 'Adam Sobieraj — AI Engineer & Senior Java Developer',
    en: 'Adam Sobieraj — AI Engineer & Senior Java Developer',
  },
  'meta.description': {
    pl: 'Portfolio Adama Sobieraja — AI Engineer i Senior Java Developer z Wrocławia. 6+ lat enterprise, LLM, RAG, agenty AI (MCP), Java 21, Python.',
    en: 'Adam Sobieraj’s portfolio — AI Engineer and Senior Java Developer based in Wrocław. 6+ years enterprise, LLM, RAG, AI agents (MCP), Java 21, Python.',
  },

  // --- Nawigacja ---
  'nav.about': { pl: 'O mnie', en: 'About' },
  'nav.experience': { pl: 'Doświadczenie', en: 'Experience' },
  'nav.skills': { pl: 'Umiejętności', en: 'Skills' },
  'nav.projects': { pl: 'Projekty', en: 'Projects' },
  'nav.education': { pl: 'Edukacja', en: 'Education' },
  'nav.contact': { pl: 'Kontakt', en: 'Contact' },
  'nav.contactCta': { pl: 'Skontaktuj się', en: 'Get in touch' },

  // --- Globalne ---
  'skip.toContent': { pl: 'Przejdź do treści', en: 'Skip to content' },
  'loading': { pl: 'Ładowanie…', en: 'Loading…' },
  'aria.light': { pl: 'Włącz jasny motyw', en: 'Switch to light mode' },
  'aria.dark': { pl: 'Włącz ciemny motyw', en: 'Switch to dark mode' },
  'aria.lang': { pl: 'Wybór języka', en: 'Language selection' },
  'aria.openMenu': { pl: 'Otwórz menu', en: 'Open menu' },
  'aria.closeMenu': { pl: 'Zamknij menu', en: 'Close menu' },

  // --- Hero ---
  'hero.contact': { pl: 'Skontaktuj się', en: 'Get in touch' },
  'hero.projects': { pl: 'Zobacz projekty', en: 'View projects' },
  'hero.available': { pl: 'Dostępny', en: 'Available' },
  'hero.stats.years': { pl: 'lat enterprise', en: 'years in enterprise' },
  'hero.stats.queries': { pl: 'zapytań AI / dzień', en: 'AI queries / day' },
  'hero.stats.uptime': { pl: 'uptime produkcji', en: 'production uptime' },
  'hero.stats.debt': { pl: 'dług techniczny', en: 'technical debt' },

  // --- O mnie ---
  'about.title': { pl: 'O mnie', en: 'About me' },
  'about.quick': { pl: 'Na skróty', en: 'At a glance' },
  'about.location': { pl: 'Lokalizacja', en: 'Location' },
  'about.availability': { pl: 'Dostępność', en: 'Availability' },
  'about.role': { pl: 'Rola docelowa', en: 'Target roles' },
  'about.roleValue': {
    pl: 'AI / ML / LLM Engineer, Senior Java Dev',
    en: 'AI / ML / LLM Engineer, Senior Java Dev',
  },
  'about.interests': { pl: 'Interesy', en: 'Interests' },
  'about.interestsValue': {
    pl: 'Badania AI/ML, optymalizacja LLM, architektura RAG',
    en: 'AI/ML research, LLM optimization, RAG architecture',
  },

  // --- Doświadczenie ---
  'exp.title': { pl: 'Doświadczenie zawodowe', en: 'Professional experience' },
  'exp.subtitle': {
    pl: 'Ponad 9 lat w bankowości, farmacji i automatyce przemysłowej — od mikroserwisów Java po produkcyjne systemy LLM. Kliknij pozycję, aby rozwinąć szczegóły.',
    en: '9+ years in banking, pharma and industrial automation — from Java microservices to production LLM systems. Click an entry to expand the details.',
  },
  'exp.more': { pl: '+ więcej szczegółów', en: '+ more details' },
  'exp.less': { pl: '− zwij', en: '− collapse' },

  // --- Umiejętności ---
  'skills.title': { pl: 'Umiejętności', en: 'Skills' },
  'skills.subtitle': {
    pl: 'Pogrupowane kompetencje z poziomem zaawansowania. Użyj filtrów, aby zawęzić listę.',
    en: 'Competencies grouped by area with proficiency levels. Use the filters to narrow the list.',
  },
  'skills.all': { pl: 'Wszystkie', en: 'All' },
  'skills.level.expert': { pl: 'zaawansowany', en: 'expert' },
  'skills.level.advanced': { pl: 'bardzo dobry', en: 'advanced' },
  'skills.level.good': { pl: 'dobry', en: 'proficient' },

  // --- Projekty ---
  'projects.title': { pl: 'Projekty', en: 'Projects' },
  'projects.subtitle': {
    pl: 'Wyróżnione systemy produkcyjne oraz projekty open-source — od architektury agentów MCP po benchmarki RAG.',
    en: 'Featured production systems and open-source projects — from MCP agent architecture to RAG benchmarking.',
  },
  'projects.openSource': { pl: 'open source', en: 'open source' },
  'projects.github': { pl: 'Zobacz na GitHub', en: 'View on GitHub' },

  // --- Edukacja ---
  'edu.title': { pl: 'Edukacja i certyfikaty', en: 'Education & certifications' },
  'edu.school': { pl: 'Wykształcenie', en: 'Education' },
  'edu.certs': { pl: 'Certyfikaty', en: 'Certifications' },
  'edu.languages': { pl: 'Języki', en: 'Languages' },

  // --- Kontakt ---
  'contact.title': { pl: 'Kontakt', en: 'Contact' },
  'contact.subtitle': {
    pl: 'Otwarty na nowe wyzwania: AI/ML, LLM, senior Java. Napisz — odpiszę w ciągu 24 h.',
    en: 'Open to new challenges: AI/ML, LLM, senior Java. Reach out — I reply within 24 h.',
  },
  'contact.name': { pl: 'Imię i nazwisko', en: 'Full name' },
  'contact.namePh': { pl: 'Jan Kowalski', en: 'John Smith' },
  'contact.email': { pl: 'E-mail', en: 'E-mail' },
  'contact.emailPh': { pl: 'jan@firma.pl', en: 'john@company.com' },
  'contact.message': { pl: 'Wiadomość', en: 'Message' },
  'contact.messagePh': {
    pl: 'Cześć Adam, interesuje mnie Twoja praca z...',
    en: 'Hi Adam, I’m interested in your work on…',
  },
  'contact.send': { pl: 'Wyślij wiadomość', en: 'Send message' },
  'contact.sent': {
    pl: '✓ Otwieram klienta mailowego — dokończ wysyłkę.',
    en: '✓ Opening your mail client — finish sending.',
  },
  'contact.note': {
    pl: 'Formularz otwiera Twojego klienta e-mail (mailto). Możesz też podpiąć EmailJS lub Formspree w',
    en: 'The form opens your mail client (mailto). You can also wire up EmailJS or Formspree in',
  },
  'contact.subject': { pl: '[Portfolio] Wiadomość od: ', en: '[Portfolio] Message from: ' },

  // --- Stopka ---
  'footer.built': {
    pl: 'zbudowano w React + TS + Tailwind',
    en: 'built with React + TS + Tailwind',
  },
} as const;

export type UIKey = keyof typeof ui;
