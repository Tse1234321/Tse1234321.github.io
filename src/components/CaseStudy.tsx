import { featured } from '../data/featured'
import { SectionHeading } from './ui/SectionHeading'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './CaseStudy.css'

export function CaseStudy() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section className="section case-study" id="case-study" ref={ref}>
      <div className="container">
        <SectionHeading
          eyebrow="Case Study"
          title="Building a Local-first Windows Assistant"
        />

        <ol className="case-study__blocks">
          {featured.caseStudy.map((block, i) => (
            <li key={block.label} className={`case-study__block reveal reveal-delay-${(i % 3) + 1}`}>
              <span className="case-study__index">{String(i + 1).padStart(2, '0')}</span>
              <div className="case-study__body">
                <h3>{block.label}</h3>
                <p>{block.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
