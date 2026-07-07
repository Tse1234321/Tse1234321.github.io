import type { ReactNode } from 'react'
import './Button.css'

interface ButtonProps {
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  external?: boolean
  disabled?: boolean
  children: ReactNode
}

/**
 * Renders as an anchor (all CTAs on this site navigate somewhere).
 * `disabled` renders a non-interactive span — used for "Coming Soon".
 */
export function Button({ href, variant = 'primary', external, disabled, children }: ButtonProps) {
  const className = `btn btn--${variant}${disabled ? ' btn--disabled' : ''}`

  if (disabled || !href) {
    return <span className={className}>{children}</span>
  }

  return (
    <a
      className={className}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
