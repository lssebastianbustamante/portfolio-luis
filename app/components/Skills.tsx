import React from 'react';
import IconHeadLine from './IconHeadLine';

const Skills: React.FC = () => {
    return (
        <section className="mb-16 skills">
            <div style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                marginBottom: "0.7104em"
            }} className="text-3xl font-semibold mb-6  pb-2 font-noto">

                <IconHeadLine title="Skills" />
                <span >Skills</span>
            </div>
            <ul className="flex flex-wrap gap-3 text-sm">
                {["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "VTEX IO", "NestJS", "Git"].map(tech => (
                    <li key={tech} className="bg-[#e95b2f] px-4 py-2 rounded-full font-bold text-white ">
                        {tech}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;