import React from 'react';
import { FormattedMessage } from 'react-intl';

interface ProjectModalContentProps {
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

const ProjectModalContent: React.FC<ProjectModalContentProps> = ({ project }) => {
    const getComplexityColor = (complexity: string) => {
        switch (complexity) {
            case 'projects.complexity.advanced':
                return 'bg-gradient-to-r from-red-500 to-orange-500';
            case 'projects.complexity.intermediate':
                return 'bg-gradient-to-r from-yellow-500 to-orange-500';
            case 'projects.complexity.beginner':
                return 'bg-gradient-to-r from-green-500 to-teal-500';
            default:
                return 'bg-gradient-to-r from-blue-500 to-purple-500';
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'projects.type.fullstack':
                return 'bg-gradient-to-r from-purple-500 to-pink-500';
            case 'projects.type.frontend':
                return 'bg-gradient-to-r from-blue-500 to-cyan-500';
            case 'projects.type.backend':
                return 'bg-gradient-to-r from-green-500 to-emerald-500';
            case 'projects.type.mobile':
                return 'bg-gradient-to-r from-indigo-500 to-purple-500';
            default:
                return 'bg-gradient-to-r from-gray-500 to-slate-500';
        }
    };

    return (
        <div className="space-y-6 opacity-100 modal-content">
            <div className="text-center border-b border-gray-200 pb-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2"><FormattedMessage id={project.title} /></h2>
                <div className="flex justify-center items-center gap-4 flex-wrap">
                    <span className={`px-3 py-1 text-white text-sm font-medium rounded-full ${getComplexityColor(project.complexity)}`}>
                        <FormattedMessage id={project.complexity} />
                    </span>
                    <span className={`px-3 py-1 text-white text-sm font-medium rounded-full ${getTypeColor(project.type)}`}>
                        <FormattedMessage id={project.type} />
                    </span>
                </div>
            </div>

            {/* <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4">
                    <div className="text-2xl mb-2">⏱️</div>
                    <h4 className="font-semibold text-gray-800 mb-1"><FormattedMessage id="projects.modal.metrics.duration" /></h4>
                    <p className="text-lg font-bold text-blue-600">{project.metrics.duration}</p>
                </div>
                <div className="text-center bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-4">
                    <div className="text-2xl mb-2">📊</div>
                    <h4 className="font-semibold text-gray-800 mb-1"><FormattedMessage id="projects.modal.metrics.commits" /></h4>
                    <p className="text-lg font-bold text-green-600">{project.metrics.commits}</p>
                </div>
                <div className="text-center bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4">
                    <div className="text-2xl mb-2">💻</div>
                    <h4 className="font-semibold text-gray-800 mb-1"><FormattedMessage id="projects.modal.metrics.linesOfCode" /></h4>
                    <p className="text-lg font-bold text-orange-600">{project.metrics.linesOfCode}</p>
                </div>
            </div> */}

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="text-xl mr-2">📋</span>
                    <FormattedMessage id="projects.modal.sections.description" />
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                    <FormattedMessage id={project.fullDescription} />
                </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="text-xl mr-2">🛠️</span>
                    <FormattedMessage id="projects.modal.sections.technologies" />
                </h4>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm border border-gray-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="text-xl mr-2">✨</span>
                    <FormattedMessage id="projects.modal.sections.features" />
                </h4>
                <div className="space-y-2">
                    {project.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-gray-700">
                            <span className="text-green-500 mr-2">✓</span>
                            <FormattedMessage id={feature} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="text-xl mr-2">🎯</span>
                    <FormattedMessage id="projects.modal.sections.highlights" />
                </h4>
                <div className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center text-gray-700">
                            <span className="text-yellow-500 mr-2">⭐</span>
                            <FormattedMessage id={highlight} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex gap-4 justify-center">
                <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-[#e95b2f] to-[#f97316] text-white rounded-lg font-medium hover:shadow-xl"
                >
                    <FormattedMessage id="projects.modal.buttons.github" />
                </a>
                {project.liveDemo && (
                    <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl"
                    >
                        <FormattedMessage id="projects.modal.buttons.liveDemo" />
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectModalContent;
