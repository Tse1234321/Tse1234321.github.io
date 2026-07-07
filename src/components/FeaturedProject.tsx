import { site } from '../data/site'
import { Button } from './ui/Button'
import { GitHubIcon } from './Navbar'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './FeaturedProject.css'

const REPO_URL = 'https://github.com/Tse1234321/windows-assistant'

// Resolve public/ assets against the Vite base so paths stay correct on
// GitHub Pages sub-paths as well as root domains.
const asset = (path: string) => import.meta.env.BASE_URL + path

const gallery = [
  {
    src: 'screenshots/02-project-hub.jpg',
    caption: 'Project Hub — scans drives, detects Git repos, and launches full Work Modes in one click.',
    alt: 'NEXUS Project Hub listing detected projects with Git status and quick actions',
  },
  {
    src: 'screenshots/04-system-monitor.jpg',
    caption: 'System Monitor — live CPU, RAM, disk, and per-core temperature readouts.',
    alt: 'NEXUS System Monitor showing real-time CPU, memory, and temperature graphs',
  },
  {
    src: 'screenshots/03-clean-center.jpg',
    caption: 'Clean Center — conservative cleanup that previews every change before it runs.',
    alt: 'NEXUS Clean Center previewing files selected for cleanup',
  },
  {
    src: 'screenshots/05-workspace-templates.jpg',
    caption: 'Workspace Templates — one-click generators for Web, Python, C/C++, FPGA and more.',
    alt: 'NEXUS Workspace Templates gallery of project starters',
  },
  {
    src: 'screenshots/09-embedded-lab.jpg',
    caption: 'Embedded Lab — compile and flash Arduino, Verilog, and VHDL from inside the app.',
    alt: 'NEXUS Embedded Lab compiling and flashing an embedded project',
  },
  {
    src: 'screenshots/08-ee-tools.jpg',
    caption: 'EE Quick Tools — calculators and helpers for everyday electrical engineering.',
    alt: 'NEXUS electrical engineering quick tools panel',
  },
]

const features = [
  {
    icon: '⚡',
    title: 'Workflow Automation',
    body: 'A node-based workflow editor with dry-run previews — chain file operations, launches, and cleanups without writing scripts.',
  },
  {
    icon: '🔒',
    title: 'Local-first by Design',
    body: 'Everything runs and stays on your machine. Settings live in local JSON — no cloud account, no telemetry, no lock-in.',
  },
  {
    icon: '🗂️',
    title: 'Project Hub',
    body: 'Scans your drives for projects, detects Git repos, and launches complete "Work Modes" — folders, tools, and context in one click.',
  },
  {
    icon: '📊',
    title: 'System Monitor',
    body: 'Real-time CPU, RAM, disk, and temperature tracking on a dashboard built around an interactive Three.js globe.',
  },
  {
    icon: '🧹',
    title: 'Clean Center',
    body: 'Conservative file cleanup with preview-before-action: every change is shown first, duplicates are renamed, never overwritten.',
  },
  {
    icon: '🔬',
    title: 'Embedded Lab',
    body: 'Compile and flash Arduino, Verilog, and VHDL projects from inside the app — the EE toolbox meets the desktop.',
  },
  {
    icon: '🧩',
    title: 'Workspace Templates',
    body: 'One-click project generators for Web, Python, C/C++, Java, Go, Rust, Arduino, and FPGA workflows.',
  },
]

const stack = [
  'Electron 42',
  'React 18',
  'Vite 6',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Three.js',
  'electron-builder',
  'Vitest',
]

const highlights = [
  {
    title: 'Process architecture',
    body: 'Clean separation between the Electron main process (window management, IPC, system services) and the React renderer — each side owns its concerns.',
  },
  {
    title: 'Review-first safety model',
    body: 'Destructive actions require confirmation, file changes are previewed before execution, Git integration is strictly read-only, and duplicate filenames are auto-numbered instead of overwritten.',
  },
  {
    title: 'Modular feature system',
    body: 'Dashboard, Project Hub, Clean Center, Embedded Lab, and Automation are independent modules behind a shared shell — features ship without touching each other.',
  },
  {
    title: 'Workflow scheduling engine',
    body: 'The automation editor represents workflows as node graphs, validates them, and supports dry-run execution before anything touches the filesystem.',
  },
  {
    title: 'UI state management',
    body: 'Renderer state is organized per module with local JSON persistence — the app restores your full working context between sessions.',
  },
  {
    title: 'Shipping discipline',
    body: 'Iterated through the 2.x release line to v2.5.7 with NSIS installers via electron-builder, plus ESLint, Prettier, and Vitest keeping the codebase honest.',
  },
]

