import React from 'react';

interface Props {
    title: string
    link: string
    stack: string
    description: string
}

const ProjectCard: React.FC<Props> = ({ title, description, link, stack }) => {
    return (
        <div className="project-card border rounded-xl p-6 shadow-md hover:shadow-lg hover:shadow-[#93b7be] transition-all bg-white">
          <h3 className="text-xl font-semibold mb-2 text-[#000000]">{title}</h3>
          <p className="text-[#4b4f58] mb-3 leading-relaxed">{description}</p>
          <p className="text-sm text-[#6b7280] mb-3 italic stack">Stack: {stack}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            <span>
            Ver en GitHub
            </span>
          </a>
        </div>
      );
};

export default ProjectCard;