"use client"

import React from 'react';
import { useExperience } from '@/app/hooks/useExperience';
import ExperienceCard from './ExperienceCard';
import Modal from '../../common/Modal/Modal';




interface RecommendationsJob {
    id: string;
    organization: string;
    text: string;
    author: string;
    relationship?: string;
    date: Date;
}

export interface PropsExperienceItem {
    company: string;
    role: string;
    period: string;
    description: string;
    details?: {
        fullDescription: string;
        responsibilitiesJob: string[];
        highlightedProject?: {
            name: string;
            details: string[];
            repository?: string;
        };
        stack: string;
        recomendationsJob?: RecommendationsJob[]
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
                        onClose={() => toggleModal(item.company)}
                        item={item}>
                    </Modal>
                </React.Fragment>
            ))}
        </div>
    );
};

export default ExperienceItem;