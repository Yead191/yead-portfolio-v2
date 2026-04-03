'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from '@/components/ui/ThemeProvider'
import { Sun, Moon, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'ABOUT' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#experience', label: 'EXP' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#publications', label: 'RESEARCH' },
  { href: '#contact', label: 'CONTACT' },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('')
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // Active section tracking
      const sections = navLinks.map(l => document.querySelector(l.href))
      let current = ''
      sections.forEach((sec) => {
        if (!sec) return
        const rect = sec.getBoundingClientRect()
        if (rect.top <= 120) current = '#' + sec.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo — TF styled */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
            aria-label="Go to top"
          >
            {/* Autobot-inspired hex icon */}
            <div className="relative w-8 h-8 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" className="transition-transform duration-300 group-hover:rotate-180">
                <polygon
                  points="16,2 28,9 28,23 16,30 4,23 4,9"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="1.5"
                />
                <polygon
                  points="16,7 23,11 23,21 16,25 9,21 9,11"
                  fill="var(--accent)"
                  opacity="0.15"
                />
                <text
                  x="16" y="20"
                  textAnchor="middle"
                  fill="var(--accent)"
                  fontSize="9"
                  fontFamily="var(--font-orbitron)"
                  fontWeight="700"
                >Y</text>
              </svg>
            </div>
            <span className="font-orbitron text-sm font-700 tracking-widest" style={{ color: 'var(--text)' }}>
              YEAD
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`nav-link ${active === link.href ? 'active' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggle}
              className="w-9 h-9 flex items-center justify-center rounded-sm border transition-all duration-200"
              style={{
                borderColor: 'var(--border)',
                background: 'var(--bg-secondary)',
                color: 'var(--text-muted)',
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark'
                ? <Sun size={15} />
                : <Moon size={15} />
              }
            </button>

            {/* Resume CTA */}
            <a
              href="https://drive.google.com/file/d/1etPrwQe0BDP2SIVR6mZ6mvebZOX3v4W6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 font-orbitron text-xs tracking-widest transition-all duration-200"
              style={{
                background: 'var(--accent)',
                color: '#fff',
                clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
              }}
            >
              RESUME
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="md:hidden w-9 h-9 flex items-center justify-center"
              style={{ color: 'var(--text)' }}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          pointerEvents: mobileOpen ? 'all' : 'none',
          opacity: mobileOpen ? 1 : 0,
          background: 'var(--bg)',
        }}
      >
        {/* Decorative lines */}
        <div className="absolute inset-0 hex-bg opacity-30" />
        <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: 'var(--accent)' }} />

        <div className="flex flex-col items-center justify-center h-full gap-10 relative z-10">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="font-orbitron text-2xl font-700 tracking-widest transition-colors duration-200"
              style={{
                color: active === link.href ? 'var(--accent)' : 'var(--text)',
                transform: mobileOpen ? 'translateX(0)' : 'translateX(-30px)',
                transition: `transform 0.3s ${i * 0.05}s ease, color 0.2s ease, opacity 0.3s ${i * 0.05}s ease`,
                opacity: mobileOpen ? 1 : 0,
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://drive.google.com/file/d/1etPrwQe0BDP2SIVR6mZ6mvebZOX3v4W6/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-orbitron text-sm tracking-widest px-8 py-3 mt-4"
            style={{
              background: 'var(--accent)',
              color: '#fff',
              clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
            }}
          >
            RESUME
          </a>
        </div>
      </div>
    </>
  )
}
