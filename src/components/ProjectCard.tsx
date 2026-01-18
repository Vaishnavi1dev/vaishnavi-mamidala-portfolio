import React from 'react';
import ElectricBorder from './ElectricBorder';
import TiltedCard from './TiltedCard';
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
      <div className="rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl group" style={{ backgroundColor: 'rgb(253, 240, 213)' }}>
        <div className="relative h-48 overflow-hidden">
          <TiltedCard
            imageSrc={image}
            altText={title}
            captionText={title}
            containerHeight="192px"
            containerWidth="100%"
            imageHeight="192px"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-heading font-bold mb-2 transition-all duration-300 group-hover:text-opacity-80" style={{ color: 'rgb(97, 33, 15)' }}>
            {title}
          </h3>
          <p className="text-sm mb-4 line-clamp-2 transition-all duration-300 group-hover:text-opacity-90" style={{ color: 'rgb(97, 33, 15)' }}>
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
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
                className="cursor-target flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300"
                style={{ backgroundColor: 'rgb(97, 33, 15)', color: 'rgb(253, 240, 213)' }}
              >
                <ExternalLink size={16} />
                {liveUrl.includes('instagram.com') ? 'View Work' : 'Live Demo'}
              </a>
            )}
            {githubUrl && githubUrl !== '#' && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 border"
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
