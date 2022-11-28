import { Dialog } from "@headlessui/react"
import ProjectDialog from "../components/ProjectDialog"
import { ProjectType } from "../types"

interface ProjectsSectionProps {
  projects?: ProjectType[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <div>
      <h2>Projects I worked on</h2>

      <div>
        {
          projects?.map((project, i) => (
            <ProjectDialog key={i} project={project} />
          ))
        }
      </div>
    </div>
  )
}