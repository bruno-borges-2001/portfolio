export type HistoryType = string

export interface ExperienceType {
  company: string;
  role: string;
  backgroundImage: string;
  start: string;
  end: string;
  href: string;
}

export interface ProjectType {
  title: string;
  description: string[]
  bulletPoints: string[]
  links: { label: string; href: string }[]
  images: string[]
}

export interface SkillsType {
  title: string;
  skill: string[]
}

export interface ContactType {
  label: string;
  href: string;
  icon: string;
}