// ============================================================
// CV DATA — ENGLISH VERSION (edit here for EN content)
// Polish version: src/data/cv.ts (same 1:1 structure)
// ============================================================

import type { CvContent } from './cv';

export const cvEn: CvContent = {
  profile: {
    name: 'Adam Sobieraj',
    roles: ['AI Engineer', 'LLM / RAG / Agents (MCP)', 'Senior Java Developer', 'Python • Spring Boot'],
    photo: import.meta.env.BASE_URL + 'photo.jpg',
    tagline:
      'I design and deploy production-grade AI systems — RAG pipelines, intelligent agents, and semantic search — that measurably reduce handling time and cut costs. I build on 9+ years of enterprise development in Java and 3+ years in Python.',
    location: 'Wrocław, Poland',
    email: 'adam.sobieraj@op.pl',
    phone: '+48 690 238 789',
    availability: 'Available immediately / 4-week notice • Remote / relocation within the EU',
    summary: [
      'AI Engineer and Senior Java Developer with 9+ years of experience in large-scale enterprise projects (banking, pharma, industrial automation) and a 2+ years of hands-on work with LLMs in production.',
      'Specialized in designing RAG pipelines, MCP-based AI agents and semantic search systems (Qdrant, embeddings) — with OpenAI GPT-4/o1 and Anthropic Claude integrations.',
      'Combined with a strong backend: Java 8/11/17/21, Spring Boot 3.x, Python, microservices, Kafka, AWS/Azure. Real impact: -40% technical debt, 50+ critical bugs closed, -30% deployment time.',
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
      period: '06.2024 — Present',
      location: 'Wrocław',
      description: 'Production AI systems for banking: LLM, RAG and agents in a high-availability environment.',
      highlights: [
        'End-to-end RAG pipelines for document processing — +45% retrieval accuracy',
        'LLM-based intelligent agents with tool usage and MCP integration for banking workflow automation',
        'GPT-4/o1 and Claude integrations in production: 10,000+ queries/day, 99.5% uptime',
        'Semantic search on Qdrant + embeddings: -60% search time, +35% relevance',
        'Multi-agent systems orchestrating complex tasks — -50% manual processing time',
        'Legacy Java 11 → 21 migration (virtual threads): +40% performance, -40% technical debt',
        'Prompt optimization: -25% token costs while maintaining output quality',
      ],
      tech: ['Python 3.11+', 'Java 21', 'Spring Boot 3.x', 'LangChain', 'MCP', 'Qdrant', 'PostgreSQL', 'AWS', 'Kafka', 'Docker', 'K8s'],
    },
    {
      company: 'Roche (Pharma)',
      role: 'Java Developer',
      period: '07.2024 — 05.2025',
      location: 'Wrocław',
      description: 'Full-stack development of a large pharmaceutical system with a strong focus on security and scalability.',
      highlights: [
        'Refactoring and performance optimization — +35% application efficiency',
        'Java 11/17 + Python backend with AWS integration (Lambda, serverless): -25% infrastructure costs',
        'Reactive programming (Spring WebFlux) for high-concurrency scenarios',
        'JUnit 5 tests: 85% code coverage + GDPR security analysis',
        'AI-powered data validation using ML models (Python)',
      ],
      tech: ['Java 11/17', 'Spring Boot', 'WebFlux', 'Python', 'React', 'PostgreSQL', 'DynamoDB', 'AWS'],
    },
    {
      company: 'Rockwell Automation',
      role: 'Java Developer',
      period: '12.2022 — 07.2024',
      location: 'Wrocław',
      description: 'Enterprise industrial automation: microservices, DevOps and cloud infrastructure.',
      highlights: [
        'CI/CD pipeline optimization (Jenkins): -30% build time',
        '20+ containerized microservices (Docker/Kubernetes) processing real-time industrial data',
        'PostgreSQL/Oracle query optimization: +40% read performance',
        'Distributed tracing (OpenTelemetry) for system observability',
        'Infrastructure task automation (Bash/Linux): ~15 h/week saved',
      ],
      tech: ['Java 8/11/17', 'Python', 'Vaadin', 'PostgreSQL', 'Oracle', 'Docker', 'K8s', 'Jenkins', 'OpenTelemetry'],
    },
    {
      company: 'EUVIC',
      role: 'Java Developer',
      period: '04.2022 — 11.2022',
      location: 'Poland',
      description: 'Full-stack development of an education platform on Azure infrastructure.',
      highlights: [
        'New solutions modernizing infrastructure: +50% scalability',
        'Full-stack apps: Java 11/17, React, TypeScript',
        'PostgreSQL query optimization for 50K+ students',
        'Azure DevOps: automated testing and deployments',
      ],
      tech: ['Java 11/17', 'React', 'TypeScript', 'PostgreSQL', 'Azure', 'JUnit 5'],
    },
    {
      company: 'Capgemini Polska',
      role: 'Java Developer',
      period: '09.2021 — 03.2022',
      location: 'Poland',
      description: 'Microservices for a banking application — security and compliance (PCI-DSS).',
      highlights: [
        '15+ new microservices from scratch — scalable, modular architecture',
        'MySQL optimization for 1M+ transactions per day',
        'Circuit breakers (Resilience4j) for fault tolerance',
      ],
      tech: ['Java 8/11', 'React', 'MySQL', 'Docker', 'K8s', 'Resilience4j'],
    },
    {
      company: 'ELZAB',
      role: 'Java Developer',
      period: '05.2021 — 08.2021',
      location: 'Poland',
      description: 'Modernization of payment terminal systems.',
      highlights: [
        'Legacy modernization: +30% reliability and transaction speed',
        'Deployment process automation (Bash): -40% deployment time',
        'JUnit tests + vulnerability assessments (PCI-DSS)',
      ],
      tech: ['Java 8/11', 'PostgreSQL', 'JUnit', 'Bash', 'Linux'],
    },
    {
      company: 'TROL INTERMEDIA • QNT • Jcommerce • AKE-ROBOTICS',
      role: 'Java Developer / PLC Programmer',
      period: '05.2016 — 04.2021',
      location: 'Poland',
      description: 'Early career: e-commerce (Java 8, PHP, JS, MS SQL), banking systems (React, Oracle), WCAG 2.1 AAA accessibility and Siemens PLC programming for the automotive industry.',
      highlights: [
        'E-commerce microservices serving 50K+ monthly users',
        'Banking systems: Java 8, React, Oracle SQL + Docker/K8s/Jenkins',
        'Industrial automation: Siemens PLC/HMI (automotive)',
      ],
      tech: ['Java 8', 'PHP', 'JavaScript', 'React', 'PLC/HMI'],
    },
  ],

  skillGroups: [
    {
      category: 'AI / ML / LLM',
      items: [
        { name: 'RAG pipelines & architecture', level: 95 },
        { name: 'LLM Agents + MCP', level: 90 },
        { name: 'OpenAI GPT-4 / o1, Claude', level: 95 },
        { name: 'LangChain / LlamaIndex / CrewAI', level: 85 },
        { name: 'Vector DB (Qdrant, Pinecone, Weaviate)', level: 90 },
        { name: 'Embeddings & semantic search', level: 90 },
        { name: 'Prompt Engineering', level: 90 },
      ],
    },
    {
      category: 'Languages',
      items: [
        { name: 'Python (AI/ML, backend, data)', level: 92 },
        { name: 'Java (8/11/17/21)', level: 90 },
        { name: 'JavaScript / TypeScript', level: 75 },
        { name: 'SQL', level: 85 },
      ],
    },
    {
      category: 'Backend & frameworks',
      items: [
        { name: 'Spring Boot 3.x / Cloud / Security', level: 90 },
        { name: 'FastAPI / Flask', level: 85 },
        { name: 'REST & microservices', level: 90 },
        { name: 'Apache Kafka (event-driven)', level: 80 },
        { name: 'Reactive (WebFlux)', level: 75 },
      ],
    },
    {
      category: 'Databases',
      items: [
        { name: 'PostgreSQL (optimization)', level: 88 },
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
      category: 'Testing & security',
      items: [
        { name: 'JUnit 5 / Mockito / Pytest', level: 88 },
        { name: 'OWASP Top 10, GDPR, PCI-DSS', level: 82 },
        { name: 'JWT, OAuth 2.0, SSL/TLS', level: 80 },
      ],
    },
  ],

  education: [
    {
      degree: 'Master’s Degree — Computer Science: AI & Machine Learning',
      school: 'WSB University, Wrocław',
      period: '2025 — Present',
      note: 'Deep Learning, NLP, LLM applications',
    },
    {
      degree: 'Master’s Degree — Project Management',
      school: 'University of Economics, Katowice',
      period: '2012 — 2013',
      note: 'Thesis: Agile methodologies in software development',
    },
    {
      degree: 'B.Eng. — Automatic Control and Robotics',
      school: 'Silesian University of Technology, Gliwice',
      period: '2007 — 2010',
      note: 'Industrial automation, control systems',
    },
  ],

  certifications: [
    { name: 'Cyber Security — Red Team', issuer: 'HackerU', year: '2023' },
    { name: 'Cyber Security — Blue Team', issuer: 'HackerU', year: '2023' },
    { name: 'Bootcamp PRO: Java Multithreading', issuer: 'Codemy', year: '2022' },
    { name: 'Bootcamp PRO: Spring & Hibernate', issuer: 'Codemy', year: '2022' },
    { name: 'Java Developer Plus Bootcamp', issuer: 'Codemy', year: '2021' },
  ],

  projects: [
    {
      title: 'MCP Agent & RAG System',
      description: 'Production-ready AI agent system implementing the Model Context Protocol (MCP) with advanced RAG capabilities.',
      highlights: [
        'Full MCP integration: agent orchestration and dynamic tool usage',
        'RAG pipeline: document chunking, embeddings, semantic search on Qdrant',
        'Multi-agent architecture: task decomposition and execution',
        'OpenAI GPT-4 + Anthropic Claude integrations, FastAPI server',
      ],
      tech: ['Python', 'LangChain', 'OpenAI', 'Claude', 'Qdrant', 'FastAPI', 'Docker'],
      url: 'https://github.com/AdamSobieraj/PYTHON-Agent-MCP',
      openSource: true,
    },
    {
      title: 'RAG Testing & Evaluation Platform',
      description: 'Platform for testing and benchmarking RAG systems — metrics, leaderboards, A/B comparisons.',
      highlights: [
        'Automated testing framework for RAG pipeline evaluation',
        'Leaderboard: retrieval accuracy, latency, relevance',
        'A/B testing: embedding models, chunk sizes, retrieval strategies',
        'Result: fewer hallucinations and +30–40% answer accuracy',
      ],
      tech: ['Python', 'Streamlit', 'Pandas', 'Matplotlib', 'LLM APIs'],
      url: 'https://github.com/AdamSobieraj/PYTHON-leaderboard',
      openSource: true,
    },
    {
      title: 'AI-Powered Banking System (BNP Paribas)',
      description: 'LLM-based system for banking automation — RAG, MCP agents, semantic search in production.',
      highlights: [
        'RAG pipeline: 10K+ documents, +45% accuracy',
        'Semantic search (Qdrant): -60% query time',
        'REST APIs: 100K+ requests/day, 99.5% uptime',
        '-40% support ticket resolution time via AI',
      ],
      tech: ['Python', 'Java 21', 'Spring Boot 3.x', 'Qdrant', 'PostgreSQL', 'AWS', 'Kafka'],
      url: '',
    },
  ],

  languages: [
    { name: 'Polish', level: 'native' },
    { name: 'English', level: 'B2/C1 — professional' },
  ],
};
