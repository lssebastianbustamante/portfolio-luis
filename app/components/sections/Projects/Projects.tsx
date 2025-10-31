"use client";
import React from 'react';
import { useIntl } from 'react-intl';

import ProjectCard from './ProjectCard';
import IconHeadLine from '../../common/Icons/Icons';

const Projects: React.FC = () => {
    const intl = useIntl();
    const projectList = [
        {
            titleId: 'projects.filterSpec.title',
            descriptionId: 'projects.filterSpec.description',
            link: 'https://github.com/lssebastianbustamante/filter-product-specification',
            stackId: 'projects.filterSpec.stack',
            stack: 'React, TypeScript, VTEX IO, GraphQL'
        },
        {
            titleId: 'projects.wheelFortune.title',
            descriptionId: 'projects.wheelFortune.description',
            link: 'https://github.com/lssebastianbustamante/wheel-fortune',
            stackId: 'projects.wheelFortune.stack',
            stack: 'React, TypeScript, Node.js, GraphQL'
        },
        {
            titleId: 'projects.microservice.title',
            descriptionId: 'projects.microservice.description',
            link: 'https://github.com/lssebastianbustamante/docker-microservicio-node-express-mongo',
            stackId: 'projects.microservice.stack',
            stack: 'Node.js, TypeScript, MongoDB, Docker, Express'
        },
        {
            titleId: 'projects.dashboard.title',
            descriptionId: 'projects.dashboard.description',
            link: 'https://github.com/lssebastianbustamante/nextjs-dashboard',
            stackId: 'projects.dashboard.stack',
            stack: 'Next, TypeScript, Tailwind CSS, React, PostgreSQL, Bcrypt, Prisma'
        }

    ] as const;

    return (
        <section className="mb-16 projects">
            <IconHeadLine title={intl.formatMessage({ id: 'sections.projects', defaultMessage: 'Projects' })} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectList.map((project, index) => (
                    <ProjectCard
                      key={index}
                      title={intl.formatMessage({ id: project.titleId })}
                      description={intl.formatMessage({ id: project.descriptionId })}
                      link={project.link}
                      stack={project.stack}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;