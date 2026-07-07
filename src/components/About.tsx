import { site } from '../data/site'
import { SectionHeading } from './ui/SectionHeading'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './About.css'

export function About() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <SectionHeading eyebrow="01 · About" title="Engineer in the making" />

        <div className="about__grid">
          <div className="about__text reveal reveal-delay-1">
            <p>
              I'm an electrical engineering student who spends most of my time at the intersection
              of software and hardware — writing C++, Python, and TypeScript one day, analyzing
              circuits and designing finite state machines in Verilog the next.
            </p>
            <p>
              What drives my work is a simple habit: when something in my workflow is slow,
              repetitive, or error-prone, I build a tool for it. That habit produced NEXUS, a
              local-first Windows desktop assistant built with Electron and React, along with
              teaching tools for electronics and generators for digital logic design.
            </p>
            <p>
              I'm still early in my career, and I treat that as an advantage — every project here
              was a chance to learn architecture, safety design, and shipping discipline the honest
              way: by building, breaking, and iterating.
            </p>
          </div>

          <aside className="about__facts reveal reveal-delay-2">
            <dl>
              <div className="about__fact">
                <dt>Focus</dt>
                <dd>Software × Hardware tooling</dd>
              </div>
              <div className="about__fact">
                <dt>Currently building</dt>
                <dd>NEXUS desktop assistant · v2.5.7</dd>
              </div>
              <div className="about__fact">
                <dt>Core stack</dt>
                <dd>TypeScript · React · Electron · C++ · Verilog</dd>
              </div>
              <div className="about__fact">
                <dt>Based in</dt>
                <dd>{site.location}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}
