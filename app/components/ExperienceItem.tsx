"use client"

import React from 'react';
import Modal from './Modal';
import ExperienceCard from './experience/ExperienceCard';
import { useExperience } from '../hooks/useExperience';
import ModalContent from './experience/ModalContent';

interface Recommendation {
    id: string;
    organization: string;
    text: string;
    author: string;
    relationship?: string;
    date: Date;
}

export interface PropsExpirienceItem {
    company: string;
    role: string;
    period: string;
    description: string;
    details?: {
        fullDescription: string;
        responsibilities: string[];
        highlightedProject?: {
            name: string;
            details: string[];
            repository?: string;
        };
        stack: string;
        recomendations?: Recommendation[]
    };
}

const ExperienceItem: React.FC = () => {
    const { experienceItems, isModalOpen, toggleModal } = useExperience();


    return (
        <div className="space-y-6">
            {experienceItems.map((item) => (
                <React.Fragment key={item.company}>
                    <ExperienceCard item={item} onClick={() => toggleModal(item.company)} />

                    <Modal
                        isOpen={isModalOpen[item.company] || false}
                        onClose={() => toggleModal(item.company)} >

                        <ModalContent item={item} />
                    </Modal>
                </React.Fragment>
            ))}
        </div>
    );
};

export default ExperienceItem;