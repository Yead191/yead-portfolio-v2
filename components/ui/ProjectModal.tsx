'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { X, ExternalLink, Github, CheckCircle, Users, User } from 'lucide-react'
import type { Project } from '@/lib/projects'

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.classList.add('modal-open')
    const tl = gsap.timeline()
    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'power2.out' })
    tl.fromTo(panelRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35, ease: 'power3.out' }, '-=0.1')

    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.classList.remove('modal-open')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClose = () => {
    gsap.timeline({
      onComplete: () => {
        document.body.classList.remove('modal-open')
        onClose()
      }
    })
    .to(panelRef.current, { y: 20, opacity: 0, duration: 0.25, ease: 'power2.in' })
    .to(overlayRef.current, { opacity: 0, duration: 0.2 }, '-=0.1')
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => { if (e.target === overlayRef.current) handleClose() }}
    >
      <div
        ref={panelRef}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto border"
        style={{
          background: 'var(--bg-card)',
          borderColor: 'var(--border)',
        }}
      >
        {/* Top accent line */}
        <div className="h-0.5 w-full" style={{ background: project.accentColor }} />

        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border transition-colors duration-200 z-10"
          style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'; (e.currentTarget as HTMLElement).style.color = 'var(--accent)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)' }}
        >
          <X size={14} />
        </button>

        {/* Header visual */}
        <div
          className="relative h-44 flex items-center justify-center overflow-hidden"
          style={{ background: project.mockColor }}
        >
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute top-4 left-4 w-10 h-10 border-t border-l" style={{ borderColor: project.accentColor, opacity: 0.6 }} />
          <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r" style={{ borderColor: project.accentColor, opacity: 0.6 }} />

          <div className="text-center z-10">
            <p className="font-orbitron text-2xl font-800 tracking-widest mb-2" style={{ color: project.accentColor }}>
              {project.title.toUpperCase()}
            </p>
            <p className="font-rajdhani text-sm tracking-widest text-white opacity-50">{project.subtitle}</p>
          </div>

          {/* Type badge */}
          <div
            className="absolute top-4 right-12 font-mono text-xs px-2 py-0.5 flex items-center gap-1"
            style={{
              color: project.type === 'team' ? '#F5C400' : '#8A9BB0',
              border: `1px solid ${project.type === 'team' ? '#F5C400' : '#3A4558'}`,
              background: 'rgba(0,0,0,0.3)',
            }}
          >
            {project.type === 'team' ? <Users size={10} /> : <User size={10} />}
            {project.type === 'team' ? 'TEAM PROJECT' : 'SOLO PROJECT'}
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-7">
          {/* Description */}
          <div>
            <h3 className="font-orbitron text-xs tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
              OVERVIEW
            </h3>
            <p className="font-rajdhani text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {project.longDesc}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="font-orbitron text-xs tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
              KEY HIGHLIGHTS
            </h3>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={14} className="shrink-0 mt-0.5" style={{ color: project.accentColor }} />
                  <span className="font-rajdhani text-base" style={{ color: 'var(--text-muted)' }}>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div>
            <h3 className="font-orbitron text-xs tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
              TECH STACK
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techs.map(t => (
                <span
                  key={t}
                  className="font-mono text-xs px-3 py-1"
                  style={{
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* CTA row */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-orbitron text-xs tracking-widest px-6 py-3 transition-opacity duration-200 hover:opacity-80"
              style={{
                background: project.accentColor,
                color: '#fff',
                clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
              }}
            >
              <ExternalLink size={13} /> LIVE DEMO
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-orbitron text-xs tracking-widest px-6 py-3 border transition-all duration-200"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text-muted)',
                clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--text)'; (e.currentTarget as HTMLElement).style.color = 'var(--text)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)' }}
            >
              <Github size={13} /> VIEW CODE
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
