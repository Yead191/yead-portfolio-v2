# Asadur Rahaman Yead — Portfolio

A modern, Transformers-inspired portfolio built with **Next.js 14**, **GSAP**, and **Tailwind CSS**.

## Features

- 🤖 Transformers-inspired geometric UI elements & color palette
- ⚡ GSAP scroll-triggered animations (no bloat)
- 🌗 Dark / Light mode toggle with system preference detection
- 🎬 Animated "YEAD" preloader on first visit
- 🔷 Unique Orbitron-font navbar with hex logo
- 📱 Fully responsive across all screen sizes
- 🔲 Project detail modals with highlights & tech stack
- 📄 IEEE publication section
- 🎨 Custom CSS design tokens (no heavy gradient abuse)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + custom CSS variables
- **Animation**: GSAP + ScrollTrigger
- **Fonts**: Orbitron, Rajdhani, JetBrains Mono (Google Fonts)
- **Icons**: Lucide React
- **Theme**: Custom ThemeProvider (no external library)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

```bash
npx vercel
```

Or push to GitHub and import the repo on [vercel.com](https://vercel.com).

## Customization

- **Content**: Edit section files in `/components/sections/`
- **Projects**: Update `/lib/projects.ts`
- **Colors**: Edit CSS variables in `/app/globals.css`
- **Fonts**: Change in `/app/layout.tsx`

## Color Palette

| Token | Dark | Light | Purpose |
|-------|------|-------|---------|
| `--accent` | `#E8190A` | `#E8190A` | Optimus Red |
| `--accent-2` | `#F5C400` | `#F5C400` | Bumblebee Yellow |
| `--bg` | `#0A0C14` | `#F0F2F7` | Base background |
| `--chrome` | `#8A9BB0` | `#8A9BB0` | Steel chrome muted |

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout + fonts
│   ├── page.tsx            # Main page + preloader logic
│   └── globals.css         # Design tokens + utilities
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Unique TF-inspired navbar
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Publications.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Preloader.tsx   # YEAD animated intro
│       ├── ThemeProvider.tsx
│       ├── ProjectCard.tsx
│       └── ProjectModal.tsx
└── lib/
    └── projects.ts         # All project data
```
