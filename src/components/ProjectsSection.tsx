import React from 'react';
import AnimatedContent from './AnimatedContent';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'AI Chat Application',
    description: 'Real-time chat application powered by AI with natural language processing and smart responses.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tags: ['Next.js', 'OpenAI', 'WebSocket', 'Prisma'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: '3D Portfolio Website',
    description: 'Interactive portfolio with Three.js animations, GSAP scroll effects, and immersive user experience.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
    tags: ['Three.js', 'React', 'GSAP', 'WebGL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, drag-and-drop interface, and team collaboration.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'Firebase', 'Vuex', 'Tailwind'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Music Streaming Platform',
    description: 'Spotify-inspired music player with playlist management, audio visualization, and social features.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop',
    tags: ['React', 'Redux', 'Web Audio API', 'Node.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Fitness Tracker',
    description: 'Health and fitness app with workout tracking, progress visualization, and personalized recommendations.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    tags: ['React Native', 'GraphQL', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section-container">
      <AnimatedContent distance={80} direction="vertical" reverse duration={1}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of my recent work showcasing my skills in web development,
            design, and problem-solving.
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
    </section>
  );
};

export default ProjectsSection;
