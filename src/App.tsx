import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { FeaturedProject } from './components/FeaturedProject'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Timeline } from './components/Timeline'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProject />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
