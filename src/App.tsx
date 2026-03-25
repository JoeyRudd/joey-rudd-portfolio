import { About } from './components/About'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Resume } from './components/Resume'

export default function App() {
  return (
    <div className="relative min-h-svh bg-bg text-fg">
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(240, 237, 232, 0.06) 2px,
            rgba(240, 237, 232, 0.06) 4px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(240, 237, 232, 0.06) 2px,
            rgba(240, 237, 232, 0.06) 4px
          )`,
        }}
        aria-hidden
      />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Resume />
        </main>
      </div>
    </div>
  )
}
