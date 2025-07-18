import React from 'react';
import SkillModalContent from './SkillModalContent';

interface SkillModalProps {
    isOpen: boolean;
    onClose: () => void;
    skillName: string;
    skillData: {
        level: string;
        experience: string;
        projects: string;
    };
}

const SkillModal: React.FC<SkillModalProps> = ({ isOpen, onClose, skillName, skillData }) => {
    if (!isOpen) return null;

    return (
        <>
            {/* Overlay semi-transparente */}
            <div 
                className="fixed inset-0 bg-[#fb733c]/30 backdrop-blur-sm z-40 overlay"
                onClick={onClose}
            />
            
            {/* Contenido del modal */}
            <div className="fixed inset-0 z-50 flex justify-center items-center pointer-events-none modal">
                <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 relative shadow-lg pointer-events-auto">
                    <button 
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 close-button"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <SkillModalContent skillName={skillName} skillData={skillData} />
                </div>
            </div>
        </>
    );
};

export default SkillModal;
