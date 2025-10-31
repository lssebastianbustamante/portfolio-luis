interface SkillModalContentProps {
    skillName: string;
    skillData: {
        level: 'advanced' | 'intermediate' | 'beginner';
        experienceYears: number;
        projects: {
            count: number;
            unit: 'projects' | 'apps' | 'apis' | 'servers' | 'websites' | 'databases' | 'deployments' | 'dashboards' | 'prototypes' | 'repositories' | 'prs' | 'reviews' | 'systems';
        };
    };
}

import { FormattedMessage } from 'react-intl';

function SkillModalContent({ skillName, skillData }: SkillModalContentProps) {
    return (
        <div className="space-y-6 opacity-100 modal-content">
            <div className="text-center border-b border-gray-200 pb-4">
                <h2 className="text-2xl font-bold text-gray-800">{skillName}</h2>
                <p className="text-lg text-gray-600 mt-2">
                    <FormattedMessage id="skills.modal.levelLabel" defaultMessage="Nivel" />{' '}
                    <FormattedMessage id={`skills.level.${skillData.level}`} defaultMessage={skillData.level} />
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4">
                    <div className="text-2xl mb-2">📊</div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                        <FormattedMessage id="skills.modal.level" defaultMessage="Nivel" />
                    </h4>
                    <p className="text-lg font-bold text-blue-600">
                        <FormattedMessage id={`skills.level.${skillData.level}`} defaultMessage={skillData.level} />
                    </p>
                </div>
                <div className="text-center bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-4">
                    <div className="text-2xl mb-2">⏱️</div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                        <FormattedMessage id="skills.modal.experience" defaultMessage="Experiencia" />
                    </h4>
                    <p className="text-lg font-bold text-green-600">
                        <FormattedMessage id="skills.modal.years" defaultMessage="{years, plural, one {# año} other {# años}}" values={{ years: skillData.experienceYears }} />
                    </p>
                </div>
                <div className="text-center bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4">
                    <div className="text-2xl mb-2">🚀</div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                        <FormattedMessage id="skills.modal.projects" defaultMessage="Proyectos" />
                    </h4>
                    <p className="text-lg font-bold text-orange-600">
                        <FormattedMessage id={`skills.modal.count.${skillData.projects.unit}`} defaultMessage="{count}" values={{ count: skillData.projects.count }} />
                    </p>
                </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="text-xl mr-2">💡</span>
                    <FormattedMessage id="skills.modal.myExperience" defaultMessage="Mi experiencia" />
                </h4>
                <p className="text-gray-700 leading-relaxed">
                    <FormattedMessage
                        id="skills.modal.experienceText"
                        defaultMessage="He trabajado con <b>{skillName}</b> durante {experience} de desarrollo activo, completando {projects}. Mi nivel de dominio es <b>{level}</b>, lo que me permite implementar soluciones eficientes y mantener código de alta calidad usando esta tecnología."
                        values={{
                            skillName,
                            experience: (
                                <FormattedMessage key="experience-years" id="skills.modal.years" defaultMessage="{years, plural, one {# año} other {# años}}" values={{ years: skillData.experienceYears }} />
                            ),
                            projects: (
                                <FormattedMessage key={`projects-count-${skillData.projects.unit}`} id={`skills.modal.count.${skillData.projects.unit}`} defaultMessage="{count}" values={{ count: skillData.projects.count }} />
                            ),
                            level: (
                                <FormattedMessage key="level-label" id={`skills.level.${skillData.level}`} defaultMessage={skillData.level} />
                            ),
                            b: (chunks: any) => <strong>{chunks}</strong>,
                        }}
                    />
                </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="text-xl mr-2">🎯</span>
                    <FormattedMessage id="skills.modal.practicalApplication" defaultMessage="Aplicación práctica" />
                </h4>
                <div className="space-y-2">
                    <div className="flex items-center text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        <FormattedMessage id="skills.modal.practiceExperience" defaultMessage="Experiencia práctica:" />{' '}
                        <FormattedMessage id="skills.modal.years" defaultMessage="{years, plural, one {# año} other {# años}}" values={{ years: skillData.experienceYears }} />
                    </div>
                    <div className="flex items-center text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        <FormattedMessage id="skills.modal.completedProjects" defaultMessage="Proyectos completados:" />{' '}
                        <FormattedMessage id={`skills.modal.count.${skillData.projects.unit}`} defaultMessage="{count}" values={{ count: skillData.projects.count }} />
                    </div>
                    <div className="flex items-center text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        <FormattedMessage id="skills.modal.masteryLevel" defaultMessage="Nivel de dominio:" />{' '}
                        <FormattedMessage id={`skills.level.${skillData.level}`} defaultMessage={skillData.level} />
                    </div>
                    <div className="flex items-center text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        <FormattedMessage id="skills.modal.professionalUse" defaultMessage="Uso regular en desarrollo profesional" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillModalContent;