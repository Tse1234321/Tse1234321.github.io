export interface SkillCategory {
  title: string
  skills: string[]
}

/**
 * Four categories only — kept deliberately quiet so this section supports
 * the featured work rather than competing with it. No progress bars.
 */
export const skillCategories: SkillCategory[] = [
  {
    title: 'Software',
    skills: ['C++', 'Python', 'JavaScript', 'Node.js'],
  },
  {
    title: 'Frontend / UI',
    skills: ['React', 'Vite', 'HTML', 'CSS', 'Responsive Design'],
  },
  {
    title: 'Desktop App',
    skills: ['Electron', 'Local-first App', 'Workflow Automation'],
  },
  {
    title: 'Electrical / Digital Logic',
    skills: ['Verilog', 'FSM', 'K-map', 'Circuit Analysis', 'MATLAB'],
  },
]
