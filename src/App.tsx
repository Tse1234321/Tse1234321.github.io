import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeaturedProject } from './components/FeaturedProject'
import { CaseStudy } from './components/CaseStudy'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Timeline } from './components/Timeline'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

// Reading order encodes the hierarchy: who I am → the featured project →
// why it exists → supporting proof → skills → journey → contact.
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProject />
        <CaseStudy />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
