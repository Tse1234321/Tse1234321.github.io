import { useEffect, useState } from 'react'
import { navLinks, site } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import './Navbar.css'

const sectionIds = navLinks.map((l) => l.href.slice(1))

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <nav className="nav__inner container" aria-label="Main">
        <a href="#top" className="nav__brand" onClick={() => setMenuOpen(false)}>
          <svg viewBox="0 0 64 64" aria-hidden="true" className="nav__logo">
            <path
              d="M14 20 L20 44 L27 28 L32 40 L37 28 L44 44 L50 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{site.name}</span>
        </a>

        <ul className="nav__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav__link${active === link.href.slice(1) ? ' nav__link--active' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="nav__github"
          aria-label="GitHub profile"
        >
          <GitHubIcon />
        </a>

        <button
          className={`nav__burger${menuOpen ? ' nav__burger--open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </nav>
      </header>

      {/* Rendered outside <header> on purpose: the header uses backdrop-filter,
          which would otherwise become the containing block for this fixed panel
          and collapse it. As a body-level sibling it fills the viewport. */}
      <div className={`nav__mobile${menuOpen ? ' nav__mobile--open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  )
}
