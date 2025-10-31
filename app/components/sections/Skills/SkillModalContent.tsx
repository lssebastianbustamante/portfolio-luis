import React from 'react';

interface SkillModalContentProps {
    skillName: string;
    skillData: {
        level: string;
        experience: string;
        projects: string;
    };
}

const SkillModalContent: React.FC<SkillModalContentProps> = ({ skillName, skillData }) => {
    return (
        <div className="space-y-6 opacity-100 modal-content">
            <div className="text-center border-b border-gray-200 pb-4">
                <h2 className="text-2xl font-bold text-gray-800">{skillName}</h2>
                <p className="text-lg text-gray-600 mt-2">Nivel {skillData.level}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4">
                    <div className="text-2xl mb-2">📊</div>
                    <h4 className="font-semibold text-gray-800 mb-1">Nivel</h4>
                    <p className="text-lg font-bold text-blue-600">{skillData.level}</p>
                </div>
                <div className="text-center bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-4">
                    <div className="text-2xl mb-2">⏱️</div>
                    <h4 className="font-semibold text-gray-800 mb-1">Experiencia</h4>
                    <p className="text-lg font-bold text-green-600">{skillData.experience}</p>
                </div>
                <div className="text-center bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4">
                    <div className="text-2xl mb-2">🚀</div>
                    <h4 className="font-semibold text-gray-800 mb-1">Proyectos</h4>
                    <p className="text-lg font-bold text-orange-600">{skillData.projects}</p>
                </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="text-xl mr-2">💡</span>
                    Mi experiencia
                </h4>
                <p className="text-gray-700 leading-relaxed">
                    He trabajado con <strong>{skillName}</strong> durante {skillData.experience} de desarrollo activo, 
                    completando {skillData.projects}. Mi nivel de dominio es <strong>{skillData.level}</strong>, 
                    lo que me permite implementar soluciones eficientes y mantener código de alta calidad usando esta tecnología.
                </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="text-xl mr-2">🎯</span>
                    Aplicación práctica
                </h4>
                <div className="space-y-2">
                    <div className="flex items-center text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        Experiencia práctica: {skillData.experience}
                    </div>
                    <div className="flex items-center text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        Proyectos completados: {skillData.projects}
                    </div>
                    <div className="flex items-center text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        Nivel de dominio: {skillData.level}
                    </div>
                    <div className="flex items-center text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        Uso regular en desarrollo profesional
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillModalContent;
