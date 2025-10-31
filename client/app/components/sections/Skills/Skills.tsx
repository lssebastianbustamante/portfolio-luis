"use client";
import { useState } from 'react';
import { useIntl } from 'react-intl';
import IconHeadLine from '../../common/Icons/Icons';
import SkillModal from './SkillModal';

type LevelCode = 'advanced' | 'intermediate' | 'beginner';
type ProjectUnit = 'projects' | 'apps' | 'apis' | 'servers' | 'websites' | 'databases' | 'deployments' | 'dashboards' | 'prototypes' | 'repositories' | 'prs' | 'reviews' | 'systems';

const skillDetails: Record<string, { level: LevelCode; experienceYears: number; projects: { count: number; unit: ProjectUnit } }> = {
    // Frontend
    'skill.react': { level: 'advanced', experienceYears: 4, projects: { count: 15, unit: 'projects' } },
    'skill.next': { level: 'intermediate', experienceYears: 3, projects: { count: 8, unit: 'apps' } },
    'skill.typescript': { level: 'advanced', experienceYears: 4, projects: { count: 15, unit: 'projects' } },
    'skill.javascript': { level: 'advanced', experienceYears: 6, projects: { count: 25, unit: 'projects' } },
    'skill.graphql': { level: 'intermediate', experienceYears: 2, projects: { count: 4, unit: 'apis' } },
    'skill.apolloClient': { level: 'intermediate', experienceYears: 2, projects: { count: 3, unit: 'apps' } },
    'skill.html5': { level: 'advanced', experienceYears: 6, projects: { count: 30, unit: 'websites' } },
    'skill.css3': { level: 'advanced', experienceYears: 6, projects: { count: 25, unit: 'projects' } },
    'skill.tailwind': { level: 'intermediate', experienceYears: 3, projects: { count: 12, unit: 'projects' } },
    'skill.cssAnimations': { level: 'advanced', experienceYears: 5, projects: { count: 10, unit: 'projects' } },
    'skill.bootstrap': { level: 'advanced', experienceYears: 5, projects: { count: 15, unit: 'projects' } },
    'skill.jquery': { level: 'advanced', experienceYears: 4, projects: { count: 8, unit: 'projects' } },
    'skill.jest': { level: 'beginner', experienceYears: 2, projects: { count: 6, unit: 'projects' } },
    'skill.context': { level: 'advanced', experienceYears: 4, projects: { count: 10, unit: 'apps' } },
    'skill.hooks': { level: 'advanced', experienceYears: 4, projects: { count: 12, unit: 'projects' } },
    
    // Backend & APIs
    'skill.node': { level: 'advanced', experienceYears: 4, projects: { count: 15, unit: 'apis' } },
    'skill.express': { level: 'advanced', experienceYears: 4, projects: { count: 12, unit: 'servers' } },
    'skill.nest': { level: 'intermediate', experienceYears: 3, projects: { count: 8, unit: 'apis' } },
    'skill.rest': { level: 'advanced', experienceYears: 5, projects: { count: 20, unit: 'apis' } },
    'skill.graphqlApi': { level: 'beginner', experienceYears: 2, projects: { count: 5, unit: 'apis' } },
    'skill.apolloServer': { level: 'beginner', experienceYears: 2, projects: { count: 4, unit: 'servers' } },
    'skill.typeorm': { level: 'intermediate', experienceYears: 3, projects: { count: 8, unit: 'projects' } },
    'skill.mysql': { level: 'advanced', experienceYears: 4, projects: { count: 10, unit: 'databases' } },
    'skill.mongodb': { level: 'advanced', experienceYears: 4, projects: { count: 12, unit: 'projects' } },
    'skill.swr': { level: 'beginner', experienceYears: 2, projects: { count: 5, unit: 'apps' } },
    'skill.jwt': { level: 'advanced', experienceYears: 4, projects: { count: 10, unit: 'systems' } },
    'skill.passport': { level: 'intermediate', experienceYears: 3, projects: { count: 6, unit: 'apps' } },
    'skill.expressValidator': { level: 'intermediate', experienceYears: 3, projects: { count: 8, unit: 'apis' } },
    
    // DevOps
    'skill.docker': { level: 'beginner', experienceYears: 2, projects: { count: 8, unit: 'apps' } },
    'skill.compose': { level: 'beginner', experienceYears: 2, projects: { count: 6, unit: 'projects' } },
    'skill.vercel': { level: 'intermediate', experienceYears: 3, projects: { count: 15, unit: 'deployments' } },
    'skill.dotenv': { level: 'advanced', experienceYears: 4, projects: { count: 15, unit: 'projects' } },
    'skill.healthchecks': { level: 'intermediate', experienceYears: 2, projects: { count: 6, unit: 'apis' } },
    
    // UI/UX & Visual
    'skill.figma': { level: 'intermediate', experienceYears: 3, projects: { count: 10, unit: 'projects' } },
    'skill.photoshop': { level: 'advanced', experienceYears: 4, projects: { count: 12, unit: 'projects' } },
    'skill.illustrator': { level: 'intermediate', experienceYears: 3, projects: { count: 15, unit: 'projects' } },
    'skill.xd': { level: 'intermediate', experienceYears: 3, projects: { count: 6, unit: 'prototypes' } },
    'skill.chartjs': { level: 'beginner', experienceYears: 2, projects: { count: 5, unit: 'dashboards' } },
    
    // Metodologías
    'skill.agile': { level: 'advanced', experienceYears: 5, projects: { count: 15, unit: 'projects' } },
    'skill.cleanArch': { level: 'intermediate', experienceYears: 3, projects: { count: 8, unit: 'projects' } },
    'skill.designPatterns': { level: 'advanced', experienceYears: 4, projects: { count: 10, unit: 'projects' } },
    'skill.modularization': { level: 'advanced', experienceYears: 4, projects: { count: 20, unit: 'projects' } },
    'skill.layered': { level: 'intermediate', experienceYears: 3, projects: { count: 8, unit: 'projects' } },
    
    // Control de versiones
    'skill.git': { level: 'advanced', experienceYears: 6, projects: { count: 35, unit: 'repositories' } },
    'skill.github': { level: 'advanced', experienceYears: 4, projects: { count: 35, unit: 'projects' } },
    'skill.pr': { level: 'advanced', experienceYears: 3, projects: { count: 100, unit: 'prs' } },
    'skill.codeReviews': { level: 'advanced', experienceYears: 3, projects: { count: 50, unit: 'reviews' } }
};

