# Portfolio Website

A modern, interactive portfolio website built with React, TypeScript, and cutting-edge web technologies.

## Features

- ✨ **Glassmorphism Design** - Beautiful frosted glass effects throughout
- 🎨 **3D Graphics** - Interactive Three.js scenes and animations
- 🌊 **Smooth Animations** - GSAP-powered scroll effects and transitions
- 📱 **Responsive Design** - Optimized for all devices
- ⚡ **Performance Optimized** - Fast loading and smooth interactions
- 🎯 **Modern Stack** - React 18, TypeScript, Vite, Tailwind CSS

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: GSAP, Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Build Tool**: Vite
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── HeroSection.tsx # Hero section with 3D graphics
│   ├── AboutSection.tsx# About section
│   ├── ProjectsSection.tsx # Projects showcase
│   ├── SkillsSection.tsx   # Skills display
│   └── ContactSection.tsx  # Contact form
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── styles/             # Global styles

```

## Customization

### Colors and Theme

The project uses CSS custom properties for theming. You can modify the color scheme in `src/index.css`:

```css
:root {
  --primary: 186 100% 72%;
  --background: 220 20% 4%;
  /* ... other variables */
}
```

### Glassmorphism Effects

The project includes several glassmorphism utility classes:

- `.glass` - Standard glass effect
- `.glass-card` - Card-style glass
- `.glass-subtle` - Subtle glass effect
- `.glass-intense` - Strong glass effect
- `.glass-hover` - Hover animations

## Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## License

This project is open source and available under the [MIT License](LICENSE).