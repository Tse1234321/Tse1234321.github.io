export type ProjectStatus = 'Completed' | 'In Progress' | 'Prototype'

export interface Project {
  name: string
  oneLiner: string
  /** Case-study style copy, rendered in the expanded card body. */
  what: string
  why: string
  learned: string
  tags: string[]
  status: ProjectStatus
  /** null = no public repo yet; the card links to the GitHub profile instead. */
  repo: string | null
  note?: string
}

export const projects: Project[] = [
  {
    name: 'NEXUS — Windows Desktop Assistant',
    oneLiner:
      'A local-first Windows desktop assistant that unifies project launching, file cleanup, system monitoring, and workflow automation.',
    what: 'A production Electron + React desktop app (published on GitHub as "windows-assistant / PC Life Assistant", currently v2.5.7) with a 3D dashboard, project hub, workspace generators, and a node-based automation editor.',
    why: 'Working across code, circuits, and coursework meant constantly juggling scattered folders, terminals, and utilities. I wanted one calm, keyboard-friendly home base for all of it.',
    learned:
      'Electron main/renderer architecture, IPC design, safe file-system operations with preview-before-action, and shipping installers with electron-builder across 2.x releases.',
    tags: ['Electron', 'React', 'Vite', 'TypeScript', 'Node.js', 'Three.js'],
    status: 'Completed',
    repo: 'https://github.com/Tse1234321/windows-assistant',
  },
  {
    name: 'Interactive Electronics Learning System',
    oneLiner:
      'An interactive teaching tool that visualizes core electronics concepts — diodes, BJTs, op-amps — so students can experiment instead of memorizing.',
    what: 'A web-based learning system where circuit behavior responds live to parameter changes, turning textbook formulas into something you can poke at.',
    why: 'Electronics lectures often stop at static schematics. Seeing a load line move when you change a resistor teaches more than re-reading the derivation.',
    learned:
      'How to model circuit equations in JavaScript, design UI for learning (progressive disclosure, immediate feedback), and keep interactive graphics performant.',
    tags: ['JavaScript', 'React', 'Circuit Analysis', 'Data Visualization'],
    status: 'In Progress',
    repo: null,
    note: 'Public repo coming soon',
  },
  {
    name: 'Digital Logic Circuit Generator',
    oneLiner:
      'Tooling that takes a truth table or state table and generates K-map simplification steps and equivalent logic circuits.',
    what: 'A generator that automates the boring-but-error-prone parts of digital design homework: K-map grouping, Boolean simplification, and state-table-to-circuit translation.',
    why: 'Hand-drawing K-maps is where careless mistakes happen. Automating it let me verify my own coursework and understand the algorithms behind the shortcuts.',
    learned:
      'Quine–McCluskey style minimization logic, representing combinational/sequential circuits as data structures, and rendering generated circuits cleanly.',
    tags: ['C++', 'Digital Logic', 'K-map', 'Algorithms'],
    status: 'Prototype',
    repo: null,
    note: 'Coursework project — repo being cleaned up',
  },
  {
    name: 'Verilog FSM Practice & Simulation',
    oneLiner:
      'A collection of finite-state-machine designs in Verilog with testbenches — from sequence detectors to control units.',
    what: 'Verilog modules and simulation testbenches covering Moore/Mealy FSMs, counters, and datapath control, verified with waveform analysis.',
    why: 'FSMs are the backbone of digital design. Writing and simulating them repeatedly is the only way they become second nature.',
    learned:
      'RTL coding discipline, the difference between simulatable and synthesizable code, and how to write testbenches that actually catch bugs.',
    tags: ['Verilog', 'FSM', 'Simulation', 'RTL'],
    status: 'In Progress',
    repo: null,
    note: 'Selected work — public repo coming soon',
  },
  {
    name: 'MATLAB Visualization Projects',
    oneLiner:
      'Signal and circuit analysis visualizations in MATLAB — frequency response, filter behavior, and system simulations for EE coursework.',
    what: 'A set of MATLAB scripts that plot and animate concepts from signals & systems and circuit theory: Bode plots, transient responses, and filter comparisons.',
    why: 'Plotting a system response yourself forces you to understand every term in the equation — and the plots became study material for classmates too.',
    learned:
      'MATLAB scripting and plotting, numerical simulation of dynamic systems, and communicating engineering results visually.',
    tags: ['MATLAB', 'Signal Processing', 'Simulation'],
    status: 'Completed',
    repo: null,
    note: 'Coursework portfolio — available on request',
  },
]
