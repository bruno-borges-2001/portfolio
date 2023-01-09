import { SkillsType } from "../types"

interface SkillsSectionProps {
  skillsCategories?: SkillsType[]
}

export default function SkillsSection({ skillsCategories }: SkillsSectionProps) {
  return (
    <div>
      <h2>Skills I&apos;ve acquired so far</h2>
      <div className="skills-category">
        {skillsCategories?.map((category, i) => (
          <div key={`category ${i}`}>
            <h3>{category.title}</h3>
            <ul>
              {category.skill.map(
                (skill, j) => <li key={`skill ${j} of category ${i}`}>{skill}</li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}