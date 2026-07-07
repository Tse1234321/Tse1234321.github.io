import { projects, type Project } from '../data/projects'
import { site } from '../data/site'
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
          eyebrow="03 · Projects"
          title="Selected work"
          lead="Tools I built to solve real friction — each one written up like a case study: what it is, why it exists, and what it taught me."
        />

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const hasRepo = project.repo !== null

  return (
    <article className={`project-card reveal reveal-delay-${(index % 3) + 1}`}>
      <div className="project-card__top">
        <StatusBadge status={project.status} />
        {project.note && <span className="project-card__note">{project.note}</span>}
      </div>

      <h3 className="project-card__name">{project.name}</h3>
      <p className="project-card__oneliner">{project.oneLiner}</p>

      <dl className="project-card__story">
        <div>
          <dt>What</dt>
          <dd>{project.what}</dd>
        </div>
        <div>
          <dt>Why</dt>
          <dd>{project.why}</dd>
        </div>
        <div>
          <dt>Learned</dt>
          <dd>{project.learned}</dd>
        </div>
      </dl>

      <div className="project-card__tags">
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>

      <div className="project-card__actions">
        {hasRepo ? (
          <a
            className="project-card__link"
            href={project.repo!}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repository
            <ExternalIcon />
          </a>
        ) : (
          <a
            className="project-card__link project-card__link--muted"
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
            <ExternalIcon />
          </a>
        )}
      </div>
    </article>
  )
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M6 3h7v7M13 3 7 9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 9v4H3V5h4" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  )
}
