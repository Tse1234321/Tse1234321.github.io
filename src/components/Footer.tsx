import { navLinks, site } from '../data/site'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="footer__name">{site.name}</span>
            <p>
              Electrical engineering student building practical software and hardware tools.
              Currently shipping NEXUS, a local-first Windows desktop assistant.
            </p>
          </div>

          <nav className="footer__col" aria-label="Site">
            <h4>Site</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h4>Elsewhere</h4>
            <ul>
              <li>
                <a href={site.github} target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>Email</a>
              </li>
              <li>
                <span className="footer__soon">LinkedIn — coming soon</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <span className="footer__built">
            Designed &amp; built by me — React + Vite + TypeScript
          </span>
        </div>
      </div>
    </footer>
  )
}