const skillsData = {
    "Frontend": {
        color: "from-blue-500 to-purple-600",
        bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
        skills: [
            'skill.react', 'skill.next', 'skill.typescript', 'skill.javascript', 'skill.graphql', 'skill.apolloClient',
            'skill.html5', 'skill.css3', 'skill.tailwind', 'skill.cssAnimations', 'skill.bootstrap', 'skill.jquery',
            'skill.jest', 'skill.context', 'skill.hooks'
        ]
    },
    "Backend & APIs": {
        color: "from-green-500 to-teal-600",
        bgColor: "bg-gradient-to-br from-green-50 to-teal-50",
        skills: [
            'skill.node', 'skill.express', 'skill.nest', 'skill.rest', 'skill.graphqlApi', 'skill.apolloServer',
            'skill.typeorm', 'skill.mysql', 'skill.mongodb', 'skill.swr', 'skill.jwt', 'skill.passport', 'skill.expressValidator'
        ]
    },
    "Contenerización & DevOps": {
        color: "from-indigo-500 to-blue-600",
        bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
        skills: [
            'skill.docker', 'skill.compose', 'skill.vercel', 'skill.dotenv', 'skill.healthchecks'
        ]
    },
    "UI/UX & Visual": {
        color: "from-pink-500 to-rose-600",
        bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
        skills: [
            'skill.figma', 'skill.photoshop', 'skill.illustrator', 'skill.xd', 'skill.chartjs'
        ]
    },
    "Metodologías & Patrones": {
        color: "from-yellow-500 to-orange-600",
        bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
        skills: [
            'skill.agile', 'skill.cleanArch', 'skill.designPatterns', 'skill.modularization',
            'skill.layered'
        ]
    },
    "Control de versiones & Colaboración": {
        color: "from-gray-500 to-slate-600",
        bgColor: "bg-gradient-to-br from-gray-50 to-slate-50",
        skills: [
            'skill.git', 'skill.github', 'skill.pr', 'skill.codeReviews'
        ]
    }
};

