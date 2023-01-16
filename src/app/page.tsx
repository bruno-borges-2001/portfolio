import Section from "../components/Section";
import { ContactType, ExperienceType } from "../types";
import query from "../utils/query";
import client from "../utils/sanity";

interface SkillType {
  title: string;
  skill: { [index: number]: string }
}

interface ProjectType {
  title: string;
  description: { [index: number]: string }
  bulletPoints: { [index: number]: string }
  links: { [index: number]: { label: string; href: string } }
  images: { [index: number]: string }
}

interface ResponseType {
  personalInfo: { [index: number]: string };
  contacts: { [index: number]: ContactType };
  experiences: { [index: number]: ExperienceType }
  history: { [index: number]: string };
  projects: { [index: number]: ProjectType };
  skills: { [index: number]: SkillType }
}

async function loadData() {
  const response = await client.fetch<ResponseType>(query);

  const data = {
    personalInfo: response.personalInfo,
    contacts: Object.values(response.contacts),
    experience: Object.values(response.experiences),
    history: Object.values(response.history),
    projects: Object.values(response.projects).map(el => ({ ...el, description: Object.values(el.description), bulletPoints: el.bulletPoints ? Object.values(el.bulletPoints) : null, links: Object.values(el.links), images: Object.values(el.images) })),
    skillsCategories: Object.values(response.skills).map(el => ({ ...el, skill: Object.values(el.skill) })),
  }

  return data
}

export default async function Home() {
  const { personalInfo, history, experience, projects, skillsCategories, contacts } = await loadData();

  return (
    <>
      <Section type="greeting" params={{ personalInfo }} />
      <Section type="history" params={{ history }} />
      <Section type="projects" params={{ projects }} />
      <Section type="experience" params={{ experience }} />
      <Section type="skills" params={{ skillsCategories }} />
      <Section type="contact" params={{ contacts }} />
    </>
  )
}
