import { supportingProjects, type Project } from '../data/projects'
import { SectionHeading } from './ui/SectionHeading'
import { StatusBadge } from './ui/Badge'
import { Tag } from './ui/Tag'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Projects.css'

export function Projects() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <SectionHeading
          eyebrow="Supporting Work"
          title="Supporting Engineering Projects"
          lead="Smaller projects that back up the range behind the featured work — across software, digital logic, and EE coursework."
        />

        <div className="projects__grid">
          {supportingProjects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-card reveal reveal-delay-${(index % 2) + 1}`}>
      <div className="project-card__top">
        <h3 className="project-card__name">{project.name}</h3>
        <StatusBadge status={project.status} />
      </div>

      <p className="project-card__oneliner">{project.oneLiner}</p>

      <div className="project-card__tags">
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>

      {/* Placeholder — no repo/detail page yet. Rendered as static text, never a broken link. */}
      <span className="project-card__soon">Case study coming soon</span>
    </article>
  )
}
