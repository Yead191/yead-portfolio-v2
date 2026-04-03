import type { Metadata } from 'next'
import { Orbitron, Rajdhani, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ui/ThemeProvider'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  variable: '--font-rajdhani',
  weight: ['300', '400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Asadur Rahaman Yead — Frontend Developer',
  description: 'Portfolio of Asadur Rahaman Yead, a Frontend Developer specializing in React, Next.js and modern web technologies.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'Tailwind CSS', 'Bangladesh'],
  authors: [{ name: 'Asadur Rahaman Yead' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${orbitron.variable} ${rajdhani.variable} ${jetbrainsMono.variable} font-rajdhani antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
