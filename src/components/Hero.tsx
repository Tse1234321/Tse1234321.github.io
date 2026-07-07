import { site } from '../data/site'
import { Button } from './ui/Button'
import { GitHubIcon } from './Navbar'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="top">
      {/* Decorative layers — pure CSS, no runtime cost */}
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__kicker">
            <span className="hero__kicker-dot" />
            {site.role} · Software &amp; Hardware
          </span>

          <h1 className="hero__name">{site.name}</h1>

          <p className="hero__tagline">{site.tagline}</p>
          <p className="hero__sub">{site.subTagline}</p>

          <div className="hero__ctas">
            <Button href="#projects">
              View Projects
              <ArrowIcon />
            </Button>
            <Button href={site.github} variant="secondary" external>
              <GitHubIcon />
              GitHub
            </Button>
            <Button href="#contact" variant="ghost">
              Contact Me
            </Button>
          </div>
        </div>

        {/* Floating cards — a quiet nod to NEXUS and the EE background */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__card hero__card--terminal">
            <div className="hero__card-bar">
              <i />
              <i />
              <i />
              <span>nexus — release</span>
            </div>
            <pre className="hero__code">
              <span className="c-dim">$</span> <span className="c-fn">npm</span> run dist
              {'\n'}
              <span className="c-dim">…</span>
              {'\n'}
              <span className="c-ok">✓</span> built installer <span className="c-str">v2.5.7</span>
              {'\n'}
              <span className="c-ok">✓</span> local-first · no cloud required
            </pre>
          </div>

          <div className="hero__card hero__card--node">
            <svg viewBox="0 0 200 96">
              <g stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7">
                <path d="M28 48 C 60 48, 60 24, 92 24" />
                <path d="M28 48 C 60 48, 60 72, 92 72" />
                <path d="M108 24 C 140 24, 140 48, 168 48" />
                <path d="M108 72 C 140 72, 140 48, 168 48" />
              </g>
              <g>
                <rect x="12" y="38" width="24" height="20" rx="5" className="node-box" />
                <rect x="88" y="14" width="24" height="20" rx="5" className="node-box" />
                <rect x="88" y="62" width="24" height="20" rx="5" className="node-box" />
                <circle cx="172" cy="48" r="11" className="node-out" />
              </g>
            </svg>
            <span className="hero__card-label">workflow.automate()</span>
          </div>

          <div className="hero__card hero__card--chip">
            <span className="hero__chip-label">FSM</span>
            <svg viewBox="0 0 120 40">
              <path
                d="M4 20 h14 v-12 h14 v24 h14 v-12 h14 v-12 h14 v24 h14 v-12 h14 v-6 h14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll-hint" aria-label="Scroll to about section">
        <span />
      </a>
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
