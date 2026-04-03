'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const lettersRef = useRef<HTMLSpanElement[]>([])
  const lineRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 0.7,
          ease: 'power3.inOut',
          onComplete,
        })
      },
    })

    // Letters stagger in
    tl.fromTo(
      lettersRef.current,
      { y: 60, opacity: 0, skewY: 8 },
      { y: 0, opacity: 1, skewY: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out' }
    )
    .fromTo(lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.5, ease: 'power2.inOut' },
      '-=0.2'
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
      '-=0.2'
    )
    .to({}, { duration: 0.6 }) // hold
    // Glitch flash before exit
    .to(lettersRef.current, {
      color: '#E8190A',
      duration: 0.08,
      stagger: 0.04,
    })
    .to(lettersRef.current, {
      color: '#fff',
      duration: 0.08,
      stagger: 0.04,
    })
    .to({}, { duration: 0.2 })
  }, [onComplete])

  return (
    <div
      ref={containerRef}
      id="preloader"
      className="scanlines noise-bg"
      style={{ background: '#0A0C14' }}
    >
      {/* Corner accents */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-tf-red opacity-60" />
      <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-tf-yellow opacity-60" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-tf-yellow opacity-60" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-tf-red opacity-60" />

      <div className="flex flex-col items-center gap-4">
        {/* Y E A D letters */}
        <div className="flex gap-3 md:gap-5" aria-label="YEAD">
          {['Y', 'E', 'A', 'D'].map((letter, i) => (
            <span
              key={letter}
              ref={el => { if (el) lettersRef.current[i] = el }}
              className="font-orbitron text-white select-none"
              style={{
                fontSize: 'clamp(3.5rem, 12vw, 7rem)',
                fontWeight: 900,
                lineHeight: 1,
                display: 'block',
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Scan line */}
        <div
          ref={lineRef}
          style={{
            height: '2px',
            width: '100%',
            background: 'linear-gradient(90deg, transparent, #E8190A, #F5C400, transparent)',
            transformOrigin: 'left',
          }}
        />

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="font-mono text-tf-chrome text-xs tracking-[0.35em] uppercase"
        >
          Frontend Developer
        </p>
      </div>
    </div>
  )
}
