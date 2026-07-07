export interface TimelineEntry {
  period: string
  title: string
  description: string
}

export const timeline: TimelineEntry[] = [
  {
    period: 'Foundations',
    title: 'Started with programming fundamentals',
    description:
      'Learned C++ and Python — data structures, problem solving, and the habit of building small programs to answer my own questions.',
  },
  {
    period: 'EE Core',
    title: 'Circuits & digital logic',
    description:
      'Went deep on circuit analysis, electronics, and digital logic design — K-maps, state machines, and Verilog. Started noticing how much of this could be tooled.',
  },
  {
    period: 'First Tools',
    title: 'Began building practical tools',
    description:
      'Turned coursework friction into software: logic circuit generators, MATLAB visualizations, and interactive teaching experiments.',
  },
  {
    period: 'NEXUS',
    title: 'Shipped a real desktop application',
    description:
      'Built NEXUS (PC Life Assistant) with Electron + React and iterated it through dozens of releases to v2.5.7 — architecture, safety design, packaging, and all.',
  },
  {
    period: 'Now',
    title: 'Building toward an engineering career',
    description:
      'Growing this portfolio, deepening both the software and hardware sides, and looking for opportunities to build things that matter with a team.',
  },
]
