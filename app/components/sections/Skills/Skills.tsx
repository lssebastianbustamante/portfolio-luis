
"use client";
import React, { useState } from 'react';
import IconHeadLine from '../../common/Icons/Icons';
import SkillModal from './SkillModal';

const skillDetails: Record<string, { level: string; experience: string; projects: string }> = {
    // Frontend
    "React": { level: "Avanzado", experience: "4+ años", projects: "15+ proyectos" },
    "Next.js": { level: "Intermedio", experience: "3+ años", projects: "8+ aplicaciones" },
    "TypeScript": { level: "Avanzado", experience: "4+ años", projects: "15+ proyectos" },
    "JavaScript (ES6+)": { level: "Avanzado", experience: "6+ años", projects: "25+ proyectos" },
    "GraphQL": { level: "Intermedio", experience: "2+ años", projects: "4+ APIs" },
    "Apollo Client": { level: "Intermedio", experience: "2+ años", projects: "3+ aplicaciones" },
    "HTML5": { level: "Avanzado", experience: "6+ años", projects: "30+ sitios web" },
    "CSS3 / Sass": { level: "Avanzado", experience: "6+ años", projects: "25+ proyectos" },
    "Tailwind CSS": { level: "Intermedio", experience: "3+ años", projects: "12+ proyectos" },
    "CSS Animations": { level: "Avanzado", experience: "5+ años", projects: "10+ proyectos" },
    "Bootstrap": { level: "Avanzado", experience: "5+ años", projects: "15+ proyectos" },
    "jQuery": { level: "Avanzado", experience: "4+ años", projects: "8+ proyectos" },
    "Jest": { level: "Principiante", experience: "2+ años", projects: "6+ proyectos" },
    "React Context API": { level: "Avanzado", experience: "4+ años", projects: "10+ aplicaciones" },
    "Hooks": { level: "Avanzado", experience: "4+ años", projects: "12+ proyectos" },
    
    // Backend & APIs
    "Node.js": { level: "Avanzado", experience: "4+ años", projects: "15+ APIs" },
    "Express": { level: "Avanzado", experience: "4+ años", projects: "12+ servidores" },
    "NestJS": { level: "Intermedio", experience: "3+ años", projects: "8+ APIs" },
    "RESTful APIs": { level: "Avanzado", experience: "5+ años", projects: "20+ APIs" },
    "GraphQL APIs": { level: "Principiante", experience: "2+ años", projects: "5+ APIs" },
    "Apollo Server": { level: "Principiante", experience: "2+ años", projects: "4+ servidores" },
    "TypeORM": { level: "Intermedio", experience: "3+ años", projects: "8+ proyectos" },
    "MySQL": { level: "Avanzado", experience: "4+ años", projects: "10+ bases de datos" },
    "MongoDB (Mongoose)": { level: "Avanzado", experience: "4+ años", projects: "12+ proyectos" },
    "SWR": { level: "Principiante", experience: "2+ años", projects: "5+ aplicaciones" },
    "JWT": { level: "Avanzado", experience: "4+ años", projects: "10+ sistemas" },
    "Passport.js": { level: "Intermedio", experience: "3+ años", projects: "6+ aplicaciones" },
    "express-validator": { level: "Intermedio", experience: "3+ años", projects: "8+ APIs" },
    
    // DevOps
    "Docker": { level: "Principiante", experience: "2+ años", projects: "8+ aplicaciones" },
    "Docker Compose": { level: "Principiante", experience: "2+ años", projects: "6+ proyectos" },
    "Vercel": { level: "Intermedio", experience: "3+ años", projects: "15+ deployments" },
    "dotenv": { level: "Avanzado", experience: "4+ años", projects: "15+ proyectos" },
    "Health-checks": { level: "Intermedio", experience: "2+ años", projects: "6+ APIs" },
    
    // UI/UX & Visual
        "Figma": { level: "Intermedio", experience: "3+ años", projects: "10+ proyectos" },
    "Adobe Photoshop": { level: "Avanzado", experience: "4+ años", projects: "12+ proyectos" },
    "Illustrator": { level: "Intermedio", experience: "3+ años", projects: "15+ proyectos" },
    "Adobe XD": { level: "Intermedio", experience: "3+ años", projects: "6+ prototipos" },
    "Chart.js": { level: "Principiante", experience: "2+ años", projects: "5+ dashboards" },
    
    // Metodologías
    "Agile / Scrum": { level: "Avanzado", experience: "5+ años", projects: "15+ proyectos" },
    "Clean Architecture": { level: "Intermedio", experience: "3+ años", projects: "8+ proyectos" },
    "Design Patterns": { level: "Avanzado", experience: "4+ años", projects: "10+ proyectos" },
    "Modularización": { level: "Avanzado", experience: "4+ años", projects: "20+ proyectos" },
    "Arquitectura por capas": { level: "Intermedio", experience: "3+ años", projects: "8+ proyectos" },
    
    // Control de versiones
    "Git": { level: "Avanzado", experience: "6+ años", projects: "35+ repositorios" },
    "GitHub": { level: "Avanzado", experience: "4+ años", projects: "35+ proyectos" },
    "Pull Requests": { level: "Avanzado", experience: "3+ años", projects: "100+ PRs" },
    "Code Reviews": { level: "Avanzado", experience: "3+ años", projects: "50+ reviews" }
};

