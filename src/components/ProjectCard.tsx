import React from 'react';
import ElectricBorder from './ElectricBorder';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
}) => {
  return (
    <ElectricBorder
      color="#7df9ff"
      speed={1.5}
      chaos={0.4}
      thickness={2}
      style={{ borderRadius: 16 }}
      className="group"
    >
      <div className="card-gradient rounded-2xl overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-heading font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:glow-box transition-all duration-300"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-foreground text-sm font-medium hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Github size={16} />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </ElectricBorder>
  );
};

export default ProjectCard;
