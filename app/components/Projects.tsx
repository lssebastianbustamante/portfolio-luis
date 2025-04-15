import React from 'react';
import ProjectCard from './ProjectCard';
import IconHeadLine from './IconHeadLine';

const Projects: React.FC = () => {
    const projectList = [
        {
            title: 'Filter Product Specification',
            description: 'Sistema de filtros personalizados editable desde VTEX Admin, con navegación dinámica.',
            link: 'https://github.com/lssebastianbustamante/filter-product-specification',
            stack: 'React, TypeScript, VTEX IO, GraphQL'
        },
        {
            title: 'Custom Flags',
            description: 'Módulo para promociones dinámicas con arquitectura modular y escalable',
            link: 'https://github.com/lssebastianbustamante/custom-flags',
            stack: 'React, TypeScript, VTEX IO, GraphQL'
        }

    ];

    return (
        <section className="mb-16 projects">
            <div style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                marginBottom: "0.7104em"
            }} className="text-3xl font-semibold mb-6 pb-2 font-noto">

                <IconHeadLine title="Proyecto" />
                <span >Projects</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectList.map((project, index) => (
                    <ProjectCard key={index} title={project.title} link={project.link} stack={project.stack} description={project.description} />
                ))}
            </div>
        </section>
    );
};

export default Projects;