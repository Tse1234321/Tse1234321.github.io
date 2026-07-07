import './SectionHeading.css'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  lead?: string
}

export function SectionHeading({ eyebrow, title, lead }: SectionHeadingProps) {
  return (
    <header className="section-heading reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-heading__title">{title}</h2>
      {lead && <p className="section-heading__lead">{lead}</p>}
    </header>
  )
}
