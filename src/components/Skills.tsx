import { skillCategories } from '../data/skills'
import { SectionHeading } from './ui/SectionHeading'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Skills.css'

export function Skills() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section className="section" id="skills" ref={ref}>
      <div className="container">
        <SectionHeading eyebrow="Skills" title="What supports the work" tone="quiet" />

        <div className="skills__grid">
          {skillCategories.map((category, i) => (
            <article key={category.title} className={`skills__card reveal reveal-delay-${(i % 2) + 1}`}>
              <h3>{category.title}</h3>
              <ul className="skills__list">
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
