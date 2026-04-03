'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FileText, ExternalLink } from 'lucide-react'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

export default function Publications() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.55, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="publications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>05</span>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: 'var(--accent)' }} />
          <h2 className="font-orbitron text-2xl md:text-3xl font-700 tracking-wider section-title" style={{ color: 'var(--text)' }}>
            RESEARCH & PUBLICATIONS
          </h2>
        </div>

        <div ref={cardRef}>
          <div
            className="border card-glow p-6 md:p-8 max-w-3xl"
            style={{
              borderColor: 'var(--border)',
              background: 'var(--bg-card)',
            }}
          >
            {/* IEEE badge */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 flex items-center justify-center border"
                style={{ borderColor: 'var(--accent)', background: 'rgba(232,25,10,0.07)' }}
              >
                <FileText size={18} style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <p className="font-orbitron text-xs tracking-widest" style={{ color: 'var(--accent)' }}>
                  IEEE XPLORE
                </p>
                <p className="font-mono text-xs" style={{ color: 'var(--text-faint)' }}>
                  2024 Publication
                </p>
              </div>
            </div>

            <h3 className="font-orbitron text-base md:text-lg font-700 leading-snug tracking-wide mb-3" style={{ color: 'var(--text)' }}>
              Deep Learning-Based Classification of Sugarcane Leaf Disease
            </h3>

            <p className="font-rajdhani text-sm mb-4" style={{ color: 'var(--text-faint)' }}>
              2024 6th International Conference on Electrical Engineering and Information & Communication Technology
            </p>

            <p className="font-rajdhani text-base leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
              This paper explores the application of deep learning models — including ResNet-50 and DenseNet-201 — for
              accurately classifying sugarcane leaf diseases. The research demonstrates significant improvement in
              agricultural disease detection accuracy through convolutional neural network architectures.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {['Deep Learning', 'ResNet-50', 'DenseNet-201', 'Image Classification', 'Agriculture AI'].map(tag => (
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

            <a
              href="https://ieeexplore.ieee.org/document/10534551"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-orbitron text-xs tracking-widest px-6 py-3 transition-opacity duration-200 hover:opacity-80"
              style={{
                background: 'var(--accent)',
                color: '#fff',
                clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
              }}
            >
              <ExternalLink size={12} /> VIEW ON IEEE XPLORE
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
