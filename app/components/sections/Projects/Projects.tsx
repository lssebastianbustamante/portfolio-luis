"use client";
import React, { useState } from 'react';


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
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const projectList: Project[] = [
        {
            title: 'Wheel Fortune',
            description: 'Una aplicación VTEX IO que implementa una ruleta de premios interactiva con arquitectura cliente-servidor.',
            fullDescription: 'Aplicación completa VTEX IO con ruleta de premios que incluye validación de usuarios, persistencia en Master Data, animaciones CSS avanzadas y sistema de premios configurable. Implementa arquitectura cliente-servidor con backend Node.js y frontend React con TypeScript.',
            technologies: ['React', 'TypeScript', 'Node.js', 'VTEX IO', 'CSS Animations', 'Master Data', 'GraphQL'],
            features: [
                'Ruleta interactiva con animaciones CSS fluidas',
                'Validación de email y prevención de duplicados',
                'Backend con persistencia en Master Data',
                'Modal responsive con countdown automático',
                'Sistema de premios completamente configurable',
                'Integración con plataforma VTEX IO',
                'Gestión de estado compleja con React hooks'
            ],
            complexity: 'Avanzado',
            type: 'Full-stack',
            demoUrl: 'https://github.com/lssebastianbustamante/wheel-fortune',
            highlights: [
                'Arquitectura cliente-servidor completa',
                'Integración avanzada con plataforma VTEX',
                'Animaciones CSS complejas y fluidas',
                'Lógica de negocio robusta con validaciones',
                'Sistema de configuración vía Site Editor'
            ],
            metrics: {
                duration: '3 meses',
                commits: '45+',
                linesOfCode: '2,500+'
            },
            stack: 'React, TypeScript, Node.js, VTEX IO, CSS Animations, Master Data, GraphQL'
        },
        {
            title: 'Filter Product Specification',
            description: 'Sistema de filtros personalizados editable desde VTEX Admin, con navegación dinámica.',
            fullDescription: 'Sistema avanzado de filtros para productos en VTEX IO que permite personalización completa desde el Admin. Incluye navegación dinámica, filtros por especificaciones, categorías y precios con interfaz intuitiva y performance optimizada.',
            technologies: ['React', 'TypeScript', 'VTEX IO', 'GraphQL', 'CSS Modules'],
            features: [
                'Filtros personalizables desde VTEX Admin',
                'Navegación dinámica y breadcrumbs',
                'Filtros por especificaciones de producto',
                'Filtros por categorías y subcategorías',
                'Filtros por rangos de precios',
                'Interfaz responsive y accesible',
                'Performance optimizada con lazy loading'
            ],
            complexity: 'Intermedio',
            type: 'Frontend',
            demoUrl: 'https://github.com/lssebastianbustamante/filter-product-specification',
            highlights: [
                'Integración profunda con VTEX Admin',
                'Sistema de filtros altamente configurable',
                'Navegación dinámica avanzada',
                'Performance optimizada para grandes catálogos',
                'Componentes reutilizables y modulares'
            ],
            metrics: {
                duration: '2 meses',
                commits: '35+',
                linesOfCode: '1,800+'
            },
            stack: 'React, TypeScript, VTEX IO, GraphQL'
        },
        {
            title: 'Microservicio Node.js',
            description: 'Microservicio desarrollado en Node, Express y MongoDB, utiliza HAProxy para balanceo de carga y NATS JetStream para comunicación entre bases de datos.',
            fullDescription: 'Microservicio robusto desarrollado con arquitectura moderna que implementa patrones de microservicios, balanceo de carga con HAProxy, comunicación asíncrona con NATS JetStream y persistencia distribuida en MongoDB. Incluye containerización con Docker y orquestación completa.',
            technologies: ['Node.js', 'TypeScript', 'MongoDB', 'Docker', 'Express', 'HAProxy', 'NATS JetStream'],
            features: [
                'Arquitectura de microservicios escalable',
                'Balanceo de carga con HAProxy',
                'Comunicación asíncrona con NATS JetStream',
                'Persistencia distribuida en MongoDB',
                'Containerización completa con Docker',
                'APIs RESTful con documentación Swagger',
                'Monitoreo y logging avanzado',
                'Patrones de Circuit Breaker y Retry'
            ],
            complexity: 'Avanzado',
            type: 'Backend',
            demoUrl: 'https://github.com/lssebastianbustamante/docker-microservicio-node-express-mongo',
            highlights: [
                'Arquitectura de microservicios completa',
                'Implementación de patrones de resiliencia',
                'Comunicación asíncrona avanzada',
                'Containerización y orquestación',
                'Alta disponibilidad y escalabilidad'
            ],
            metrics: {
                duration: '4 meses',
                commits: '60+',
                linesOfCode: '3,200+'
            },
            stack: 'Node.js, TypeScript, MongoDB, Docker, Express'
        },
        {
            title: 'Next.js Dashboard',
            description: 'Dashboard moderno desarrollado con Next.js que incluye funcionalidades para gestionar facturas y clientes, con autenticación y base de datos PostgreSQL.',
            fullDescription: 'Dashboard completo desarrollado con Next.js 14 y las últimas tecnologías. Incluye sistema de autenticación con bcrypt, gestión de facturas y clientes, base de datos PostgreSQL con Prisma ORM, y diseño responsive con Tailwind CSS. Implementa Server-Side Rendering y optimizaciones avanzadas.',
            technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'PostgreSQL', 'Bcrypt', 'Prisma'],
            features: [
                'Dashboard moderno con métricas en tiempo real',
                'Sistema de autenticación seguro con bcrypt',
                'Gestión completa de facturas y clientes',
                'Base de datos PostgreSQL con Prisma ORM',
                'Diseño responsive con Tailwind CSS',
                'Server-Side Rendering (SSR) optimizado',
                'Componentes reutilizables y modulares',
                'Validación de formularios avanzada'
            ],
            complexity: 'Avanzado',
            type: 'Full-stack',
            demoUrl: 'https://github.com/lssebastianbustamante/nextjs-dashboard',
            highlights: [
                'Next.js 14 con App Router',
                'Autenticación y autorización completa',
                'Base de datos relacional con Prisma',
                'SSR y optimizaciones de performance',
                'Diseño UX/UI profesional'
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
            <IconHeadLine title="Proyectos" />
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