"use client";
import React, { useState } from 'react';
import { useIntl } from 'react-intl';

import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import IconHeadLine from '../../common/Icons/Icons';

interface Project {
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
    stack: string;
}

const Projects: React.FC = () => {
    const intl = useIntl();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const projectList: Project[] = [
        {
            title: 'projects.wheelFortune.title',
            description: 'projects.wheelFortune.description',
            technologies: ['React', 'TypeScript', 'Node.js', 'VTEX IO', 'CSS Animations', 'Master Data', 'GraphQL'],
            fullDescription: 'projects.wheelFortune.fullDescription',
            features: [
                'projects.wheelFortune.features.0',
                'projects.wheelFortune.features.1',
                'projects.wheelFortune.features.2',
                'projects.wheelFortune.features.3',
                'projects.wheelFortune.features.4',
                'projects.wheelFortune.features.5',
                'projects.wheelFortune.features.6'
            ],
            complexity: 'projects.complexity.advanced',
            type: 'projects.type.fullstack',
            demoUrl: 'https://github.com/lssebastianbustamante/wheel-fortune',
            highlights: [
                'projects.wheelFortune.highlights.0',
                'projects.wheelFortune.highlights.1',
                'projects.wheelFortune.highlights.2',
                'projects.wheelFortune.highlights.3',
                'projects.wheelFortune.highlights.4'
            ],
            metrics: {
                duration: '3 meses',
                commits: '45+',
                linesOfCode: '2,500+'
            },
            stack: 'React, TypeScript, Node.js, VTEX IO, CSS Animations, Master Data, GraphQL'
        },
        {
            title: 'projects.filterSpec.title',
            description: 'projects.filterSpec.description',
            fullDescription: 'projects.filterSpec.fullDescription',
            technologies: ['React', 'TypeScript', 'VTEX IO', 'GraphQL', 'CSS Modules'],
            features: [
                'projects.filterSpec.features.0',
                'projects.filterSpec.features.1',
                'projects.filterSpec.features.2',
                'projects.filterSpec.features.3',
                'projects.filterSpec.features.4',
                'projects.filterSpec.features.5',
                'projects.filterSpec.features.6'
            ],
            complexity: 'projects.complexity.intermediate',
            type: 'projects.type.frontend',
            demoUrl: 'https://github.com/lssebastianbustamante/filter-product-specification',
            highlights: [
                'projects.filterSpec.highlights.0',
                'projects.filterSpec.highlights.1',
                'projects.filterSpec.highlights.2',
                'projects.filterSpec.highlights.3',
                'projects.filterSpec.highlights.4'
            ],
            metrics: {
                duration: '2 meses',
                commits: '35+',
                linesOfCode: '1,800+'
            },
            stack: 'React, TypeScript, VTEX IO, GraphQL'
        },
        {
            title: 'projects.microservice.title',
            description: 'projects.microservice.description',
            fullDescription: 'projects.microservice.fullDescription',
            technologies: ['Node.js', 'TypeScript', 'MongoDB', 'Docker', 'Express', 'HAProxy', 'NATS JetStream'],
            features: [
                'projects.microservice.features.0',
                'projects.microservice.features.1',
                'projects.microservice.features.2',
                'projects.microservice.features.3',
                'projects.microservice.features.4',
                'projects.microservice.features.5',
                'projects.microservice.features.6',
                'projects.microservice.features.7'
            ],
            complexity: 'projects.complexity.advanced',
            type: 'projects.type.backend',
            demoUrl: 'https://github.com/lssebastianbustamante/docker-microservicio-node-express-mongo',
            highlights: [
                'projects.microservice.highlights.0',
                'projects.microservice.highlights.1',
                'projects.microservice.highlights.2',
                'projects.microservice.highlights.3',
                'projects.microservice.highlights.4'
            ],
            metrics: {
                duration: '4 meses',
                commits: '60+',
                linesOfCode: '3,200+'
            },
            stack: 'Node.js, TypeScript, MongoDB, Docker, Express'
        },
        {
            title: 'projects.nextDashboard.title',
            description: 'projects.nextDashboard.description',
            fullDescription: 'projects.nextDashboard.fullDescription',
            technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'PostgreSQL', 'Bcrypt', 'Prisma'],
            features: [
                'projects.nextDashboard.features.0',
                'projects.nextDashboard.features.1',
                'projects.nextDashboard.features.2',
                'projects.nextDashboard.features.3',
                'projects.nextDashboard.features.4',
                'projects.nextDashboard.features.5',
                'projects.nextDashboard.features.6',
                'projects.nextDashboard.features.7'
            ],
            complexity: 'projects.complexity.advanced',
            type: 'projects.type.fullstack',
            demoUrl: 'https://github.com/lssebastianbustamante/nextjs-dashboard',
            highlights: [
                'projects.nextDashboard.highlights.0',
                'projects.nextDashboard.highlights.1',
                'projects.nextDashboard.highlights.2',
                'projects.nextDashboard.highlights.3',
                'projects.nextDashboard.highlights.4'
            ],
            metrics: {
                duration: '3 meses',
                commits: '50+',
                linesOfCode: '2,800+'
            },
            stack: 'Next.js, TypeScript, Tailwind CSS, React, PostgreSQL, Bcrypt, Prisma'
        }
    ];

    const handleViewDetails = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <section className="mb-16 projects">
            <IconHeadLine title={intl.formatMessage({ id: 'projects.title' })} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectList.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        title={project.title} 
                        link={project.demoUrl} 
                        stack={project.stack} 
                        description={project.description}
                        complexity={project.complexity}
                        type={project.type}
                        onViewDetails={() => handleViewDetails(project)}
                    />
                ))}
            </div>
            
            {/* Modal para mostrar detalles del proyecto */}
            {selectedProject && (
                <ProjectModal 
                    isOpen={isModalOpen} 
                    onClose={closeModal}
                    project={selectedProject}
                />
            )}
        </section>
    );
};

export default Projects;