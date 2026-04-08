import { motion } from 'framer-motion'
import whyMeVideo from '../assets/WhyMe.mp4'
import { fadeUp, staggerContainer } from '../utils/motion'
import { SectionHeading } from './SectionHeading'

const lifeEvents = [
  {
    event: 'Burlington, Ontario',
    positive: true,
    takeaway:
      "Growing up with my family grounded my values — working hard, being honest, treating people well. Those years weren't always easy, but they gave me the mindset I carry into everything I do.",
  },
  {
    event: 'Grade 11 CS · Mr. Phillips',
    positive: true,
    takeaway:
      "He genuinely changed the direction of my life. He showed me that good leadership isn't about authority — it's about caring, showing up, and helping people grow. He also taught me to stop feeling overwhelmed and just break problems down. I still do that every day.",
  },
  {
    event: 'Family Trip to British Columbia',
    positive: true,
    takeaway:
      "I was always a homebody. That trip showed me how much I was missing by staying in the familiar. Now I actively push into new experiences — in life and in how I approach problems.",
  },
  {
    event: 'First Year at York',
    positive: false,
    takeaway:
      "The hardest academic year of my life. I constantly doubted whether I belonged. Not quitting taught me resilience I couldn't have gotten any other way.",
  },
  {
    event: 'Second Year and Beyond',
    positive: true,
    takeaway:
      'Pushing through paid off. I found my rhythm, improved my time management, and started seeing real growth year over year.',
  },
  {
    event: 'Co-op at Ontario Science Centre',
    positive: true,
    takeaway:
      "This placement has shown me what I'm capable of in the right environment — leading projects, learning fast under pressure, and building things people actually use.",
  },
]

export function About() {
  return (
    <motion.section
      id="about"
      className="mx-auto w-full max-w-[860px] px-4 py-16 text-left sm:px-6 sm:py-20"
      aria-labelledby="about-heading"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div variants={fadeUp}>
        <SectionHeading id="about-heading" num="01">
          About me
        </SectionHeading>
      </motion.div>

      <div className="mt-8 space-y-10">
        {/* About Me Video — featured in introduction as required */}
        <motion.div variants={fadeUp} className="space-y-3">
          <p className="font-mono text-sm text-text-muted">About Me — in my own words</p>
          <div className="overflow-hidden rounded-lg border border-card-border bg-surface">
            <video
              src={whyMeVideo}
              controls
              preload="metadata"
              className="w-full"
              aria-label="Joey Rudd — About Me video"
            />
          </div>
        </motion.div>

        {/* Intro */}
        <motion.p variants={fadeUp} className="text-base leading-relaxed text-fg/85">
          I&apos;m a Computer Science student at York University&apos;s Lassonde School of
          Engineering, currently working as a Developer at the Ontario Science Centre building
          interactive STEM games and digital experiences. I value integrity — following through on
          commitments and producing work I can stand behind. Curiosity keeps me moving forward, and
          a grounded upbringing in Burlington shaped how I treat people and how I approach
          everything I take on.
        </motion.p>

        {/* Mr. Phillips pull quote */}
        <motion.blockquote
          variants={fadeUp}
          className="relative border-l-2 border-accent py-1 pl-5"
        >
          <p className="text-base leading-relaxed text-fg/90 italic">
            &ldquo;My Grade 11 Computer Science teacher, Mr. Phillips, changed the direction of my
            life. He made programming feel less intimidating by teaching us how to break complex
            problems into smaller, manageable steps — and every week he checked in with each student
            individually. That consistency showed me what leadership through integrity looks like.
            His mentorship is why I enrolled in Lassonde.&rdquo;
          </p>
          <cite className="mt-3 block font-mono text-sm not-italic text-text-muted">
            — Burlington, ON · Dr. Frank J. Hayden Secondary School
          </cite>
        </motion.blockquote>

        {/* Life Events Timeline */}
        <motion.div variants={fadeUp}>
          <p className="mb-5 font-mono text-sm text-text-muted">Key moments that shaped me</p>
          <ol className="space-y-0">
            {lifeEvents.map((item, i) => (
              <li key={item.event} className="flex gap-4">
                {/* Spine */}
                <div className="flex flex-col items-center">
                  <span
                    className="timeline-node mt-1 block h-3 w-3 shrink-0 rounded-full"
                    aria-hidden
                  />
                  {i < lifeEvents.length - 1 && (
                    <div className="my-1 w-px flex-1 bg-card-border" />
                  )}
                </div>
                {/* Content */}
                <div className={i < lifeEvents.length - 1 ? 'pb-6' : ''}>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-sm font-semibold text-fg">{item.event}</span>
                    <span
                      className={`font-mono text-xs ${item.positive ? 'text-accent' : 'text-fg/40'}`}
                    >
                      {item.positive ? '+' : '−'}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-fg/65">{item.takeaway}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>

        {/* How I work */}
        <motion.p variants={fadeUp} className="text-base leading-relaxed text-fg/85">
          I learn best by building. In practice that means diving into code early, prototyping rough
          ideas before refining them, and collaborating closely so different perspectives sharpen the
          outcome. One thing I&apos;m actively working on is public speaking — I&apos;m taking every
          opportunity at OSC to present at standups, milestone reviews, and cross-team meetings, and
          each one makes the next a little easier.
        </motion.p>
      </div>
    </motion.section>
  )
}