const skillsData = {
    "Frontend": {
        color: "from-blue-500 to-purple-600",
        bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
        skills: [
            "React", "Next.js", "TypeScript", "JavaScript (ES6+)", "GraphQL", "Apollo Client", 
            "HTML5", "CSS3 / Sass", "Tailwind CSS", "CSS Animations", "Bootstrap", "jQuery", 
            "Jest", "React Context API", "Hooks"
        ]
    },
    "Backend & APIs": {
        color: "from-green-500 to-teal-600",
        bgColor: "bg-gradient-to-br from-green-50 to-teal-50",
        skills: [
            "Node.js", "Express", "NestJS", "RESTful APIs", "GraphQL APIs", "Apollo Server", 
            "TypeORM", "MySQL", "MongoDB (Mongoose)", "SWR", "JWT", "Passport.js", "express-validator"
        ]
    },
    "Contenerización & DevOps": {
        color: "from-indigo-500 to-blue-600",
        bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
        skills: [
            "Docker", "Docker Compose", "Vercel", "dotenv", "Health-checks"
        ]
    },
    "UI/UX & Visual": {
        color: "from-pink-500 to-rose-600",
        bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
        skills: [
            "Figma", "Adobe Photoshop", "Illustrator", "Adobe XD", "Chart.js"
        ]
    },
    "Metodologías & Patrones": {
        color: "from-yellow-500 to-orange-600",
        bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
        skills: [
            "Agile / Scrum", "Clean Architecture", "Design Patterns", "Modularización", 
            "Arquitectura por capas"
        ]
    },
    "Control de versiones & Colaboración": {
        color: "from-gray-500 to-slate-600",
        bgColor: "bg-gradient-to-br from-gray-50 to-slate-50",
        skills: [
            "Git", "GitHub", "Pull Requests", "Code Reviews"
        ]
    }
};

const Skills: React.FC = () => {
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSkillClick = (skill: string) => {
        const newSelectedSkill = selectedSkill === skill ? null : skill;
        setSelectedSkill(newSelectedSkill);
        
        // Abrir el modal cuando se selecciona una skill (tanto desktop como mobile)
        if (newSelectedSkill) {
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedSkill(null);
    };

    return (
        <section className="mb-16 skills">
            <IconHeadLine title="Skills" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Object.entries(skillsData).map(([category, data], index) => (
                    <div 
                        key={category} 
                        className={`experience-card border-l-4  pl-4 cursor-pointer  transition-colors`}
                        onMouseEnter={() => setHoveredCategory(category)}
                        onMouseLeave={() => setHoveredCategory(null)}
                        style={{
                            animationDelay: `${index * 100}ms`
                        }}
                    >
                        <div className="mb-4">
                            <h3 className={`text-lg font-semibold text-black bg-gradient-to-r ${data.color} bg-clip-text text-transparent transition-all duration-300 ${hoveredCategory === category ? 'scale-105' : ''}`}>
                                {category}
                            </h3>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                            {data.skills.map((skill, skillIndex) => (
                                <span 
                                    key={skill} 
                                    className={`skill px-3 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                                        selectedSkill === skill 
                                            ? `bg-gradient-to-r ${data.color} text-white shadow-lg` 
                                            : `bg-white/70 text-[#4b4f58] hover:bg-gradient-to-r hover:${data.color} hover:text-white shadow-md hover:shadow-lg`
                                    }`}
                                    onClick={() => handleSkillClick(skill)}
                                    style={{
                                        animationDelay: `${(index * 100) + (skillIndex * 50)}ms`
                                    }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                        
                    </div>
                ))}
            </div>
            
            {/* Modal para mostrar información de skill seleccionada (Desktop y Mobile) */}
            {selectedSkill && skillDetails[selectedSkill] && (
                <SkillModal 
                    isOpen={isModalOpen} 
                    onClose={closeModal}
                    skillName={selectedSkill}
                    skillData={skillDetails[selectedSkill]}
                />
            )}
        </section>
    );
}

export default Skills;