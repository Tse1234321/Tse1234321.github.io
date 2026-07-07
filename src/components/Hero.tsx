import { site } from '../data/site'
import { featured } from '../data/featured'
import { Button } from './ui/Button'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="top">
      {/* One faint grid + one soft glow. Nothing that competes with the text. */}
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__kicker">
            <span className="hero__kicker-dot" />
            {site.role}
          </span>

          <h1 className="hero__name">{site.name}</h1>
          <p className="hero__subtitle">{site.heroSubtitle}</p>

          <div className="hero__ctas">
            <Button href="#featured">
              View Featured Project
              <ArrowIcon />
            </Button>
            <Button href="#projects" variant="secondary">
              Explore Projects
            </Button>
            <Button href="#contact" variant="ghost">
              Contact Me
            </Button>
          </div>
        </div>

        {/* The single protagonist teaser — points at Windows Assistant / NEXUS. */}
        <a className="hero__feature" href="#featured" aria-label="View featured project: Windows Assistant / NEXUS">
          <span className="hero__feature-eyebrow">Featured Project</span>
          <h2 className="hero__feature-name">
            Windows Assistant <span>/ NEXUS</span>
          </h2>
          <p className="hero__feature-desc">{featured.heroOneLiner}</p>
          <ul className="hero__feature-meta">
            <li>Local-first</li>
            <li>Electron + React</li>
            <li>Automation</li>
          </ul>
          <span className="hero__feature-link">
            View Featured Project
            <ArrowIcon />
          </span>
        </a>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
