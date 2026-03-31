import type { ReactNode } from 'react'

type SectionHeadingProps = {
  id?: string
  /** Section index label, e.g. "01" — rendered as "01 —" in JetBrains Mono */
  num: string
  as?: 'h2' | 'h3'
  children: ReactNode
  className?: string
}

export function SectionHeading({ id, num, as: Tag = 'h2', children, className = '' }: SectionHeadingProps) {
  const n = num.trim()
  return (
    <Tag
      id={id}
      className={`section-heading flex flex-wrap items-baseline gap-x-1.5 text-left ${className}`}
    >
      <span className="section-num shrink-0">{n} —</span>
      <span>{children}</span>
    </Tag>
  )
}
