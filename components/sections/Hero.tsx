'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.fromTo(badgeRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' })
        .fromTo(titleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.2')
        .fromTo(subRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.3')
        .fromTo(socialRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }, '-=0.2')
        .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }, '-=0.2')
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 hex-bg noise-bg overflow-hidden"
    >
      {/* Background geometric accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 md:w-[520px] md:h-[520px] opacity-5 dark:opacity-[0.07]"
        aria-hidden
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <polygon points="200,20 380,110 380,290 200,380 20,290 20,110" fill="none" stroke="var(--accent)" strokeWidth="2" />
          <polygon points="200,50 350,130 350,270 200,350 50,270 50,130" fill="none" stroke="var(--accent-2)" strokeWidth="1" />
          <polygon points="200,100 300,155 300,245 200,300 100,245 100,155" fill="none" stroke="var(--accent)" strokeWidth="1" />
          <line x1="200" y1="20" x2="200" y2="380" stroke="var(--chrome)" strokeWidth="0.5" opacity="0.4" />
          <line x1="20" y1="110" x2="380" y2="290" stroke="var(--chrome)" strokeWidth="0.5" opacity="0.4" />
          <line x1="20" y1="290" x2="380" y2="110" stroke="var(--chrome)" strokeWidth="0.5" opacity="0.4" />
        </svg>
      </div>

      {/* Left decorative bar */}
      <div
        className="absolute left-0 top-1/4 bottom-1/4 w-0.5 opacity-30"
        style={{ background: 'var(--accent)' }}
      />

      <div className="relative z-10 max-w-4xl w-full">
        {/* Badge */}
        <div ref={badgeRef} className="mb-6">
          <span
            className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase px-4 py-1.5 rounded-none border"
            style={{ borderColor: 'var(--accent-2)', color: 'var(--accent-2)', background: 'rgba(245,196,0,0.06)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          ref={titleRef}
          className="font-orbitron font-900 leading-none mb-4"
          style={{ fontSize: 'clamp(2.4rem, 7vw, 5.5rem)', color: 'var(--text)' }}
        >
          ASADUR<br />
          <span style={{ color: 'var(--accent)' }}>RAHAMAN</span><br />
          YEAD
        </h1>

        {/* Designation */}
        <p
          ref={subRef}
          className="font-rajdhani text-xl md:text-2xl font-500 tracking-widest mb-8"
          style={{ color: 'var(--text-muted)' }}
        >
          FRONT-END DEVELOPER
        </p>

        {/* Social links */}
        <div ref={socialRef} className="flex items-center gap-4 mb-10">
          {[
            { href: 'https://github.com/Yead191', icon: Github, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/md-asadur-rahaman-yead/', icon: Linkedin, label: 'LinkedIn' },
            { href: 'mailto:yead191@gmail.com', icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center border transition-all duration-200 hover:border-accent"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text-muted)',
                background: 'var(--bg-card)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'
                ;(e.currentTarget as HTMLElement).style.color = 'var(--accent)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                ;(e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'
              }}
            >
              <Icon size={16} />
            </a>
          ))}
          <div className="w-16 h-px" style={{ background: 'var(--border)' }} />
          <span className="font-mono text-xs" style={{ color: 'var(--text-faint)' }}>yead191@gmail.com</span>
        </div>

        {/* CTA row */}
        <div ref={ctaRef} className="flex flex-wrap gap-4">
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-orbitron text-xs tracking-widest px-8 py-3.5 transition-all duration-200"
            style={{
              background: 'var(--accent)',
              color: '#fff',
              clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
          >
            VIEW PROJECTS
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-orbitron text-xs tracking-widest px-8 py-3.5 border transition-all duration-200"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--text-muted)',
              clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'
              ;(e.currentTarget as HTMLElement).style.color = 'var(--text)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
              ;(e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'
            }}
          >
            CONTACT ME
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--text-faint)' }}>SCROLL</span>
        <ChevronDown size={16} style={{ color: 'var(--text-faint)' }} className="animate-bounce" />
      </div>
    </section>
  )
}
