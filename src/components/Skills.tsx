import { skillCategories } from '../data/skills'
import { SectionHeading } from './ui/SectionHeading'
import { Tag } from './ui/Tag'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Skills.css'

export function Skills() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section className="section" id="skills" ref={ref}>
      <div className="container">
        <SectionHeading
          eyebrow="04 · Skills"
          title="What I work with"
          lead="Grouped by how the skills actually get used — no progress bars, just the real toolbox."
        />

        <div className="skills__grid">
          {skillCategories.map((category, i) => (
            <article
              key={category.title}
              className={`skills__card reveal reveal-delay-${(i % 3) + 1}`}
            >
              <h3>{category.title}</h3>
              <p>{category.context}</p>
              <div className="skills__tags">
                {category.skills.map((skill) => (
                  <Tag key={skill} label={skill} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