export function FeaturedProject() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section className="section featured" id="featured" ref={ref}>
      <div className="container">
        <header className="featured__header reveal">
          <span className="eyebrow">02 · Featured Project</span>
          <div className="featured__title-row">
            <h2 className="featured__title">
              NEXUS
              <span className="featured__version">v2.5.7</span>
            </h2>
            <span className="featured__subtitle">Windows Desktop Assistant · published as PC Life Assistant</span>
          </div>
          <p className="featured__lead">
            A local-first Windows desktop assistant that unifies project launching, file
            organization, system monitoring, and workflow automation — one calm home base for
            students, engineers, and makers.
          </p>
        </header>

        {/* Hero product shot in a window frame */}
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
              alt="NEXUS dashboard: system health cards, an interactive 3D activity globe, pinned projects, and per-core CPU temperatures"
              width={1600}
              height={880}
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption>
            The dashboard — real-time system health, an interactive activity globe, and pinned
            projects at a glance.
          </figcaption>
        </figure>

        {/* Problem / Solution */}
        <div className="featured__ps">
          <div className="featured__ps-card reveal reveal-delay-1">
            <span className="featured__ps-label featured__ps-label--problem">Problem</span>
            <p>
              A typical engineering workday is scattered across file explorers, terminals, cleanup
              utilities, and monitoring tools. Switching between them burns time, and ad-hoc file
              cleanup is where important work gets deleted by accident. Existing all-in-one tools
              either demand a cloud account or try to replace your IDE.
            </p>
          </div>
          <div className="featured__ps-card reveal reveal-delay-2">
            <span className="featured__ps-label featured__ps-label--solution">Solution</span>
            <p>
              NEXUS consolidates those workflows into a single desktop app that deliberately stays
              in its lane: it launches, organizes, monitors, and automates — it doesn't duplicate
              your task manager or your editor. Every destructive action is previewed first, and
              everything runs locally with zero cloud dependency.
            </p>
          </div>
        </div>

        {/* Feature cards */}
        <h3 className="featured__section-title reveal">Core features</h3>
        <div className="featured__features">
          {features.map((f, i) => (
            <article
              key={f.title}
              className={`featured__feature reveal reveal-delay-${Math.min(i % 4, 3) + 1}`}
            >
              <span className="featured__feature-icon" aria-hidden="true">
                {f.icon}
              </span>
              <h4>{f.title}</h4>
              <p>{f.body}</p>
            </article>
          ))}
        </div>

        {/* Screenshot gallery */}
        <h3 className="featured__section-title reveal">A closer look</h3>
        <div className="featured__gallery">
          {gallery.map((shot, i) => (
            <figure
              key={shot.src}
              className={`featured__shot reveal reveal-delay-${Math.min(i % 3, 2) + 1}`}
            >
              <div className="featured__shot-frame">
                <img
                  src={asset(shot.src)}
                  alt={shot.alt}
                  width={1600}
                  height={880}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption>{shot.caption}</figcaption>
            </figure>
          ))}
        </div>

        {/* Tech stack */}
        <h3 className="featured__section-title reveal">Tech stack</h3>
        <ul className="featured__stack reveal">
          {stack.map((tech) => (
            <li key={tech} className="featured__stack-item">
              {tech}
            </li>
          ))}
        </ul>

        {/* Engineering highlights */}
        <h3 className="featured__section-title reveal" id="case-study">
          Engineering highlights
        </h3>
        <div className="featured__highlights">
          {highlights.map((h, i) => (
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

        {/* CTA */}
        <div className="featured__cta reveal">
          <Button href={REPO_URL} external>
            <GitHubIcon />
            View on GitHub
          </Button>
          <Button href={`${REPO_URL}/releases`} variant="secondary" external>
            Releases &amp; Changelog
          </Button>
          <Button variant="secondary" disabled>
            Live Demo — Coming Soon
          </Button>
          <a className="featured__cta-note" href={site.github} target="_blank" rel="noopener noreferrer">
            More on my GitHub profile ↗
          </a>
        </div>
      </div>
    </section>
  )
}
