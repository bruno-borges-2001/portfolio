import ContactSection from "./Contact";
import ExperienceSection from "./Experience";
import GreetingSection from "./Greeting";
import HistorySection from "./History";
import ProjectsSection from "./Projects";
import SkillsSection from "./Skills";

const sections = {
  'greeting': <GreetingSection />,
  'history': <HistorySection />,
  'experience': <ExperienceSection />,
  'projects': <ProjectsSection />,
  'skills': <SkillsSection />,
  'contact': <ContactSection />
}

export default sections