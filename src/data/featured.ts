/**
 * The single most important project on the site: Windows Assistant / NEXUS.
 * All of its case-study content lives here so the Featured and Case Study
 * sections stay in sync and easy to edit.
 */

export interface Feature {
  title: string
  body: string
}

export interface Highlight {
  title: string
  body: string
}

export interface CaseStudyBlock {
  label: string
  body: string
}

export const featured = {
  name: 'Windows Assistant / NEXUS',
  // One-line positioning statement.
  tagline:
    'A local-first Windows desktop assistant designed to improve productivity through automation, workflows, and practical system utilities.',
  // Short version used on the Hero preview card.
  heroOneLiner: 'Local-first desktop assistant for Windows productivity and automation.',

  problem: [
    'Windows users repeat the same manual steps every day.',
    'Everyday utilities are scattered, so simple tasks cost real time.',
    'General-purpose automation tools are heavy and hard to set up.',
    'There was no calm, local-first assistant tying these together.',
  ],

  solution: [
    'Consolidates frequently used utilities into one desktop app.',
    'Adds workflow automation for repetitive, multi-step tasks.',
    'Surfaces a productivity dashboard for system state at a glance.',
    'Runs local-first with minimal external dependencies.',
    'Manages daily tasks through a clearer, more intuitive UI.',
  ],

  features: [
    {
      title: 'Workflow Automation',
      body: 'Chain repetitive, multi-step tasks into repeatable workflows instead of doing them by hand each time.',
    },
    {
      title: 'Local-first Assistant',
      body: 'Runs and stores everything on the machine — no account, no cloud dependency, no waiting on a network.',
    },
    {
      title: 'System Utilities',
      body: 'Common maintenance and file tools gathered into one place, a click away instead of scattered across the OS.',
    },
    {
      title: 'Task Scheduling',
      body: 'Define when workflows run and let the assistant handle recurring jobs quietly in the background.',
    },
    {
      title: 'Productivity Dashboard',
      body: 'A single view of system state and recent activity, so what matters is visible at a glance.',
    },
    {
      title: 'Modular Desktop UI',
      body: 'A component-based interface where each tool is an independent module behind a shared shell.',
    },
  ] satisfies Feature[],

  highlights: [
    {
      title: 'Electron desktop app architecture',
      body: 'Separates the main process (windowing, system access) from the renderer for a clean desktop foundation.',
    },
    {
      title: 'React component-based UI',
      body: 'The interface is built from reusable, self-contained components that scale as features grow.',
    },
    {
      title: 'Local-first data flow',
      body: 'State and settings live on the device, keeping the app fast and fully usable offline.',
    },
    {
      title: 'Workflow scheduling logic',
      body: 'Workflows are modeled as ordered steps that can be validated and scheduled before they run.',
    },
    {
      title: 'Modular automation service',
      body: 'Automation lives in an isolated service layer, so features are added without touching the UI.',
    },
    {
      title: 'Maintainable frontend structure',
      body: 'Clear module boundaries and shared design tokens keep the codebase readable and easy to extend.',
    },
  ] satisfies Highlight[],

  stack: [
    'Electron',
    'React',
    'Vite',
    'JavaScript / TypeScript',
    'Node.js',
    'Local Storage',
    'Automation Service',
  ],

  caseStudy: [
    {
      label: 'Overview',
      body: 'A Windows desktop assistant that helps users move through everyday tasks faster by bringing utilities, automation, and system insight into one place.',
    },
    {
      label: 'Motivation',
      body: 'I kept repeating the same manual steps across scattered tools, and wanted to see whether those flows could live in one calm, local-first desktop app.',
    },
    {
      label: 'Product Thinking',
      body: 'The goal was not to ship features, but to help users finish tasks in fewer steps — so the design favors clarity, sensible defaults, and doing one thing well at a time.',
    },
    {
      label: 'Engineering Thinking',
      body: 'The focus was an Electron architecture with a component-based React UI, a local-first data flow, workflow scheduling, and a modular automation service that keeps the frontend maintainable.',
    },
    {
      label: 'Next Steps',
      body: 'Planned work includes a demo video, a public GitHub release, additional workflow modules, and proper documentation.',
    },
  ] satisfies CaseStudyBlock[],
} as const
