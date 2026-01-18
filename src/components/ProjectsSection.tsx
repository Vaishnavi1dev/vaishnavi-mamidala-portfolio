import React from 'react';
import AnimatedContent from './AnimatedContent';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Realtime Quiz Hub',
    description: 'An interactive real-time quiz platform where users can create, join, and participate in live quizzes with instant scoring and leaderboards.',
    image: '/realtime-quiz-hub.png',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Real-time'],
    liveUrl: 'https://realtime-quiz-hub.vercel.app/',
    githubUrl: 'https://github.com/Vaishnavi1dev/realtime-quiz-hub',
  },
  {
    title: 'Rail-AI',
    description: 'An AI-powered railway management system that optimizes train schedules, predicts delays, and enhances passenger experience through intelligent automation.',
    image: '/rail-ai.png',
    tags: ['Python', 'Machine Learning', 'AI', 'Railway System', 'Data Analytics'],
    liveUrl: 'https://rail-ai.vercel.app/',
    githubUrl: 'https://github.com/Vaishnavi1dev/rail-ai',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing my skills in web development, video editing, and design with interactive animations.',
    image: '/portfolio.png',
    tags: ['React', 'TypeScript', 'GSAP', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://vaishnavi-mamidala-portfolio.vercel.app/',
    githubUrl: 'https://github.com/Vaishnavi1dev',
  },
  {
    title: 'Video Editing Projects',
    description: 'A collection of professional video editing work including motion graphics, promotional videos, and creative content using DaVinci Resolve.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
    tags: ['DaVinci Resolve', 'Motion Graphics', 'Video Editing', 'Creative Design'],
    liveUrl: 'https://www.instagram.com/vaishnavieee.m/',
    githubUrl: '#',
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen w-full py-24 relative" style={{ backgroundColor: 'rgb(97, 33, 15)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedContent distance={80} direction="vertical" reverse duration={1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4" style={{ color: 'rgb(253, 240, 213)' }}>
              Featured <span style={{ color: 'rgb(253, 240, 213)' }}>Projects</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgb(253, 240, 213)' }}>
              Showcasing my recent work in web development, AI, and creative design.
            </p>
          </div>
        </AnimatedContent>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedContent
              key={project.title}
              distance={100}
              direction="horizontal"
              reverse={index % 2 === 0}
              duration={1}
              delay={index * 0.1}
            >
              <ProjectCard {...project} />
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
