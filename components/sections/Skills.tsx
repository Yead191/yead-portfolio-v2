'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

const skillGroups = [
  {
    id: '01',
    label: 'EXPERTISE',
    color: 'var(--accent)',
    skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React.js', 'React Router DOM', 'Next.js', 'Shadcn/ui', 'Material UI', 'Ant Design', 'Socket.io'],
  },
  {
    id: '02',
    label: 'COMFORTABLE',
    color: 'var(--accent-2)',
    skills: ['MongoDB', 'Node.js', 'Express.js', 'Dotenv', 'JSON Web Token', 'Tanstack Query', 'REST APIs', 'Redux'],
  },
  {
    id: '03',
    label: 'TOOLS',
    color: 'var(--chrome)',
    skills: ['Git', 'GitHub', 'Firebase', 'Netlify', 'Vercel', 'VS Code', 'Figma'],
  },
  {
    id: '04',
    label: 'SOFT SKILLS',
    color: '#6B8CC7',
    skills: ['Deep Learning', 'Problem Solving', 'Debugging', 'Team Collaboration', 'Adaptability'],
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.55, ease: 'power2.out',
            delay: i * 0.08,
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
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 px-6"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>02</span>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: 'var(--accent)' }} />
          <h2 className="font-orbitron text-2xl md:text-3xl font-700 tracking-wider section-title" style={{ color: 'var(--text)' }}>
            SKILLS & ARSENAL
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <div
              key={group.id}
              ref={el => { if (el) cardsRef.current[i] = el }}
              className="p-6 border card-glow"
              style={{
                borderColor: 'var(--border)',
                background: 'var(--bg-card)',
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="font-mono text-xs font-600"
                  style={{ color: group.color }}
                >
                  [{group.id}]
                </span>
                <h3
                  className="font-orbitron text-xs tracking-widest font-600"
                  style={{ color: group.color }}
                >
                  {group.label}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className="skill-pill font-rajdhani text-sm font-500 px-3 py-1 tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
