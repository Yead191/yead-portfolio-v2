'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Github, Linkedin, Mail, ExternalLink, Send } from 'lucide-react'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      )
      gsap.fromTo(rightRef.current,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }, delay: 0.1 }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const socials = [
    {
      label: 'GitHub',
      handle: '@Yead191',
      href: 'https://github.com/Yead191',
      icon: Github,
      color: 'var(--text)',
    },
    {
      label: 'LinkedIn',
      handle: 'md-asadur-rahaman-yead',
      href: 'https://www.linkedin.com/in/md-asadur-rahaman-yead/',
      icon: Linkedin,
      color: '#0A66C2',
    },
    {
      label: 'Email',
      handle: 'yead191@gmail.com',
      href: 'mailto:yead191@gmail.com',
      icon: Mail,
      color: 'var(--accent)',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 px-6"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>06</span>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: 'var(--accent)' }} />
          <h2 className="font-orbitron text-2xl md:text-3xl font-700 tracking-wider section-title" style={{ color: 'var(--text)' }}>
            GET IN TOUCH
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: copy */}
          <div ref={leftRef} className="space-y-6">
            <p className="font-rajdhani text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              I'm open to frontend development roles, freelance projects, and interesting collaborations. Whether you
              have a product idea, a team to join, or just want to connect — I'm always up for a conversation.
            </p>
            <p className="font-rajdhani text-base leading-relaxed" style={{ color: 'var(--text-faint)' }}>
              Currently available for <span style={{ color: 'var(--accent-2)' }} className="font-600">full-time</span> and <span style={{ color: 'var(--accent-2)' }} className="font-600">freelance</span> opportunities.
            </p>

            {/* Socials */}
            <div className="space-y-3 pt-4">
              {socials.map(({ label, handle, href, icon: Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border card-glow group transition-all duration-200"
                  style={{
                    borderColor: 'var(--border)',
                    background: 'var(--bg-card)',
                  }}
                >
                  <div
                    className="w-9 h-9 flex items-center justify-center border shrink-0"
                    style={{ borderColor: 'var(--border)', color }}
                  >
                    <Icon size={15} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-orbitron text-xs tracking-widest" style={{ color: 'var(--text-faint)' }}>
                      {label}
                    </p>
                    <p className="font-rajdhani text-sm font-500 truncate" style={{ color: 'var(--text-muted)' }}>
                      {handle}
                    </p>
                  </div>
                  <ExternalLink size={13} className="opacity-0 group-hover:opacity-60 transition-opacity duration-200" style={{ color: 'var(--text-faint)' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: quick contact card */}
          <div ref={rightRef}>
            <div
              className="border p-6 md:p-8 h-full flex flex-col justify-between"
              style={{
                borderColor: 'var(--border)',
                background: 'var(--bg-card)',
              }}
            >
              {/* Top accent */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-orbitron text-xs tracking-widest" style={{ color: 'var(--accent)' }}>
                    QUICK CONNECT
                  </span>
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                </div>

                <h3 className="font-orbitron text-xl font-700 leading-snug mb-3" style={{ color: 'var(--text)' }}>
                  Let's Build Something Together
                </h3>
                <p className="font-rajdhani text-base leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                  Drop me a message directly or reach out via any of the platforms on the left. I typically respond within 24 hours.
                </p>

                {/* Email CTA */}
                <a
                  href="mailto:yead191@gmail.com"
                  className="flex items-center gap-3 w-full font-orbitron text-xs tracking-widest px-6 py-4 transition-opacity duration-200 hover:opacity-80 justify-center mb-4"
                  style={{
                    background: 'var(--accent)',
                    color: '#fff',
                    clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
                  }}
                >
                  <Send size={13} />
                  SEND EMAIL
                </a>

                {/* Resume link */}
                <a
                  href="https://drive.google.com/file/d/1etPrwQe0BDP2SIVR6mZ6mvebZOX3v4W6/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full font-orbitron text-xs tracking-widest px-6 py-4 border transition-all duration-200 justify-center"
                  style={{
                    borderColor: 'var(--border)',
                    color: 'var(--text-muted)',
                    clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-2)'
                    ;(e.currentTarget as HTMLElement).style.color = 'var(--accent-2)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                    ;(e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'
                  }}
                >
                  <ExternalLink size={13} />
                  DOWNLOAD RESUME
                </a>
              </div>

              {/* Bottom */}
              <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
                <p className="font-mono text-xs text-center" style={{ color: 'var(--text-faint)' }}>
                  Based in Bangladesh &mdash; Open to Remote
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