function Skills() {
    const intl = useIntl();
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

    const categoryMsgId: Record<string, string> = {
        'Frontend': 'skills.category.frontend',
        'Backend & APIs': 'skills.category.backend',
        'Contenerización & DevOps': 'skills.category.devops',
        'UI/UX & Visual': 'skills.category.uiux',
        'Metodologías & Patrones': 'skills.category.methods',
        'Control de versiones & Colaboración': 'skills.category.versioning',
    };

    const skillMsgId: Record<string, string> = {
        'skill.react': 'skills.name.react',
        'skill.next': 'skills.name.next',
        'skill.typescript': 'skills.name.typescript',
        'skill.javascript': 'skills.name.javascript',
        'skill.graphql': 'skills.name.graphql',
        'skill.apolloClient': 'skills.name.apolloClient',
        'skill.html5': 'skills.name.html5',
        'skill.css3': 'skills.name.css3',
        'skill.tailwind': 'skills.name.tailwind',
        'skill.cssAnimations': 'skills.name.cssAnimations',
        'skill.bootstrap': 'skills.name.bootstrap',
        'skill.jquery': 'skills.name.jquery',
        'skill.jest': 'skills.name.jest',
        'skill.context': 'skills.name.context',
        'skill.hooks': 'skills.name.hooks',
        'skill.node': 'skills.name.node',
        'skill.express': 'skills.name.express',
        'skill.nest': 'skills.name.nest',
        'skill.rest': 'skills.name.rest',
        'skill.graphqlApi': 'skills.name.graphqlApi',
        'skill.apolloServer': 'skills.name.apolloServer',
        'skill.typeorm': 'skills.name.typeorm',
        'skill.mysql': 'skills.name.mysql',
        'skill.mongodb': 'skills.name.mongodb',
        'skill.swr': 'skills.name.swr',
        'skill.jwt': 'skills.name.jwt',
        'skill.passport': 'skills.name.passport',
        'skill.expressValidator': 'skills.name.expressValidator',
        'skill.docker': 'skills.name.docker',
        'skill.compose': 'skills.name.compose',
        'skill.vercel': 'skills.name.vercel',
        'skill.dotenv': 'skills.name.dotenv',
        'skill.healthchecks': 'skills.name.healthchecks',
        'skill.figma': 'skills.name.figma',
        'skill.photoshop': 'skills.name.photoshop',
        'skill.illustrator': 'skills.name.illustrator',
        'skill.xd': 'skills.name.xd',
        'skill.chartjs': 'skills.name.chartjs',
        'skill.agile': 'skills.name.agile',
        'skill.cleanArch': 'skills.name.cleanArch',
        'skill.designPatterns': 'skills.name.designPatterns',
        'skill.modularization': 'skills.name.modularization',
        'skill.layered': 'skills.name.layered',
        'skill.git': 'skills.name.git',
        'skill.github': 'skills.name.github',
        'skill.pr': 'skills.name.pr',
        'skill.codeReviews': 'skills.name.codeReviews',
    };

    return (
        <section className="mb-16 skills">
            <IconHeadLine title={intl.formatMessage({ id: 'sections.skills', defaultMessage: 'Skills' })} />
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
                                {intl.formatMessage({ id: categoryMsgId[category] ?? `skills.category.${category}`, defaultMessage: category })}
                            </h3>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                            {data.skills.map((skillId, skillIndex) => (
                                <span 
                                    key={skillId} 
                                    className={`skill px-3 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                                        selectedSkill === skillId 
                                            ? `bg-gradient-to-r ${data.color} text-white shadow-lg` 
                                            : `bg-white/70 text-[#4b4f58] hover:bg-gradient-to-r hover:${data.color} hover:text-white shadow-md hover:shadow-lg`
                                    }`}
                                    onClick={() => handleSkillClick(skillId)}
                                    style={{
                                        animationDelay: `${(index * 100) + (skillIndex * 50)}ms`
                                    }}
                                >
                                    {intl.formatMessage({ id: skillMsgId[skillId] ?? skillId, defaultMessage: skillId })}
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
                    skillName={intl.formatMessage({ id: skillMsgId[selectedSkill] ?? selectedSkill, defaultMessage: selectedSkill })}
                    skillData={skillDetails[selectedSkill]}
                />
            )}
        </section>
    );
}

export default Skills;