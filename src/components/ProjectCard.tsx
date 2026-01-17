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
      color="rgb(253, 240, 213)"
      speed={1.5}
      chaos={0.4}
      thickness={2}
      style={{ borderRadius: 16 }}
      className="group"
    >
      <div className="rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105" style={{ backgroundColor: 'rgb(253, 240, 213)' }}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-heading font-bold mb-2 transition-colors" style={{ color: 'rgb(97, 33, 15)' }}>
            {title}
          </h3>
          <p className="text-sm mb-4 line-clamp-2" style={{ color: 'rgb(97, 33, 15)' }}>
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full"
                style={{ backgroundColor: 'rgb(97, 33, 15)', color: 'rgb(253, 240, 213)' }}
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
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300"
                style={{ backgroundColor: 'rgb(97, 33, 15)', color: 'rgb(253, 240, 213)' }}
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
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 border"
                style={{ backgroundColor: 'transparent', color: 'rgb(97, 33, 15)', borderColor: 'rgb(97, 33, 15)' }}
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
