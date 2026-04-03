'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

const timeline = [
  {
    type: 'work',
    title: 'Jr. Frontend Developer',
    org: 'Sparktech Agency',
    period: 'June 2025 — Present',
    desc: 'Building production web applications and dashboards with Next.js, Shadcn/ui, Ant Design, Socket.io, and GSAP. Collaborating in cross-functional teams to deliver scalable, high-performance frontend solutions.',
    tags: ['Next.js', 'Shadcn', 'Ant Design', 'Socket.io', 'GSAP'],
  },
  {
    type: 'edu',
    title: 'B.Sc. in Computer Science & Engineering',
    org: 'Daffodil International University',
    period: '2020 — 2024',
    desc: 'Graduated with a focus on web development and machine learning. Published research in IEEE Xplore on deep learning-based classification of sugarcane leaf diseases.',
    tags: ['Web Dev', 'Deep Learning', 'IEEE Publication'],
  },
  {
    type: 'edu',
    title: 'Higher Secondary Certificate (HSC)',
    org: 'Ideal College, Dhanmondi',
    period: 'Science Group — Class 11–12',
    desc: 'Completed higher secondary studies with a science background, building a solid foundation in mathematics and critical thinking.',
    tags: ['Science', 'Mathematics'],
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const itemsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, i) => {
        gsap.fromTo(item,
          { x: -30, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.55, ease: 'power2.out',
            delay: i * 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
            },
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>03</span>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: 'var(--accent)' }} />
          <h2 className="font-orbitron text-2xl md:text-3xl font-700 tracking-wider section-title" style={{ color: 'var(--text)' }}>
            EXPERIENCE & EDUCATION
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[9px] top-3 bottom-3 w-px"
            style={{ background: 'var(--border)' }}
          />

          <div className="space-y-10 pl-10">
            {timeline.map((item, i) => (
              <div
                key={i}
                ref={el => { if (el) itemsRef.current[i] = el }}
                className="relative"
              >
                {/* Diamond dot */}
                <div
                  className="timeline-dot absolute -left-10 top-1.5"
                  style={{ background: item.type === 'work' ? 'var(--accent)' : 'var(--accent-2)' }}
                />

                <div
                  className="p-6 border card-glow"
                  style={{
                    borderColor: 'var(--border)',
                    background: 'var(--bg-card)',
                  }}
                >
                  {/* Type badge */}
                  <span
                    className="font-mono text-xs tracking-widest px-2 py-0.5 mb-3 inline-block"
                    style={{
                      background: item.type === 'work' ? 'rgba(232,25,10,0.1)' : 'rgba(245,196,0,0.1)',
                      color: item.type === 'work' ? 'var(--accent)' : 'var(--accent-2)',
                      border: `1px solid ${item.type === 'work' ? 'var(--accent)' : 'var(--accent-2)'}`,
                    }}
                  >
                    {item.type === 'work' ? 'WORK' : 'EDUCATION'}
                  </span>

                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="font-orbitron text-base font-700 tracking-wide" style={{ color: 'var(--text)' }}>
                      {item.title}
                    </h3>
                    <span className="font-mono text-xs shrink-0" style={{ color: 'var(--text-faint)' }}>
                      {item.period}
                    </span>
                  </div>

                  <p className="font-rajdhani text-base font-600 mb-3" style={{ color: 'var(--accent-2)' }}>
                    {item.org}
                  </p>
                  <p className="font-rajdhani text-base leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2 py-0.5"
                        style={{
                          background: 'var(--bg-secondary)',
                          color: 'var(--text-faint)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
