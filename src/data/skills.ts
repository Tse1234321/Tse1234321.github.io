export interface SkillCategory {
  title: string
  /** Short line describing how this category shows up in real work. */
  context: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Software Development',
    context: 'Building and shipping real applications, not just exercises.',
    skills: ['Application Architecture', 'IPC & Process Design', 'REST / Local APIs', 'Testing (Vitest)', 'Debugging'],
  },
  {
    title: 'Frontend / UI',
    context: 'Interfaces that are fast, readable, and calm.',
    skills: ['React', 'Vite', 'HTML / CSS', 'Responsive Design', 'UI/UX Thinking', 'Three.js'],
  },
  {
    title: 'Desktop Apps',
    context: 'Local-first Windows software from window to installer.',
    skills: ['Electron', 'Node.js', 'File System APIs', 'electron-builder', 'System Integration'],
  },
  {
    title: 'Hardware / Digital Logic',
    context: 'The EE foundation under the software.',
    skills: ['Digital Logic Design', 'Verilog / FSM', 'K-map & Minimization', 'Circuit Analysis', 'Electronics'],
  },
  {
    title: 'Languages',
    context: 'Daily drivers across software and hardware work.',
    skills: ['TypeScript', 'JavaScript', 'C++', 'Python', 'Verilog', 'MATLAB'],
  },
  {
    title: 'Tools',
    context: 'The workbench.',
    skills: ['Git / GitHub', 'VS Code', 'ESLint / Prettier', 'Vitest', 'Simulation Tools'],
  },
]
