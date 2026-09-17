// ============================================================
// CV DATA — typy + resolver (słownik PL/EN)
// Wszystkie teksty PL/EN: src/data/cv-texts.ts
// resolveCv(cvData, lang) zwraca treść w wybranym języku (CvContent).
// ============================================================

import type { Lang } from '../i18n/ui';

// ------------------------------------------------------------
// Typy
// ------------------------------------------------------------

/** Słownik tekstu w dwóch językach */
export interface L {
  pl: string;
  en: string;
}

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
// Typy danych (słowniki PL/EN) — treść w cv-texts.ts
// ------------------------------------------------------------

type Link = { label: string; url: string; kind: 'github' | 'linkedin' | 'mail' | 'phone' };

export interface LocalProfile {
  name: string;
  roles: string[];
  tagline: L;
  photo: string;
  location: string;
  email: string;
  phone: string;
  availability: L;
  summary: L[];
  links: Link[];
}

export interface LocalExperienceItem {
  company: L;
  role: string;
  period: L;
  location: L;
  description: L;
  highlights: L[];
  tech: string[];
}

export interface LocalSkillGroup {
  category: L;
  items: { name: L; level: number }[];
}

export interface LocalEducationItem {
  degree: L;
  school: L;
  period: L;
  note?: L;
}

export interface LocalCertification {
  name: L;
  issuer: string;
  year: string;
}

export interface LocalProject {
  title: string;
  description: L;
  highlights: L[];
  tech: string[];
  url: string;
  openSource?: boolean;
}

export interface LocalLanguage {
  name: L;
  level: L;
}

export interface LocalCvContent {
  profile: LocalProfile;
  experience: LocalExperienceItem[];
  skillGroups: LocalSkillGroup[];
  education: LocalEducationItem[];
  certifications: LocalCertification[];
  projects: LocalProject[];
  languages: LocalLanguage[];
}

// ------------------------------------------------------------
// Resolver — słownik → treść w jednym języku
// ------------------------------------------------------------

/** Rozwiązuje słowniki PL/EN do zwykłej treści w wybranym języku */
export function resolveCv(data: LocalCvContent, lang: Lang): CvContent {
  const p = (t: L) => t[lang];
  const pa = (ts: L[]) => ts.map(p);
  return {
    profile: {
      name: data.profile.name,
      roles: data.profile.roles,
      tagline: p(data.profile.tagline),
      photo: data.profile.photo,
      location: data.profile.location,
      email: data.profile.email,
      phone: data.profile.phone,
      availability: p(data.profile.availability),
      summary: pa(data.profile.summary),
      links: data.profile.links,
    },
    experience: data.experience.map((e) => ({
      company: p(e.company),
      role: e.role,
      period: p(e.period),
      location: p(e.location),
      description: p(e.description),
      highlights: pa(e.highlights),
      tech: e.tech,
    })),
    skillGroups: data.skillGroups.map((g) => ({
      category: p(g.category),
      items: g.items.map((i) => ({ name: p(i.name), level: i.level })),
    })),
    education: data.education.map((e) => ({
      degree: p(e.degree),
      school: p(e.school),
      period: p(e.period),
      note: e.note ? p(e.note) : undefined,
    })),
    certifications: data.certifications.map((c) => ({
      name: p(c.name),
      issuer: c.issuer,
      year: c.year,
    })),
    projects: data.projects.map((pr) => ({
      title: pr.title,
      description: p(pr.description),
      highlights: pa(pr.highlights),
      tech: pr.tech,
      url: pr.url,
      openSource: pr.openSource,
    })),
    languages: data.languages.map((l) => ({
      name: p(l.name),
      level: p(l.level),
    })),
  };
}
