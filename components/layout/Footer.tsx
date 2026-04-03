export default function Footer() {
  return (
    <footer
      className="py-8 px-6 border-t"
      style={{
        borderColor: 'var(--border)',
        background: 'var(--bg)',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 32 32">
            <polygon points="16,2 28,9 28,23 16,30 4,23 4,9" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
            <text x="16" y="20" textAnchor="middle" fill="var(--accent)" fontSize="9" fontFamily="var(--font-orbitron)" fontWeight="700">Y</text>
          </svg>
          <span className="font-orbitron text-xs tracking-widest" style={{ color: 'var(--text-faint)' }}>
            YEAD
          </span>
        </div>

        {/* Center text */}
        <p className="font-mono text-xs" style={{ color: 'var(--text-faint)' }}>
          © {new Date().getFullYear()} Asadur Rahaman Yead. All rights reserved.
        </p>

        {/* Right: tagline */}
        <p className="font-mono text-xs" style={{ color: 'var(--text-faint)' }}>
          Built with Next.js & GSAP
        </p>
      </div>
    </footer>
  )
}
