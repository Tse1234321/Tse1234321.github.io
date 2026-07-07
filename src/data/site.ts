/**
 * Central place for all personal info. Update this file (and only this
 * file) when adding your LinkedIn, changing your tagline, etc.
 */
export const site = {
  name: 'Wu Hung-Tse',
  role: 'Electrical Engineering Student & Software Builder',
  heroSubtitle:
    'Building practical software and hardware tools with engineering thinking, clean UI, and local-first product design.',
  email: 'jeremywu0420@gmail.com',
  // Personal profile link (used as a contact channel, not a data integration).
  github: 'https://github.com/Tse1234321',
  githubHandle: 'Tse1234321',
  // TODO: replace with your real LinkedIn URL when ready.
  // While null, the UI renders a disabled "Coming soon" chip instead of a broken link.
  linkedin: null as string | null,
  location: 'Taiwan',
} as const

// Section order follows the intended reading hierarchy:
// Featured → Case Study → Supporting Projects → Skills → Journey → Contact.
export const navLinks = [
  { label: 'Featured', href: '#featured' },
  { label: 'Case Study', href: '#case-study' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
] as const
