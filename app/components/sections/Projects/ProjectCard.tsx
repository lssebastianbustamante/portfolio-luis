"use client";
import { FormattedMessage, useIntl } from 'react-intl';

interface Props {
    title: string
    link: string
    description: string
    stack: string
    complexity: string
    type: string
    onViewDetails: () => void
}

const ProjectCard: React.FC<Props> = ({ title, description, link, stack, complexity, type, onViewDetails }) => {
    const getComplexityColor = (complexity: string) => {
        switch (complexity) {
            case 'Avanzado':
  return 'bg-gradient-to-r from-red-500 to-orange-500';
            case 'Intermedio':
                return 'bg-gradient-to-r from-yellow-500 to-orange-500';
            case 'Principiante':
                return 'bg-gradient-to-r from-green-500 to-teal-500';
            default:
                return 'bg-gradient-to-r from-blue-500 to-purple-500';
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'Full-stack':
                return 'bg-gradient-to-r from-purple-500 to-pink-500';
            case 'Frontend':
                return 'bg-gradient-to-r from-blue-500 to-cyan-500';
            case 'Backend':
                return 'bg-gradient-to-r from-green-500 to-emerald-500';
            case 'Mobile':
                return 'bg-gradient-to-r from-indigo-500 to-purple-500';
            default:
                return 'bg-gradient-to-r from-gray-500 to-slate-500';
        }
    };

    return (
        <div className="project-card border rounded-xl p-6 shadow-md hover:shadow-lg hover:shadow-[#93b7be] transition-all bg-white">
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-[#000000] group-hover:text-[#fb733c] transition-colors">{title}</h3>
                {/* <div className="type flex gap-2">
                    <span className={`px-2 py-1 text-white text-xs font-medium rounded-full ${getComplexityColor(complexity)}`}>
                        {complexity}
                    </span>
                    <span className={`px-2 py-1 text-white text-xs font-medium rounded-full ${getTypeColor(type)}`}>
                        {type}
                    </span>
                </div> */}
            </div>
            
            <p className="text-[#4b4f58] mb-3 leading-relaxed line-clamp-3">{description}</p>
            
            <div className="mb-4 tech">
                <p className="text-sm text-[#6b7280] mb-2 italic">Stack:</p>
                <div className="flex flex-wrap gap-1">
                    {stack.split(', ').map((tech, index) => (
                        <span 
                            key={index} 
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex gap-2">
                <button
                    onClick={onViewDetails}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-[#e95b2f] to-[#f97316] text-white rounded-lg font-medium hover:from-[#d94c20] hover:to-[#e8640f] transition-all shadow-md hover:shadow-lg"
                >
                    Ver Detalles
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;