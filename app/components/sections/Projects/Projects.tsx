import React from 'react';
import { IconHeadLine } from '../../common';
import ProjectCard from './ProjectCard';



const Projects: React.FC = () => {
    const projectList = [
        {
            title: 'Filter Product Specification',
            description: 'Sistema de filtros personalizados editable desde VTEX Admin, con navegación dinámica.',
            link: 'https://github.com/lssebastianbustamante/filter-product-specification',
            stack: 'React, TypeScript, VTEX IO, GraphQL'
        },
        {
            title: 'Custom Wheel Fortune',
            description: 'Una aplicación VTEX IO que implementa una ruleta de premios interactiva con arquitectura cliente-servidor.',
            link: 'https://github.com/lssebastianbustamante/wheel-fortune',
            stack: 'React, TypeScript, Node.js, GraphQL'
        },
        {
            title: 'Microservicio',
            description: 'Microservicio desarrollado en Node, Express y MongoDB, utiliza haproxy para el balanceo de consultas y NAST JetStream para manejar la comunicacion entre ambas base de datos.',
            link: 'https://github.com/lssebastianbustamante/docker-microservicio-node-express-mongo',
            stack: 'Node.js, TypeScript, MongoDB, Docker, Express'
        },
        {
            title: 'Dashboard',
            description: 'Este es un proyecto de dashboard desarrollado con Next, que incluye funcionalidades para gestionar facturas y clientes. El proyecto forma parte del curso oficial de Next.js y ha sido mejorado con características adicionales.',
            link: 'https://github.com/lssebastianbustamante/nextjs-dashboard',
            stack: 'Next, TypeScript, Tailwind CSS, React, PostgreSQL, Bycrypt, Prisma'
        }

    ];

    return (
        <section className="mb-16 projects">
            <IconHeadLine title="Proyecto" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectList.map((project, index) => (
                    <ProjectCard key={index} title={project.title} link={project.link} stack={project.stack} description={project.description} />
                ))}
            </div>
        </section>
    );
};

export default Projects;