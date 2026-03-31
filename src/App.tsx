import { About } from './components/About'
import { Coursework } from './components/Coursework'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Goals } from './components/Goals'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Resume } from './components/Resume'

export default function App() {
  return (
    <div className="relative min-h-svh bg-bg text-fg app-fade-in">
      <div className="dot-grid-bg pointer-events-none fixed inset-0 z-0" aria-hidden />
      <div className="relative z-10">
        <Navbar />
        <main className="text-left">
          <Hero />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Goals />
          <Coursework />
          <Resume />
        </main>
      </div>
    </div>
  )
}
