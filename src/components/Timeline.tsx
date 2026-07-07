import { timeline } from '../data/timeline'
import { SectionHeading } from './ui/SectionHeading'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Timeline.css'

export function Timeline() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section className="section" id="journey" ref={ref}>
      <div className="container">
        <SectionHeading
          eyebrow="05 · Journey"
          title="From fundamentals to shipped software"
        />

        <ol className="timeline">
          {timeline.map((entry, i) => (
            <li key={entry.title} className={`timeline__item reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="timeline__marker" aria-hidden="true">
                <span className="timeline__dot" />
              </div>
              <div className="timeline__body">
                <span className="timeline__period">{entry.period}</span>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
