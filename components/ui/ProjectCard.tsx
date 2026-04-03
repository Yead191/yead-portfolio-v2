'use client'

import { useState } from 'react'
import { ExternalLink, Github, Users, User } from 'lucide-react'
import type { Project } from '@/lib/projects'
import ProjectModal from './ProjectModal'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div
        className="border card-glow flex flex-col h-full cursor-pointer group"
        style={{
          borderColor: 'var(--border)',
          background: 'var(--bg-card)',
        }}
        onClick={() => setModalOpen(true)}
      >
        {/* Mock browser chrome */}
        <div
          className="relative h-40 overflow-hidden flex items-center justify-center"
          style={{ background: project.mockColor }}
        >
          {/* Browser dots */}
          <div className="absolute top-3 left-3 flex gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ background: project.accentColor, opacity: 0.7 }} />
            <div className="w-2 h-2 rounded-full bg-white opacity-20" />
            <div className="w-2 h-2 rounded-full bg-white opacity-20" />
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r" style={{ borderColor: project.accentColor, opacity: 0.5 }} />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l" style={{ borderColor: project.accentColor, opacity: 0.5 }} />

          {/* Project title in mock */}
          <div className="text-center px-6">
            <p
              className="font-orbitron text-lg font-700 tracking-wider"
              style={{ color: project.accentColor }}
            >
              {project.title.toUpperCase()}
            </p>
            <p className="font-mono text-xs mt-1 opacity-40 text-white">{project.subtitle}</p>
          </div>

          {/* Scan line effect */}
          <div
            className="absolute inset-x-0 h-px opacity-40 pointer-events-none"
            style={{
              background: project.accentColor,
              top: '50%',
              boxShadow: `0 0 8px ${project.accentColor}`,
            }}
          />

          {/* Hover overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ background: 'rgba(0,0,0,0.6)' }}
          >
            <span className="font-orbitron text-xs tracking-widest text-white border border-white px-4 py-2">
              VIEW DETAILS
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          {/* Meta row */}
          <div className="flex items-center justify-between mb-3">
            <span
              className="font-mono text-xs tracking-wider px-2 py-0.5 flex items-center gap-1"
              style={{
                color: project.type === 'team' ? 'var(--accent-2)' : 'var(--chrome)',
                border: `1px solid ${project.type === 'team' ? 'var(--accent-2)' : 'var(--border)'}`,
              }}
            >
              {project.type === 'team' ? <Users size={10} /> : <User size={10} />}
              {project.type === 'team' ? 'TEAM' : 'SOLO'}
            </span>
            <span className="font-mono text-xs" style={{ color: 'var(--text-faint)' }}>
              0{index + 1}
            </span>
          </div>

          <h3 className="font-orbitron text-base font-700 tracking-wide mb-1" style={{ color: 'var(--text)' }}>
            {project.title}
          </h3>
          <p className="font-rajdhani text-sm font-500 mb-3" style={{ color: 'var(--accent-2)' }}>
            {project.subtitle}
          </p>
          <p className="font-rajdhani text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--text-muted)' }}>
            {project.description}
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techs.slice(0, 5).map(t => (
              <span
                key={t}
                className="font-mono text-xs px-2 py-0.5"
                style={{
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-faint)',
                  border: '1px solid var(--border)',
                }}
              >
                {t}
              </span>
            ))}
            {project.techs.length > 5 && (
              <span className="font-mono text-xs px-2 py-0.5" style={{ color: 'var(--text-faint)' }}>
                +{project.techs.length - 5}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 mt-auto">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="flex items-center gap-1.5 font-mono text-xs transition-colors duration-200"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)' }}
            >
              <ExternalLink size={12} /> LIVE
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="flex items-center gap-1.5 font-mono text-xs transition-colors duration-200"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)' }}
            >
              <Github size={12} /> CODE
            </a>
          </div>
        </div>
      </div>

      {modalOpen && (
        <ProjectModal project={project} onClose={() => setModalOpen(false)} />
      )}
    </>
  )
}
