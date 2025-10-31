import React from 'react';
import ProjectModalContent from './ProjectModalContent';

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        description: string;
        fullDescription: string;
        technologies: string[];
        features: string[];
        complexity: string;
        type: string;
        demoUrl: string;
        liveDemo?: string;
        highlights: string[];
        metrics: {
            duration: string;
            commits: string;
            linesOfCode: string;
        };
    };
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
    if (!isOpen) return null;

    return (
        <>
            {/* Overlay semi-transparente */}
            <div 
                className="fixed inset-0 bg-[#fb733c]/30 backdrop-blur-sm z-40 overlay"
                onClick={onClose}
            />
            
            {/* Contenido del modal */}
            <div className="fixed inset-0 z-50 flex justify-center items-center pointer-events-none modal">
                <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 relative shadow-lg pointer-events-auto max-h-[90vh] overflow-y-auto">
                    <button 
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 close-button z-10"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <ProjectModalContent project={project} />
                </div>
            </div>
        </>
    );
};

export default ProjectModal;
