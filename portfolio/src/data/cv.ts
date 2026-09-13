// ============================================================
// DANE CV — WERSJA POLSKA (jedno miejsce edycji treści PL)
// Angielska wersja: src/data/cv-en.ts (struktura 1:1)
// ============================================================

// ------------------------------------------------------------
// Typy
// ------------------------------------------------------------

export interface Profile {
  name: string;
  roles: string[];
  tagline: string;
  photo: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  summary: string[];
  links: { label: string; url: string; kind: 'github' | 'linkedin' | 'mail' | 'phone' }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface SkillGroup {
  category: string;
  items: { name: string; level: number }[];
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  note?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Project {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  url: string;
  openSource?: boolean;
}

export interface Language {
  name: string;
  level: string;
}

export interface CvContent {
  profile: Profile;
  experience: ExperienceItem[];
  skillGroups: SkillGroup[];
  education: EducationItem[];
  certifications: Certification[];
  projects: Project[];
  languages: Language[];
}

// ------------------------------------------------------------
// Treść (polska)
// ------------------------------------------------------------

export const cvPl: CvContent = {
  profile: {
    name: 'Adam Sobieraj',
    roles: ['AI Engineer', 'LLM / RAG / Agents (MCP)', 'Senior Java Developer', 'Python • Spring Boot'],
    // ← WYMIENIJ: wrzuć swoje zdjęcie do folderu public/ (np. public/photo.jpg)
    //   i zmień poniższą ścieżkę.
    photo: import.meta.env.BASE_URL + 'photo.jpg',
    tagline:
      'Projektuję i wdrażam produkcyjne systemy AI — RAG pipeline’y, inteligentne agenty i semantyczne wyszukiwanie — które mierzalnie skracają czas obsługi i obniżają koszty. Oparte na 9+ latach enterprise developmentu w Javie i 3+ latach w Pythonie.',
    location: 'Wrocław, Poland',
    email: 'adam.sobieraj@op.pl',
    phone: '+48 690 238 789',
    availability: 'Dostępny od zaraz / 4 tyg. okresu wypowiedzenia • Remote / relocation w EU',
    summary: [
      'AI Engineer i Senior Java Developer z ponad 9-letnim doświadczeniem w dużych projektach enterprise (bankowość, farmacja, automatyka przemysłowa) i 2+ lat praktycznej pracy z modelami LLM w produkcji.',
      'Specjalizuję się w projektowaniu RAG pipeline’ów, agentach AI opartych na MCP oraz systemach semantycznego wyszukiwania (Qdrant, embeddings) — z integracjami OpenAI GPT-4/o1 i Anthropic Claude.',
      'Łączę to z silnym backendem: Java 8/11/17/21, Spring Boot 3.x, Python, mikroserwisy, Kafka, AWS/Azure. Realne efekty: -40% długu technicznego, 50+ krytycznych bugów zamkniętych, -30% czasu deploymentu.',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/AdamSobieraj', kind: 'github' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/adam-sobieraj', kind: 'linkedin' },
      { label: 'E-mail', url: 'mailto:adam.sobieraj@op.pl', kind: 'mail' },
      { label: '+48 690 238 789', url: 'tel:+48690238789', kind: 'phone' },
    ],
  },

  experience: [
    {
      company: 'BNP Paribas',
      role: 'AI Engineer / Java Developer',
      period: '06.2024 — obecnie',
      location: 'Wrocław',
      description: 'Produkcyjne systemy AI dla bankowości: LLM, RAG i agenty w środowisku o wysokiej dostępności.',
      highlights: [
        'End-to-end RAG pipeline’y do przetwarzania dokumentów — +45% trafności wyszukiwania',
        'Inteligentni agenci LLM z tool usage i integracją MCP dla automatyzacji procesów bankowych',
        'Integracje GPT-4/o1 i Claude w produkcji: 10 000+ zapytań dziennie, 99.5% uptime',
        'Semantic search na Qdrant + embeddings: -60% czasu wyszukiwania, +35% relevance',
        'Multi-agent systemy orkestrujące złożone zadania — -50% czasu przetwarzania ręcznego',
        'Migracja legacy Java 11 → 21 (virtual threads): +40% wydajności, -40% długu technicznego',
        'Prompt optimization: -25% kosztów tokenów przy zachowaniu jakości',
      ],
      tech: ['Python 3.11+', 'Java 21', 'Spring Boot 3.x', 'LangChain', 'MCP', 'Qdrant', 'PostgreSQL', 'AWS', 'Kafka', 'Docker', 'K8s'],
    },
    {
      company: 'Roche (farmacja)',
      role: 'Java Developer',
      period: '07.2024 — 05.2025',
      location: 'Wrocław',
      description: 'Full-stack development dużego systemu farmaceutycznego ze szczególnym naciskiem na bezpieczeństwo i skalowalność.',
      highlights: [
        'Refaktoryzacja i optymalizacja wydajności aplikacji — +35% efektywności',
        'Backend Java 11/17 + Python z integracją AWS (Lambda, serverless): -25% kosztów infrastruktury',
        'Reactive programming (Spring WebFlux) dla scenariuszy wysokiej konkurencji',
        'Testy JUnit 5: 85% pokrycia kodu + analiza bezpieczeństwa (GDPR)',
        'AI-powered walidacja danych z wykorzystaniem modeli ML (Python)',
      ],
      tech: ['Java 11/17', 'Spring Boot', 'WebFlux', 'Python', 'React', 'PostgreSQL', 'DynamoDB', 'AWS'],
    },
    {
      company: 'Rockwell Automation',
      role: 'Java Developer',
      period: '12.2022 — 07.2024',
      location: 'Wrocław',
      description: 'Enterprise automatyka przemysłowa: mikroserwisy, DevOps i infrastruktura chmurowa.',
      highlights: [
        'Optymalizacja pipeline’ów CI/CD (Jenkins): -30% czasu builda',
        '20+ konteneryzowanych mikroserwisów (Docker/Kubernetes) przetwarzających dane przemysłowe w czasie rzeczywistym',
        'Optymalizacja zapytań PostgreSQL/Oracle: +40% wydajności odczytu',
        'Distributed tracing (OpenTelemetry) dla obserwowalności systemu',
        'Automatyzacja zadań infrastrukturalnych (Bash/Linux): ~15 h/tyg. oszczędności',
      ],
      tech: ['Java 8/11/17', 'Python', 'Vaadin', 'PostgreSQL', 'Oracle', 'Docker', 'K8s', 'Jenkins', 'OpenTelemetry'],
    },
    {
      company: 'EUVIC',
      role: 'Java Developer',
      period: '04.2022 — 11.2022',
      location: 'Polska',
      description: 'Full-stack development platformy edukacyjnej z infrastrukturą Azure.',
      highlights: [
        'Nowe rozwiązania modernizujące infrastrukturę: +50% skalowalności',
        'Aplikacje full-stack: Java 11/17, React, TypeScript',
        'Optymalizacja zapytań PostgreSQL dla 50K+ studentów',
        'Azure DevOps: automatyzacja testów i deploymentów',
      ],
      tech: ['Java 11/17', 'React', 'TypeScript', 'PostgreSQL', 'Azure', 'JUnit 5'],
    },
    {
      company: 'Capgemini Polska',
      role: 'Java Developer',
      period: '09.2021 — 03.2022',
      location: 'Polska',
      description: 'Mikroserwisy dla aplikacji bankowej — bezpieczeństwo i compliance (PCI-DSS).',
      highlights: [
        '15+ nowych mikroserwisów od podstaw — skalowalna, modularna architektura',
        'Optymalizacja MySQL dla 1M+ transakcji dziennie',
        'Circuit breakery (Resilience4j) dla odporności na błędy',
      ],
      tech: ['Java 8/11', 'React', 'MySQL', 'Docker', 'K8s', 'Resilience4j'],
    },
    {
      company: 'ELZAB',
      role: 'Java Developer',
      period: '05.2021 — 08.2021',
      location: 'Polska',
      description: 'Modernizacja systemów terminali płatniczych.',
      highlights: [
        'Modernizacja legacy: +30% niezawodności i szybkości transakcji',
        'Automatyzacja procesów deploymentu (Bash): -40% czasu wdrożeń',
        'Testy JUnit + oceny podatności (PCI-DSS)',
      ],
      tech: ['Java 8/11', 'PostgreSQL', 'JUnit', 'Bash', 'Linux'],
    },
    {
      company: 'TROL INTERMEDIA • QNT • Jcommerce • AKE-ROBOTICS',
      role: 'Java Developer / PLC Programmer',
      period: '05.2016 — 04.2021',
      location: 'Polska',
      description: 'Początki kariery: e-commerce (Java 8, PHP, JS, MS SQL), systemy bankowe (React, Oracle), dostępność WCAG 2.1 AAA oraz programowanie sterowników PLC (Siemens) dla motoryzacji.',
      highlights: [
        'Mikroserwisy e-commerce obsługujące 50K+ użytkowników miesięcznie',
        'Systemy bankowe: Java 8, React, Oracle SQL + Docker/K8s/Jenkins',
        'Automatyzacja przemysłowa: Siemens PLC/HMI (motoryzacja)',
      ],
      tech: ['Java 8', 'PHP', 'JavaScript', 'React', 'PLC/HMI'],
    },
  ],

  skillGroups: [
    {
      category: 'AI / ML / LLM',
      items: [
        { name: 'RAG pipelines & architektura', level: 95 },
        { name: 'LLM Agents + MCP', level: 90 },
        { name: 'OpenAI GPT-4 / o1, Claude', level: 95 },
        { name: 'LangChain / LlamaIndex / CrewAI', level: 85 },
        { name: 'Vector DB (Qdrant, Pinecone, Weaviate)', level: 90 },
        { name: 'Embeddings & semantic search', level: 90 },
        { name: 'Prompt Engineering', level: 90 },
      ],
    },
    {
      category: 'Języki',
      items: [
        { name: 'Python (AI/ML, backend, data)', level: 92 },
        { name: 'Java (8/11/17/21)', level: 90 },
        { name: 'JavaScript / TypeScript', level: 75 },
        { name: 'SQL', level: 85 },
      ],
    },
    {
      category: 'Backend & frameworki',
      items: [
        { name: 'Spring Boot 3.x / Cloud / Security', level: 90 },
        { name: 'FastAPI / Flask', level: 85 },
        { name: 'REST & mikroserwisy', level: 90 },
        { name: 'Apache Kafka (event-driven)', level: 80 },
        { name: 'Reactive (WebFlux)', level: 75 },
      ],
    },
    {
      category: 'Bazy danych',
      items: [
        { name: 'PostgreSQL (optymalizacja)', level: 88 },
        { name: 'MongoDB / DynamoDB', level: 80 },
        { name: 'Oracle / MySQL', level: 82 },
      ],
    },
    {
      category: 'Cloud & DevOps',
      items: [
        { name: 'AWS (Lambda, S3, SageMaker, Bedrock)', level: 85 },
        { name: 'Azure & Azure AI', level: 75 },
        { name: 'Docker & Kubernetes', level: 85 },
        { name: 'CI/CD (Jenkins, GitHub Actions)', level: 85 },
        { name: 'Terraform (IaC)', level: 70 },
      ],
    },
    {
      category: 'Testy & bezpieczeństwo',
      items: [
        { name: 'JUnit 5 / Mockito / Pytest', level: 88 },
        { name: 'OWASP Top 10, GDPR, PCI-DSS', level: 82 },
        { name: 'JWT, OAuth 2.0, SSL/TLS', level: 80 },
      ],
    },
  ],

  education: [
    {
      degree: "Master — Computer Science: AI i Machine Learning",
      school: 'WSB University, Wrocław',
      period: '2025 — obecnie',
      note: 'Deep Learning, NLP, aplikacje LLM',
    },
    {
      degree: 'Master — Project Management',
      school: 'Akademia Ekonomiczna, Katowice',
      period: '2012 — 2013',
      note: 'Praca dyplomowa: Agile w rozwoju oprogramowania',
    },
    {
      degree: 'Inżynier — Automatyka i Robotyka',
      school: 'Politechnika Śląska, Gliwice',
      period: '2007 — 2010',
      note: 'Automatyka przemysłowa, układy sterowania',
    },
  ],

  certifications: [
    { name: 'Cyber Security — Red Team', issuer: 'HackerU', year: '2023' },
    { name: 'Cyber Security — Blue Team', issuer: 'HackerU', year: '2023' },
    { name: 'Bootcamp PRO: Multithreading w Java', issuer: 'Codemy', year: '2022' },
    { name: 'Bootcamp PRO: Spring & Hibernate', issuer: 'Codemy', year: '2022' },
    { name: 'Java Developer Plus Bootcamp', issuer: 'Codemy', year: '2021' },
  ],

  projects: [
    {
      title: 'MCP Agent & RAG System',
      description: 'Produkcjowo gotowy system agenta AI implementujący Model Context Protocol (MCP) z zaawansowanymi możliwościami RAG.',
      highlights: [
        'Pełna integracja MCP: orkestracja agentów i dynamiczne użycie narzędzi',
        'RAG pipeline: chunking dokumentów, embeddings, semantic search na Qdrant',
        'Multi-agent architecture: dekompozycja i wykonywanie zadań',
        'Integracje OpenAI GPT-4 + Anthropic Claude, serwer FastAPI',
      ],
      tech: ['Python', 'LangChain', 'OpenAI', 'Claude', 'Qdrant', 'FastAPI', 'Docker'],
      url: 'https://github.com/AdamSobieraj/PYTHON-Agent-MCP',
      openSource: true,
    },
    {
      title: 'RAG Testing & Evaluation Platform',
      description: 'Platforma testująca i porównująca jakość systemów RAG — benchmarki, metryki, leaderboard.',
      highlights: [
        'Automatyzowany framework testowy do oceny pipeline’ów RAG',
        'Leaderboard: trafność odczytu, latency, relewancja',
        'A/B testy: modele embeddings, rozmiary chunków, strategie odzyskiwania',
        'Efekt: zmniejszenie halucynacji i +30–40% trafności odpowiedzi',
      ],
      tech: ['Python', 'Streamlit', 'Pandas', 'Matplotlib', 'LLM APIs'],
      url: 'https://github.com/AdamSobieraj/PYTHON-leaderboard',
      openSource: true,
    },
    {
      title: 'AI-Powered Banking System (BNP Paribas)',
      description: 'System oparty na LLM dla automatyzacji bankowej — RAG, agenci z MCP, semantic search w produkcji.',
      highlights: [
        'RAG pipeline: 10K+ dokumentów, +45% trafności',
        'Semantic search (Qdrant): -60% czasu zapytań',
        'REST API: 100K+ requestów/dzień, 99.5% uptime',
        '-40% czasu rozwiązywania ticketów supportu przez AI',
      ],
      tech: ['Python', 'Java 21', 'Spring Boot 3.x', 'Qdrant', 'PostgreSQL', 'AWS', 'Kafka'],
      url: '',
    },
  ],

  languages: [
    { name: 'Polski', level: 'język ojczysty' },
    { name: 'Angielski', level: 'B2/C1 — zawodowy' },
  ],
};
