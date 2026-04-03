export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  longDesc: string
  type: 'personal' | 'team'
  techs: string[]
  github: string
  live: string
  highlights: string[]
  mockColor: string
  accentColor: string
}

export const projects: Project[] = [
  {
    id: 'spiralink',
    title: 'Spiralink',
    subtitle: 'Call Center Engineering Platform',
    description:
      'Modern responsive frontend for SpiraLink — an engineering-driven call center solution. Focused on clean UI/UX, scalability, and AI-powered workflow readiness.',
    longDesc:
      'Designed and developed a modern, responsive frontend interface for SpiraLink, focused on clearly presenting its vision of delivering engineering-driven solutions for call centers. Emphasized clean UI/UX, scalability, and seamless user interaction to support future integration of AI-powered workflows and backend systems. The site communicates a strong technical brand with a professional layout and engaging component design.',
    type: 'personal',
    techs: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'Ant Design', 'Socket.io', 'Swiper', 'AOS'],
    github: 'https://github.com/Yead191/spiralink-new',
    live: 'https://spiralink-new.vercel.app/',
    highlights: [
      'Engineered responsive layouts supporting all screen sizes',
      'Integrated AOS scroll animations for engaging UX',
      'Designed component system with Ant Design & Tailwind',
      'Real-time ready architecture with Socket.io integration',
    ],
    mockColor: '#0F1621',
    accentColor: '#E8190A',
  },
  {
    id: 'kashem-optical',
    title: 'Kashem Optical',
    subtitle: 'Lens Selling E-Commerce App',
    description:
      'Feature-rich lens selling web application with cart management, order tracking, patient prescription handling, and detailed sales reporting.',
    longDesc:
      'Kashem Optical is a modern, responsive, and feature-rich lens selling web application. It offers a seamless user experience for both customers and administrators, with functionalities including cart management, order tracking, patient prescription handling, and detailed sales reporting. Firebase authentication and Recharts-powered dashboards make this a full-featured business solution.',
    type: 'personal',
    techs: ['React 19', 'React Router DOM', 'Tailwind CSS', 'ShadCN', 'DaisyUI', 'Firebase', 'Axios', 'React Query', 'Recharts', 'Framer Motion', 'Vite'],
    github: 'https://github.com/Yead191/kashem-optical-client',
    live: 'https://kashem-optical.vercel.app/',
    highlights: [
      'Full cart & order management system for customers',
      'Admin dashboard with Recharts sales analytics',
      'Patient prescription handling module',
      'Firebase Auth with protected routes',
    ],
    mockColor: '#111827',
    accentColor: '#F5C400',
  },
  {
    id: 'mui-kit',
    title: 'MUI Kit',
    subtitle: 'Open-Source MUI Component Library',
    description:
      'Open-source Material-UI component library with wide-ranging design variants for Button, Modal, Popover and more — team project.',
    longDesc:
      'MUI KIT is an open-source Material-UI (MUI) component library built with Next.js, offering a wide range of design variants for core MUI components like Button, Modal, Popover, and more. The goal is to provide developers with flexible, customizable, and visually diverse components to enhance their React applications. Built as a team collaboration, it features a GSAP-animated showcase, live component editor, and Zustand state management.',
    type: 'team',
    techs: ['Next.js', 'React 19', 'TypeScript', 'Material UI', 'Emotion', 'Zustand', 'React Query', 'TipTap Editor', 'DnD Kit', 'GSAP', 'Axios'],
    github: 'https://github.com/codemine24/mui-kit',
    live: 'https://www.muikit.com/',
    highlights: [
      'Open-source library with extensible component variants',
      'Live component editor with TipTap integration',
      'Drag-and-drop support via DnD Kit',
      'GSAP-powered showcase animations',
    ],
    mockColor: '#0D1117',
    accentColor: '#8B5CF6',
  },
  {
    id: 'care-matrix',
    title: 'Care Matrix',
    subtitle: 'Hospital Management System',
    description:
      'Robust hospital management system digitizing hospital operations — coordinating medical professionals, admins, pharmacists, and patients.',
    longDesc:
      'Care Matrix is a robust hospital management system designed to digitize and streamline hospital operations, enhance patient care, and improve operational efficiency. It facilitates seamless coordination among medical professionals, administrators, receptionists, pharmacists, and patients, ensuring optimal healthcare delivery through an intuitive and modern platform built by a collaborative dev team.',
    type: 'team',
    techs: ['React', 'Redux Toolkit', 'Tailwind CSS', 'DaisyUI', 'ShadCN', 'Stripe', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Auth', 'Framer Motion', 'Lottie'],
    github: 'https://github.com/ssmahim01/Care-Matrix-With-Dev-Sync',
    live: 'https://care-matrix.vercel.app/',
    highlights: [
      'Multi-role system: admin, doctor, receptionist, pharmacist, patient',
      'Stripe payment integration for billing',
      'MongoDB + Express REST API backend',
      'Animated UX with Framer Motion and Lottie',
    ],
    mockColor: '#050A14',
    accentColor: '#10B981',
  },
]
