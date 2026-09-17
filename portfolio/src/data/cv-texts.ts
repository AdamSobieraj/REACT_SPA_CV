// ============================================================
// TEKSTY CV — wszystkie teksty PL/EN w jednym miejscu
// Tekst o dwóch wersjach to słownik: { pl: '…', en: '…' }
// Typy i resolver: src/data/cv.ts
// ============================================================

import type { LocalCvContent } from './cv';

export const cvData: LocalCvContent = {
  profile: {
    name: 'Adam Sobieraj',
    roles: ['AI Engineer', 'LLM / RAG / Agents (MCP)', 'Senior Java Developer', 'Python • Spring Boot'],
    // ← WYMIENIJ: wrzuć swoje zdjęcie do folderu public/ (np. public/photo.jpg)
    //   i zmień poniższą ścieżkę.
    photo: import.meta.env.BASE_URL + 'photo.jpg',
    tagline: {
      pl: 'Projektuję i wdrażam produkcyjne systemy AI — RAG pipeline’y, inteligentne agenty i semantyczne wyszukiwanie — które mierzalnie skracają czas obsługi i obniżają koszty. Oparte na 9+ latach enterprise developmentu w Javie i 3+ latach w Pythonie.',
      en: 'I design and deploy production-grade AI systems — RAG pipelines, intelligent agents, and semantic search — that measurably reduce handling time and cut costs. I build on 9+ years of enterprise development in Java and 3+ years in Python.',
    },
    location: 'Wrocław, Poland',
    email: 'adam.sobieraj@op.pl',
    phone: '+48 690 238 789',
    availability: {
      pl: 'Dostępny od zaraz / 4 tyg. okresu wypowiedzenia • Remote / relocation w EU',
      en: 'Available immediately / 4-week notice • Remote / relocation within the EU',
    },
    summary: [
      {
        pl: 'AI Engineer i Senior Java Developer z ponad 9-letnim doświadczeniem w dużych projektach enterprise (bankowość, farmacja, automatyka przemysłowa) i 2+ lat praktycznej pracy z modelami LLM w produkcji.',
        en: 'AI Engineer and Senior Java Developer with 9+ years of experience in large-scale enterprise projects (banking, pharma, industrial automation) and a 2+ years of hands-on work with LLMs in production.',
      },
      {
        pl: 'Specjalizuję się w projektowaniu RAG pipeline’ów, agentach AI opartych na MCP oraz systemach semantycznego wyszukiwania (Qdrant, embeddings) — z integracjami OpenAI GPT-4/o1 i Anthropic Claude.',
        en: 'Specialized in designing RAG pipelines, MCP-based AI agents and semantic search systems (Qdrant, embeddings) — with OpenAI GPT-4/o1 and Anthropic Claude integrations.',
      },
      {
        pl: 'Łączę to z silnym backendem: Java 8/11/17/21, Spring Boot 3.x, Python, mikroserwisy, Kafka, AWS/Azure. Realne efekty: -40% długu technicznego, 50+ krytycznych bugów zamkniętych, -30% czasu deploymentu.',
        en: 'Combined with a strong backend: Java 8/11/17/21, Spring Boot 3.x, Python, microservices, Kafka, AWS/Azure. Real impact: -40% technical debt, 50+ critical bugs closed, -30% deployment time.',
      },
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
      company: { pl: 'BNP Paribas', en: 'BNP Paribas' },
      role: 'AI Engineer / Java Developer',
      period: { pl: '06.2024 — obecnie', en: '06.2024 — Present' },
      location: { pl: 'Wrocław', en: 'Wrocław' },
      description: {
        pl: 'Produkcyjne systemy AI dla bankowości: LLM, RAG i agenty w środowisku o wysokiej dostępności.',
        en: 'Production AI systems for banking: LLM, RAG and agents in a high-availability environment.',
      },
      highlights: [
        {
          pl: 'End-to-end RAG pipeline’y do przetwarzania dokumentów — +45% trafności wyszukiwania',
          en: 'End-to-end RAG pipelines for document processing — +45% retrieval accuracy',
        },
        {
          pl: 'Inteligentni agenci LLM z tool usage i integracją MCP dla automatyzacji procesów bankowych',
          en: 'LLM-based intelligent agents with tool usage and MCP integration for banking workflow automation',
        },
        {
          pl: 'Integracje GPT-4/o1 i Claude w produkcji: 10 000+ zapytań dziennie, 99.5% uptime',
          en: 'GPT-4/o1 and Claude integrations in production: 10,000+ queries/day, 99.5% uptime',
        },
        {
          pl: 'Semantic search na Qdrant + embeddings: -60% czasu wyszukiwania, +35% relevance',
          en: 'Semantic search on Qdrant + embeddings: -60% search time, +35% relevance',
        },
        {
          pl: 'Multi-agent systemy orkestrujące złożone zadania — -50% czasu przetwarzania ręcznego',
          en: 'Multi-agent systems orchestrating complex tasks — -50% manual processing time',
        },
        {
          pl: 'Migracja legacy Java 11 → 21 (virtual threads): +40% wydajności, -40% długu technicznego',
          en: 'Legacy Java 11 → 21 migration (virtual threads): +40% performance, -40% technical debt',
        },
        {
          pl: 'Prompt optimization: -25% kosztów tokenów przy zachowaniu jakości',
          en: 'Prompt optimization: -25% token costs while maintaining output quality',
        },
      ],
      tech: ['Python 3.11+', 'Java 21', 'Spring Boot 3.x', 'LangChain', 'MCP', 'Qdrant', 'PostgreSQL', 'AWS', 'Kafka', 'Docker', 'K8s'],
    },
    {
      company: { pl: 'Roche (farmacja)', en: 'Roche (Pharma)' },
      role: 'Java Developer',
      period: { pl: '07.2024 — 05.2025', en: '07.2024 — 05.2025' },
      location: { pl: 'Wrocław', en: 'Wrocław' },
      description: {
        pl: 'Full-stack development dużego systemu farmaceutycznego ze szczególnym naciskiem na bezpieczeństwo i skalowalność.',
        en: 'Full-stack development of a large pharmaceutical system with a strong focus on security and scalability.',
      },
      highlights: [
        {
          pl: 'Refaktoryzacja i optymalizacja wydajności aplikacji — +35% efektywności',
          en: 'Refactoring and performance optimization — +35% application efficiency',
        },
        {
          pl: 'Backend Java 11/17 + Python z integracją AWS (Lambda, serverless): -25% kosztów infrastruktury',
          en: 'Java 11/17 + Python backend with AWS integration (Lambda, serverless): -25% infrastructure costs',
        },
        {
          pl: 'Reactive programming (Spring WebFlux) dla scenariuszy wysokiej konkurencji',
          en: 'Reactive programming (Spring WebFlux) for high-concurrency scenarios',
        },
        {
          pl: 'Testy JUnit 5: 85% pokrycia kodu + analiza bezpieczeństwa (GDPR)',
          en: 'JUnit 5 tests: 85% code coverage + GDPR security analysis',
        },
        {
          pl: 'AI-powered walidacja danych z wykorzystaniem modeli ML (Python)',
          en: 'AI-powered data validation using ML models (Python)',
        },
      ],
      tech: ['Java 11/17', 'Spring Boot', 'WebFlux', 'Python', 'React', 'PostgreSQL', 'DynamoDB', 'AWS'],
    },
    {
      company: { pl: 'Rockwell Automation', en: 'Rockwell Automation' },
      role: 'Java Developer',
      period: { pl: '12.2022 — 07.2024', en: '12.2022 — 07.2024' },
      location: { pl: 'Wrocław', en: 'Wrocław' },
      description: {
        pl: 'Enterprise automatyka przemysłowa: mikroserwisy, DevOps i infrastruktura chmurowa.',
        en: 'Enterprise industrial automation: microservices, DevOps and cloud infrastructure.',
      },
      highlights: [
        {
          pl: 'Optymalizacja pipeline’ów CI/CD (Jenkins): -30% czasu builda',
          en: 'CI/CD pipeline optimization (Jenkins): -30% build time',
        },
        {
          pl: '20+ konteneryzowanych mikroserwisów (Docker/Kubernetes) przetwarzających dane przemysłowe w czasie rzeczywistym',
          en: '20+ containerized microservices (Docker/Kubernetes) processing real-time industrial data',
        },
        {
          pl: 'Optymalizacja zapytań PostgreSQL/Oracle: +40% wydajności odczytu',
          en: 'PostgreSQL/Oracle query optimization: +40% read performance',
        },
        {
          pl: 'Distributed tracing (OpenTelemetry) dla obserwowalności systemu',
          en: 'Distributed tracing (OpenTelemetry) for system observability',
        },
        {
          pl: 'Automatyzacja zadań infrastrukturalnych (Bash/Linux): ~15 h/tyg. oszczędności',
          en: 'Infrastructure task automation (Bash/Linux): ~15 h/week saved',
        },
      ],
      tech: ['Java 8/11/17', 'Python', 'Vaadin', 'PostgreSQL', 'Oracle', 'Docker', 'K8s', 'Jenkins', 'OpenTelemetry'],
    },
    {
      company: { pl: 'EUVIC', en: 'EUVIC' },
      role: 'Java Developer',
      period: { pl: '04.2022 — 11.2022', en: '04.2022 — 11.2022' },
      location: { pl: 'Polska', en: 'Poland' },
      description: {
        pl: 'Full-stack development platformy edukacyjnej z infrastrukturą Azure.',
        en: 'Full-stack development of an education platform on Azure infrastructure.',
      },
      highlights: [
        {
          pl: 'Nowe rozwiązania modernizujące infrastrukturę: +50% skalowalności',
          en: 'New solutions modernizing infrastructure: +50% scalability',
        },
        {
          pl: 'Aplikacje full-stack: Java 11/17, React, TypeScript',
          en: 'Full-stack apps: Java 11/17, React, TypeScript',
        },
        {
          pl: 'Optymalizacja zapytań PostgreSQL dla 50K+ studentów',
          en: 'PostgreSQL query optimization for 50K+ students',
        },
        {
          pl: 'Azure DevOps: automatyzacja testów i deploymentów',
          en: 'Azure DevOps: automated testing and deployments',
        },
      ],
      tech: ['Java 11/17', 'React', 'TypeScript', 'PostgreSQL', 'Azure', 'JUnit 5'],
    },
    {
      company: { pl: 'Capgemini Polska', en: 'Capgemini Polska' },
      role: 'Java Developer',
      period: { pl: '09.2021 — 03.2022', en: '09.2021 — 03.2022' },
      location: { pl: 'Polska', en: 'Poland' },
      description: {
        pl: 'Mikroserwisy dla aplikacji bankowej — bezpieczeństwo i compliance (PCI-DSS).',
        en: 'Microservices for a banking application — security and compliance (PCI-DSS).',
      },
      highlights: [
        {
          pl: '15+ nowych mikroserwisów od podstaw — skalowalna, modularna architektura',
          en: '15+ new microservices from scratch — scalable, modular architecture',
        },
        {
          pl: 'Optymalizacja MySQL dla 1M+ transakcji dziennie',
          en: 'MySQL optimization for 1M+ transactions per day',
        },
        {
          pl: 'Circuit breakery (Resilience4j) dla odporności na błędy',
          en: 'Circuit breakers (Resilience4j) for fault tolerance',
        },
      ],
      tech: ['Java 8/11', 'React', 'MySQL', 'Docker', 'K8s', 'Resilience4j'],
    },
    {
      company: { pl: 'ELZAB', en: 'ELZAB' },
      role: 'Java Developer',
      period: { pl: '05.2021 — 08.2021', en: '05.2021 — 08.2021' },
      location: { pl: 'Polska', en: 'Poland' },
      description: {
        pl: 'Modernizacja systemów terminali płatniczych.',
        en: 'Modernization of payment terminal systems.',
      },
      highlights: [
        {
          pl: 'Modernizacja legacy: +30% niezawodności i szybkości transakcji',
          en: 'Legacy modernization: +30% reliability and transaction speed',
        },
        {
          pl: 'Automatyzacja procesów deploymentu (Bash): -40% czasu wdrożeń',
          en: 'Deployment process automation (Bash): -40% deployment time',
        },
        {
          pl: 'Testy JUnit + oceny podatności (PCI-DSS)',
          en: 'JUnit tests + vulnerability assessments (PCI-DSS)',
        },
      ],
      tech: ['Java 8/11', 'PostgreSQL', 'JUnit', 'Bash', 'Linux'],
    },
    {
      company: { pl: 'TROL INTERMEDIA • QNT • Jcommerce • AKE-ROBOTICS', en: 'TROL INTERMEDIA • QNT • Jcommerce • AKE-ROBOTICS' },
      role: 'Java Developer / PLC Programmer',
      period: { pl: '05.2016 — 04.2021', en: '05.2016 — 04.2021' },
      location: { pl: 'Polska', en: 'Poland' },
      description: {
        pl: 'Początki kariery: e-commerce (Java 8, PHP, JS, MS SQL), systemy bankowe (React, Oracle), dostępność WCAG 2.1 AAA oraz programowanie sterowników PLC (Siemens) dla motoryzacji.',
        en: 'Early career: e-commerce (Java 8, PHP, JS, MS SQL), banking systems (React, Oracle), WCAG 2.1 AAA accessibility and Siemens PLC programming for the automotive industry.',
      },
      highlights: [
        {
          pl: 'Mikroserwisy e-commerce obsługujące 50K+ użytkowników miesięcznie',
          en: 'E-commerce microservices serving 50K+ monthly users',
        },
        {
          pl: 'Systemy bankowe: Java 8, React, Oracle SQL + Docker/K8s/Jenkins',
          en: 'Banking systems: Java 8, React, Oracle SQL + Docker/K8s/Jenkins',
        },
        {
          pl: 'Automatyzacja przemysłowa: Siemens PLC/HMI (motoryzacja)',
          en: 'Industrial automation: Siemens PLC/HMI (automotive)',
        },
      ],
      tech: ['Java 8', 'PHP', 'JavaScript', 'React', 'PLC/HMI'],
    },
  ],

  skillGroups: [
    {
      category: { pl: 'AI / ML / LLM', en: 'AI / ML / LLM' },
      items: [
        { name: { pl: 'RAG pipelines & architektura', en: 'RAG pipelines & architecture' }, level: 95 },
        { name: { pl: 'LLM Agents + MCP', en: 'LLM Agents + MCP' }, level: 90 },
        { name: { pl: 'OpenAI GPT-4 / o1, Claude', en: 'OpenAI GPT-4 / o1, Claude' }, level: 95 },
        { name: { pl: 'LangChain / LlamaIndex / CrewAI', en: 'LangChain / LlamaIndex / CrewAI' }, level: 85 },
        { name: { pl: 'Vector DB (Qdrant, Pinecone, Weaviate)', en: 'Vector DB (Qdrant, Pinecone, Weaviate)' }, level: 90 },
        { name: { pl: 'Embeddings & semantic search', en: 'Embeddings & semantic search' }, level: 90 },
        { name: { pl: 'Prompt Engineering', en: 'Prompt Engineering' }, level: 90 },
      ],
    },
    {
      category: { pl: 'Języki', en: 'Languages' },
      items: [
        { name: { pl: 'Python (AI/ML, backend, data)', en: 'Python (AI/ML, backend, data)' }, level: 92 },
        { name: { pl: 'Java (8/11/17/21)', en: 'Java (8/11/17/21)' }, level: 90 },
        { name: { pl: 'JavaScript / TypeScript', en: 'JavaScript / TypeScript' }, level: 75 },
        { name: { pl: 'SQL', en: 'SQL' }, level: 85 },
      ],
    },
    {
      category: { pl: 'Backend & frameworki', en: 'Backend & frameworks' },
      items: [
        { name: { pl: 'Spring Boot 3.x / Cloud / Security', en: 'Spring Boot 3.x / Cloud / Security' }, level: 90 },
        { name: { pl: 'FastAPI / Flask', en: 'FastAPI / Flask' }, level: 85 },
        { name: { pl: 'REST & mikroserwisy', en: 'REST & microservices' }, level: 90 },
        { name: { pl: 'Apache Kafka (event-driven)', en: 'Apache Kafka (event-driven)' }, level: 80 },
        { name: { pl: 'Reactive (WebFlux)', en: 'Reactive (WebFlux)' }, level: 75 },
      ],
    },
    {
      category: { pl: 'Bazy danych', en: 'Databases' },
      items: [
        { name: { pl: 'PostgreSQL (optymalizacja)', en: 'PostgreSQL (optimization)' }, level: 88 },
        { name: { pl: 'MongoDB / DynamoDB', en: 'MongoDB / DynamoDB' }, level: 80 },
        { name: { pl: 'Oracle / MySQL', en: 'Oracle / MySQL' }, level: 82 },
      ],
    },
    {
      category: { pl: 'Cloud & DevOps', en: 'Cloud & DevOps' },
      items: [
        { name: { pl: 'AWS (Lambda, S3, SageMaker, Bedrock)', en: 'AWS (Lambda, S3, SageMaker, Bedrock)' }, level: 85 },
        { name: { pl: 'Azure & Azure AI', en: 'Azure & Azure AI' }, level: 75 },
        { name: { pl: 'Docker & Kubernetes', en: 'Docker & Kubernetes' }, level: 85 },
        { name: { pl: 'CI/CD (Jenkins, GitHub Actions)', en: 'CI/CD (Jenkins, GitHub Actions)' }, level: 85 },
        { name: { pl: 'Terraform (IaC)', en: 'Terraform (IaC)' }, level: 70 },
      ],
    },
    {
      category: { pl: 'Testy & bezpieczeństwo', en: 'Testing & security' },
      items: [
        { name: { pl: 'JUnit 5 / Mockito / Pytest', en: 'JUnit 5 / Mockito / Pytest' }, level: 88 },
        { name: { pl: 'OWASP Top 10, GDPR, PCI-DSS', en: 'OWASP Top 10, GDPR, PCI-DSS' }, level: 82 },
        { name: { pl: 'JWT, OAuth 2.0, SSL/TLS', en: 'JWT, OAuth 2.0, SSL/TLS' }, level: 80 },
      ],
    },
  ],

  education: [
    {
      degree: {
        pl: 'Master — Computer Science: AI i Machine Learning',
        en: 'Master’s Degree — Computer Science: AI & Machine Learning',
      },
      school: { pl: 'WSB University, Wrocław', en: 'WSB University, Wrocław' },
      period: { pl: '2025 — obecnie', en: '2025 — Present' },
      note: { pl: 'Deep Learning, NLP, aplikacje LLM', en: 'Deep Learning, NLP, LLM applications' },
    },
    {
      degree: { pl: 'Master — Project Management', en: 'Master’s Degree — Project Management' },
      school: { pl: 'Akademia Ekonomiczna, Katowice', en: 'University of Economics, Katowice' },
      period: { pl: '2012 — 2013', en: '2012 — 2013' },
      note: { pl: 'Praca dyplomowa: Agile w rozwoju oprogramowania', en: 'Thesis: Agile methodologies in software development' },
    },
    {
      degree: { pl: 'Inżynier — Automatyka i Robotyka', en: 'B.Eng. — Automatic Control and Robotics' },
      school: { pl: 'Politechnika Śląska, Gliwice', en: 'Silesian University of Technology, Gliwice' },
      period: { pl: '2007 — 2010', en: '2007 — 2010' },
      note: { pl: 'Automatyka przemysłowa, układy sterowania', en: 'Industrial automation, control systems' },
    },
  ],

  certifications: [
    { name: { pl: 'Cyber Security — Red Team', en: 'Cyber Security — Red Team' }, issuer: 'HackerU', year: '2023' },
    { name: { pl: 'Cyber Security — Blue Team', en: 'Cyber Security — Blue Team' }, issuer: 'HackerU', year: '2023' },
    { name: { pl: 'Bootcamp PRO: Multithreading w Java', en: 'Bootcamp PRO: Java Multithreading' }, issuer: 'Codemy', year: '2022' },
    { name: { pl: 'Bootcamp PRO: Spring & Hibernate', en: 'Bootcamp PRO: Spring & Hibernate' }, issuer: 'Codemy', year: '2022' },
    { name: { pl: 'Java Developer Plus Bootcamp', en: 'Java Developer Plus Bootcamp' }, issuer: 'Codemy', year: '2021' },
  ],

  projects: [
    {
      title: 'MCP Agent & RAG System',
      description: {
        pl: 'Produkcjowo gotowy system agenta AI implementujący Model Context Protocol (MCP) z zaawansowanymi możliwościami RAG.',
        en: 'Production-ready AI agent system implementing the Model Context Protocol (MCP) with advanced RAG capabilities.',
      },
      highlights: [
        {
          pl: 'Pełna integracja MCP: orkestracja agentów i dynamiczne użycie narzędzi',
          en: 'Full MCP integration: agent orchestration and dynamic tool usage',
        },
        {
          pl: 'RAG pipeline: chunking dokumentów, embeddings, semantic search na Qdrant',
          en: 'RAG pipeline: document chunking, embeddings, semantic search on Qdrant',
        },
        {
          pl: 'Multi-agent architecture: dekompozycja i wykonywanie zadań',
          en: 'Multi-agent architecture: task decomposition and execution',
        },
        {
          pl: 'Integracje OpenAI GPT-4 + Anthropic Claude, serwer FastAPI',
          en: 'OpenAI GPT-4 + Anthropic Claude integrations, FastAPI server',
        },
      ],
      tech: ['Python', 'LangChain', 'OpenAI', 'Claude', 'Qdrant', 'FastAPI', 'Docker'],
      url: 'https://github.com/AdamSobieraj/PYTHON-Agent-MCP',
      openSource: true,
    },
    {
      title: 'RAG Testing & Evaluation Platform',
      description: {
        pl: 'Platforma testująca i porównująca jakość systemów RAG — benchmarki, metryki, leaderboard.',
        en: 'Platform for testing and benchmarking RAG systems — metrics, leaderboards, A/B comparisons.',
      },
      highlights: [
        {
          pl: 'Automatyzowany framework testowy do oceny pipeline’ów RAG',
          en: 'Automated testing framework for RAG pipeline evaluation',
        },
        {
          pl: 'Leaderboard: trafność odczytu, latency, relewancja',
          en: 'Leaderboard: retrieval accuracy, latency, relevance',
        },
        {
          pl: 'A/B testy: modele embeddings, rozmiary chunków, strategie odzyskiwania',
          en: 'A/B testing: embedding models, chunk sizes, retrieval strategies',
        },
        {
          pl: 'Efekt: zmniejszenie halucynacji i +30–40% trafności odpowiedzi',
          en: 'Result: fewer hallucinations and +30–40% answer accuracy',
        },
      ],
      tech: ['Python', 'Streamlit', 'Pandas', 'Matplotlib', 'LLM APIs'],
      url: 'https://github.com/AdamSobieraj/PYTHON-leaderboard',
      openSource: true,
    },
    {
      title: 'AI-Powered Banking System (BNP Paribas)',
      description: {
        pl: 'System oparty na LLM dla automatyzacji bankowej — RAG, agenci z MCP, semantic search w produkcji.',
        en: 'LLM-based system for banking automation — RAG, MCP agents, semantic search in production.',
      },
      highlights: [
        { pl: 'RAG pipeline: 10K+ dokumentów, +45% trafności', en: 'RAG pipeline: 10K+ documents, +45% accuracy' },
        { pl: 'Semantic search (Qdrant): -60% czasu zapytań', en: 'Semantic search (Qdrant): -60% query time' },
        { pl: 'REST API: 100K+ requestów/dzień, 99.5% uptime', en: 'REST APIs: 100K+ requests/day, 99.5% uptime' },
        { pl: '-40% czasu rozwiązywania ticketów supportu przez AI', en: '-40% support ticket resolution time via AI' },
      ],
      tech: ['Python', 'Java 21', 'Spring Boot 3.x', 'Qdrant', 'PostgreSQL', 'AWS', 'Kafka'],
      url: '',
    },
  ],

  languages: [
    { name: { pl: 'Polski', en: 'Polish' }, level: { pl: 'język ojczysty', en: 'native' } },
    { name: { pl: 'Angielski', en: 'English' }, level: { pl: 'B2/C1 — zawodowy', en: 'B2/C1 — professional' } },
  ],
};
