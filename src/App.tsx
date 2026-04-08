import { MotionConfig } from 'framer-motion'
import { About } from './components/About'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Goals } from './components/Goals'
import { Hero } from './components/Hero'
import { KonamiEasterEgg } from './components/KonamiEasterEgg'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Resume } from './components/Resume'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-svh bg-bg text-fg">
        <div className="aurora-blob aurora-blob--1 pointer-events-none" aria-hidden />
        <div className="aurora-blob aurora-blob--2 pointer-events-none" aria-hidden />
        <div className="aurora-blob aurora-blob--3 pointer-events-none" aria-hidden />
        <div className="relative z-10">
          <Navbar />
          <main className="text-left">
            <Hero />
            <About />
            <Education />
            <Experience />
            <Projects />
            <Goals />
            <Resume />
          </main>
        </div>
        <KonamiEasterEgg />
      </div>
    </MotionConfig>
  )
}
