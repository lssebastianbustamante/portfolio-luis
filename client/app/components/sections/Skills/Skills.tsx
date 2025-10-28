"use client";
import React from 'react';
import IconHeadLine from '../../common/Icons/Icons';
import { useIntl } from 'react-intl';



const Skills: React.FC = () => {
    const intl = useIntl();
    return (
        <section className="mb-16 skills">


            <IconHeadLine title={intl.formatMessage({ id: 'sections.skills', defaultMessage: 'Skills' })} />


            <ul className="flex flex-wrap gap-3 text-sm">
                {["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "VTEX IO", "NestJS", "Git", "MongoDB", "SQL", "SCRUM/Agile", "Jira", "SOLID", "DRY", "Pattern Design"].map(tech => (
                    <li key={tech} className="bg-[#e95b2f] px-4 py-2 rounded-full font-bold text-white ">
                        {tech}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;