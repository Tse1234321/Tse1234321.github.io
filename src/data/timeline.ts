export interface TimelineEntry {
  period: string
  title: string
  description: string
}

export const timeline: TimelineEntry[] = [
  {
    period: 'Foundations',
    title: 'Programming fundamentals',
    description: 'Learned C++ and Python — data structures, problem solving, and building small tools to answer my own questions.',
  },
  {
    period: 'EE Core',
    title: 'Circuits & digital logic',
    description: 'Went deep on circuit analysis, digital logic, K-maps, state machines, and Verilog — and started seeing what could be tooled.',
  },
  {
    period: 'First Tools',
    title: 'Building practical tools',
    description: 'Turned coursework friction into software: logic generators, MATLAB visualizations, and interactive teaching experiments.',
  },
  {
    period: 'NEXUS',
    title: 'A real desktop application',
    description: 'Designed and built Windows Assistant / NEXUS with Electron and React — architecture, local-first data flow, and modular UI.',
  },
  {
    period: 'Now',
    title: 'Toward an engineering career',
    description: 'Deepening both the software and hardware sides, and building toward work that ships real tools with a team.',
  },
]
