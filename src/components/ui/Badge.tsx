import type { ProjectStatus } from '../../data/projects'
import './Badge.css'

const statusClass: Record<ProjectStatus, string> = {
  Completed: 'badge--completed',
  'In Progress': 'badge--progress',
  Prototype: 'badge--prototype',
}

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={`badge ${statusClass[status]}`}>
      <span className="badge__dot" aria-hidden="true" />
      {status}
    </span>
  )
}
