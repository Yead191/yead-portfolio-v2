'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const stats = [
    { value: '4+', label: 'Years of Learning' },
    { value: '10+', label: 'Projects Built' },
    { value: '1', label: 'IEEE Publication' },
    { value: '∞', label: 'Lines of Code' },
  ]

  return (
    <section ref={sectionRef} id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={contentRef}>
          {/* Section label */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>01</span>
            <div className="h-px flex-1 max-w-[60px]" style={{ background: 'var(--accent)' }} />
            <h2 className="font-orbitron text-2xl md:text-3xl font-700 tracking-wider section-title" style={{ color: 'var(--text)' }}>
              ABOUT ME
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {/* Left: text */}
            <div className="space-y-6">
              <p className="font-rajdhani text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                I'm a <span style={{ color: 'var(--text)' }} className="font-600">Frontend Developer</span> from Bangladesh,
                passionate about crafting fast, accessible, and visually polished web experiences. I graduated in
                Computer Science & Engineering from Daffodil International University in 2024.
              </p>
              <p className="font-rajdhani text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Currently working at <span style={{ color: 'var(--accent-2)' }} className="font-600">Sparktech Agency</span> as
                a Jr. Frontend Developer, I build production-grade web applications and dashboards with modern tooling — 
                Next.js, Shadcn/ui, Ant Design, GSAP, and more.
              </p>
              <p className="font-rajdhani text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Beyond code, I've published deep learning research on sugarcane disease classification in <span style={{ color: 'var(--text)' }} className="font-600">IEEE Xplore (2024)</span>.
                I believe engineering and creativity are two sides of the same circuit board.
              </p>

              {/* Decorative quote */}
              <div
                className="pl-4 py-2"
                style={{ borderLeft: '2px solid var(--accent)', color: 'var(--text-faint)' }}
              >
                <p className="font-mono text-sm italic">
                  "More than meets the eye."
                </p>
              </div>
            </div>

            {/* Right: stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="tf-corner p-6 border card-glow"
                  style={{
                    borderColor: 'var(--border)',
                    background: 'var(--bg-card)',
                  }}
                >
                  <p
                    className="font-orbitron font-800 mb-1"
                    style={{ fontSize: '2rem', color: 'var(--accent)' }}
                  >
                    {value}
                  </p>
                  <p className="font-rajdhani text-sm font-500" style={{ color: 'var(--text-muted)' }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
