import { useEffect, useRef } from 'react'

/**
 * Adds `.is-visible` to elements marked `.reveal` inside the returned
 * container ref when they enter the viewport. One shared observer per
 * container; unobserves after reveal so there is zero ongoing cost.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const targets = root.classList.contains('reveal')
      ? [root as HTMLElement]
      : Array.from(root.querySelectorAll<HTMLElement>('.reveal'))
    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}
