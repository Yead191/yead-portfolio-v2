'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/lib/projects'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.55, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )
      gsap.fromTo(
        gridRef.current?.children ? Array.from(gridRef.current.children) : [],
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 75%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 px-6"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="flex items-center gap-4 mb-4">
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>04</span>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: 'var(--accent)' }} />
          <h2 className="font-orbitron text-2xl md:text-3xl font-700 tracking-wider section-title" style={{ color: 'var(--text)' }}>
            PROJECTS
          </h2>
        </div>
        <p className="font-rajdhani text-base mb-10 ml-20" style={{ color: 'var(--text-faint)' }}>
          Click any project card to explore full details.
        </p>

        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
