export type ProjectStatus = 'Completed' | 'In Progress' | 'Prototype'

export interface Project {
  name: string
  oneLiner: string
  tags: string[]
  status: ProjectStatus
}

/**
 * Supporting projects — these back up the range of the featured work
 * (Windows Assistant / NEXUS); they are intentionally lighter-weight.
 * Each card stays compact: name, one line, a few tags, and a status.
 */
export const supportingProjects: Project[] = [
  {
    name: 'Interactive Electronics Learning System',
    oneLiner:
      'An interactive tool that turns core electronics concepts into live, adjustable circuit behavior for hands-on learning.',
    tags: ['JavaScript', 'React', 'Circuit Analysis', 'Data Viz'],
    status: 'In Progress',
  },
  {
    name: 'Digital Logic Circuit Generator',
    oneLiner:
      'Generates K-map simplification steps and equivalent logic circuits from a truth table or state table.',
    tags: ['C++', 'Digital Logic', 'K-map', 'Algorithms'],
    status: 'Prototype',
  },
  {
    name: 'Verilog Practice / FSM Simulation',
    oneLiner:
      'A set of finite-state-machine designs in Verilog with testbenches, verified through waveform simulation.',
    tags: ['Verilog', 'FSM', 'RTL', 'Simulation'],
    status: 'In Progress',
  },
  {
    name: 'MATLAB Visualization Projects',
    oneLiner:
      'Signal and circuit analysis visualizations built to make dynamic system behavior easier to reason about.',
    tags: ['MATLAB', 'Signal Processing', 'Simulation'],
    status: 'Completed',
  },
]
