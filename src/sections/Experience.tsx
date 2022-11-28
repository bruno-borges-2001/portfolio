import CompanyButton from "../components/CompanyButton";
import { ExperienceType } from "../types";

interface ExperienceSectionProps {
  experience?: ExperienceType[]
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <div>
      <h2>My journey</h2>
      <div>
        <base target='_blank' />

        {experience?.map((job, i) => <CompanyButton
          key={`job ${i}`}
          role={job.role}
          company={job.company}
          link={job.href}
          start={job.start}
          end={job.end}
          backgroundImage={job.backgroundImage}
        />)}
      </div>
    </div>
  )
}