import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionHeading } from './SectionHeading'

export function About() {
  const { ref, visible } = useScrollReveal()

  return (
    <section
      ref={ref}
      id="about"
      className={`section-reveal mx-auto w-full max-w-[860px] px-4 py-16 text-left sm:px-6 sm:py-20 ${
        visible ? 'section-reveal--visible' : ''
      }`}
      aria-labelledby="about-heading"
    >
      <SectionHeading id="about-heading" num="01">
        About me
      </SectionHeading>
      <div className="mt-8 space-y-4 text-base leading-relaxed text-fg/85">
        <p>
          Hi, I&apos;m Joey, a Computer Science student at York University in the Lassonde School of
          Engineering. I&apos;m currently working as a Developer at the Ontario Science Centre, where I
          build interactive learning games and digital experiences that make STEM topics engaging and
          accessible. I bring strong problem-solving skills, reliability, and curiosity to my work. I
          value integrity and take pride in following through on commitments and producing work I can
          stand behind. Curiosity keeps me learning, and my family has shaped my grounded, hardworking
          mindset and the way I treat others.
        </p>
        <p>
          I was born and raised in Burlington, Ontario, where I attended Dr. Frank J. Hayden Secondary
          School. My Grade 11 Computer Science teacher, Mr. Phillips, changed the direction of my life.
          He made programming feel less intimidating by teaching us how to break complex problems into
          smaller, manageable steps. More importantly, he took time each week to check in with every
          student individually. That consistency showed me what leadership through integrity looks like.
          He genuinely cared about our growth, not just our grades. His mentorship inspired me to pursue
          Computer Science and enroll in Lassonde at York, where I have continued strengthening my
          problem-solving and time management skills year after year.
        </p>
        <p>
          I am a tactile learner: I learn best by building, experimenting, and actively engaging with
          problems. In the workplace, that means diving into code, prototyping ideas, and collaborating
          closely with teammates to refine solutions. I thrive in creative, team-based environments
          where ideas are shared openly and different perspectives lead to stronger outcomes.
        </p>
        <p>
          One area I am working to improve is public speaking. I am taking every opportunity in my
          current role to present in front of larger groups and share my ideas more confidently. Stepping
          outside my comfort zone has helped me build confidence and communicate more clearly.
        </p>
        <p>
          A family trip to British Columbia in 2023 was a turning point for me. Growing up, I was
          comfortable staying close to what was familiar. That trip sparked a curiosity to explore
          beyond my comfort zone, a mindset that now shapes how I approach both life and learning.
        </p>
      </div>
    </section>
  )
}
