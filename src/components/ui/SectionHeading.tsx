import './SectionHeading.css'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  lead?: string
  /** 'quiet' renders a smaller, more muted heading for lower-hierarchy sections. */
  tone?: 'default' | 'quiet'
}

export function SectionHeading({ eyebrow, title, lead, tone = 'default' }: SectionHeadingProps) {
  return (
    <header className={`section-heading${tone === 'quiet' ? ' section-heading--quiet' : ''} reveal`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-heading__title">{title}</h2>
      {lead && <p className="section-heading__lead">{lead}</p>}
    </header>
  )
}
