# Vaishnavi Mamidala - Portfolio Website

A modern, interactive portfolio website showcasing my skills as a Video Editor, Designer & Developer. Built with React, TypeScript, and cutting-edge web technologies.

## 🚀 Live Demo

**[View Live Portfolio](https://vaishnavi-mamidala-portfolio.vercel.app/)**

## 👋 About Me

I'm Vaishnavi Mamidala, a passionate 2nd year B.Tech student at Keshav Memorial Engineering College, Hyderabad. I specialize in:

- 💻 **Web Development** - Full-stack applications with MERN stack
- 🎬 **Video Editing** - Professional content creation with DaVinci Resolve
- 🎨 **UI/UX Design** - Modern interfaces with Figma and creative tools
- 🤖 **AI/ML Projects** - Intelligent systems and data analytics

## 🌟 Featured Projects

- **[Realtime Quiz Hub](https://realtime-quiz-hub.vercel.app/)** - Interactive real-time quiz platform
- **[Rail-AI](https://rail-ai.vercel.app/)** - AI-powered railway management system
- **[Video Editing Work](https://www.instagram.com/vaishnavieee.m/)** - Creative content on Instagram

## ✨ Features

- ✨ **Modern Design** - Clean, professional interface with cream/brown theme
- 🎯 **Interactive Animations** - GSAP-powered scroll effects and transitions
- 📱 **Responsive Design** - Optimized for all devices and screen sizes
- ⚡ **Performance Optimized** - Fast loading with Vite build system
- 🎨 **Visual Effects** - Custom terminal effects and animated backgrounds
- 🌐 **Real Projects** - Showcases actual deployed applications

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Custom CSS animations
- **Animations**: GSAP (GreenSock)
- **Graphics**: OGL for terminal effects
- **Icons**: Lucide React
- **Deployment**: Vercel

## � Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Vaishnavi1dev/vaishnavi-mamidala-portfolio.git
cd vaishnavi-mamidala-portfolio
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

## 🚀 Deployment

This portfolio is deployed on Vercel. To deploy your own version:

1. Fork this repository
2. Connect your GitHub account to Vercel
3. Import the project and deploy
4. Your portfolio will be live at `your-project-name.vercel.app`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── HeroSection.tsx     # Hero section with name and intro
│   ├── AboutSection.tsx    # About me and education
│   ├── SkillsSection.tsx   # Programming & creative skills
│   ├── ProjectsSection.tsx # Featured projects showcase
│   ├── ContactSection.tsx  # Contact information
│   ├── FaultyTerminal.tsx  # Terminal background effect
│   └── ...                 # Other components
├── pages/              # Page components
└── styles/             # Global styles and Tailwind config
```

## 🎨 Customization

### Theme Colors

The portfolio uses a warm cream and brown color scheme:

```css
/* Primary colors */
background: rgb(253, 240, 213) /* Cream */
text: rgb(97, 33, 15)         /* Dark Brown */
```

### Adding Your Own Projects

Update the projects array in `src/components/ProjectsSection.tsx`:

```typescript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description...',
    image: '/your-project-image.png',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://your-project.vercel.app/',
    githubUrl: 'https://github.com/yourusername/project',
  },
  // ... more projects
];
```

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run preview` - Preview production build

## 📝 License

This project is open source and available under the [MIT License](LICENSE).