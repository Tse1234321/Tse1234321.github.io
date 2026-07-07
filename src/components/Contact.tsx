import { site } from '../data/site'
import { Button } from './ui/Button'
import { GitHubIcon } from './Navbar'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Contact.css'

export function Contact() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section className="section" id="contact" ref={ref}>
      <div className="container">
        <div className="contact reveal">
          <span className="eyebrow">Contact</span>
          <h2 className="contact__title">Let's build something</h2>
          <p className="contact__lead">
            I'm open to internships, collaborations, and conversations about software, hardware,
            or anything in between. The fastest way to reach me is email — I read everything.
          </p>

          <div className="contact__cta">
            <Button href={`mailto:${site.email}`}>
              <MailIcon />
              Get in touch
            </Button>
          </div>

          <ul className="contact__channels">
            <li>
              <a
                className="contact__channel"
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                <span className="contact__channel-name">GitHub</span>
                <span className="contact__channel-value">@{site.githubHandle}</span>
              </a>
            </li>
            <li>
              <a className="contact__channel" href={`mailto:${site.email}`}>
                <MailIcon />
                <span className="contact__channel-name">Email</span>
                <span className="contact__channel-value">{site.email}</span>
              </a>
            </li>
            <li>
              {site.linkedin ? (
                <a
                  className="contact__channel"
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                  <span className="contact__channel-name">LinkedIn</span>
                  <span className="contact__channel-value">Connect</span>
                </a>
              ) : (
                <span className="contact__channel contact__channel--disabled">
                  <LinkedInIcon />
                  <span className="contact__channel-name">LinkedIn</span>
                  <span className="contact__channel-value">Coming soon</span>
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <rect x="1.5" y="3" width="13" height="10" rx="2" />
      <path d="m2 4.5 6 4.5 6-4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M13.5 1h-11A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 13.5 1ZM5.3 13H3.2V6.4h2.1V13ZM4.2 5.5a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4ZM13 13h-2.1V9.8c0-.8 0-1.8-1.1-1.8s-1.3.9-1.3 1.7V13H6.4V6.4h2v.9h.1c.3-.5 1-1.1 2-1.1 2.1 0 2.5 1.4 2.5 3.2V13Z" />
    </svg>
  )
}
