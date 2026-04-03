'use client'

import { useState, useEffect } from 'react'
import Preloader from '@/components/ui/Preloader'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Publications from '@/components/sections/Publications'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Only show preloader on first visit per session
    const seen = sessionStorage.getItem('seen')
    if (seen) setLoading(false)
  }, [])

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('seen', '1')
    setLoading(false)
  }

  if (!mounted) return null

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Publications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
