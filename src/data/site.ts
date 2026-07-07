/**
 * Central place for all personal info. Update this file (and only this
 * file) when adding your LinkedIn, changing your tagline, etc.
 */
export const site = {
  name: 'Wu Hung-Tse',
  role: 'Electrical Engineering Student',
  tagline: 'Electrical engineering student building practical software and hardware tools.',
  subTagline:
    'I turn everyday engineering friction into working tools — from a local-first Windows desktop assistant to interactive teaching systems for electronics and digital logic.',
  email: 'jeremywu0420@gmail.com',
  github: 'https://github.com/Tse1234321',
  githubHandle: 'Tse1234321',
  // TODO: replace with your real LinkedIn URL when ready.
  // While null, the UI renders a disabled "Coming soon" chip instead of a broken link.
  linkedin: null as string | null,
  location: 'Taiwan',
} as const

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Featured', href: '#featured' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
] as const
