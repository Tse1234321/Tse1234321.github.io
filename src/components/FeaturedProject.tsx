import { featured } from '../data/featured'
import { Button } from './ui/Button'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './FeaturedProject.css'

// Resolve public/ assets against the Vite base so paths stay correct on
// GitHub Pages sub-paths as well as root domains.
const asset = (path: string) => import.meta.env.BASE_URL + path

// A small, quiet product-tour strip (3 shots only — not a full gallery).
const tour = [
  { src: 'screenshots/02-project-hub.jpg', caption: 'Project Hub', alt: 'NEXUS Project Hub' },
  { src: 'screenshots/04-system-monitor.jpg', caption: 'System Monitor', alt: 'NEXUS System Monitor' },
  { src: 'screenshots/03-clean-center.jpg', caption: 'Clean Center', alt: 'NEXUS Clean Center' },
]

export function FeaturedProject() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section className="section featured" id="featured" ref={ref}>
      <div className="container">
        <header className="featured__header reveal">
          <span className="eyebrow">Featured Project</span>
          <h2 className="featured__title">Windows Assistant / NEXUS</h2>
          <p className="featured__lead">{featured.tagline}</p>
        </header>

        {/* Hero product shot — the one prominent visual in this section. */}
        <figure className="featured__showcase reveal">
          <div className="featured__window">
            <div className="featured__window-bar">
              <i />
              <i />
              <i />
              <span className="featured__window-title">NEXUS · Dashboard</span>
            </div>
            <img
              className="featured__window-img"
              src={asset('screenshots/01-dashboard.jpg')}
              alt="NEXUS dashboard: system health cards, an activity globe, pinned projects, and per-core CPU temperatures"
              width={1600}
              height={880}
              loading="lazy"
              decoding="async"
            />
          </div>
        </figure>

        {/* Problem / Solution */}
        <div className="featured__ps">
          <article className="featured__ps-card reveal">
            <span className="featured__ps-label featured__ps-label--problem">Problem</span>
            <ul>
              {featured.problem.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
          <article className="featured__ps-card reveal reveal-delay-1">
            <span className="featured__ps-label featured__ps-label--solution">Solution</span>
            <ul>
              {featured.solution.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </article>
        </div>

        {/* Feature cards — exactly six */}
        <h3 className="featured__subhead reveal">Core features</h3>
        <div className="featured__features">
          {featured.features.map((f, i) => (
            <article
              key={f.title}
              className={`featured__feature reveal reveal-delay-${Math.min(i % 3, 2) + 1}`}
            >
              <h4>{f.title}</h4>
              <p>{f.body}</p>
            </article>
          ))}
        </div>

        {/* Quiet product tour */}
        <div className="featured__tour reveal">
          {tour.map((shot) => (
            <figure key={shot.src} className="featured__tour-shot">
              <img
                src={asset(shot.src)}
                alt={shot.alt}
                width={1600}
                height={880}
                loading="lazy"
                decoding="async"
              />
              <figcaption>{shot.caption}</figcaption>
            </figure>
          ))}
        </div>

        {/* Engineering highlights — exactly six */}
        <h3 className="featured__subhead reveal">Engineering highlights</h3>
        <div className="featured__highlights">
          {featured.highlights.map((h, i) => (
            <article
              key={h.title}
              className={`featured__highlight reveal reveal-delay-${(i % 2) + 1}`}
            >
              <span className="featured__highlight-index">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h4>{h.title}</h4>
                <p>{h.body}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Tech stack */}
        <h3 className="featured__subhead reveal">Tech stack</h3>
        <ul className="featured__stack reveal">
          {featured.stack.map((tech) => (
            <li key={tech} className="featured__stack-item">
              {tech}
            </li>
          ))}
        </ul>

        {/* CTA — one real action; GitHub and Demo are clearly-marked placeholders */}
        <div className="featured__cta reveal">
          <Button href="#case-study">
            View Case Study
            <ArrowIcon />
          </Button>
          <Button variant="secondary" disabled>
            GitHub — TODO
          </Button>
          <Button variant="secondary" disabled>
            Demo — Coming Soon
          </Button>
        </div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M8 3v10M4 9l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
