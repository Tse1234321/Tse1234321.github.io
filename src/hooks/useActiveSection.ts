import { useEffect, useState } from 'react'

/**
 * Tracks which page section currently dominates the viewport so the
 * navbar can highlight the matching link.
 */
export function useActiveSection(sectionIds: readonly string[]) {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      // Fire when a section crosses the upper-middle band of the viewport.
      { rootMargin: '-30% 0px -60% 0px' },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds])

  return active
}
