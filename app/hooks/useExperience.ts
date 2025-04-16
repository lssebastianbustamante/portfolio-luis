import { useState, useEffect } from 'react';

import { getRecommendations } from '../utils/getRecomendation';
import { PropsExpirienceItem } from '../components/sections/Experience/ExperienceItem';


export const useExperience = () => {
    const [isModalOpen, setIsModalOpen] = useState<{ [key: string]: boolean }>({});
    const [experienceItems, setExperienceItems] = useState<PropsExpirienceItem[]>([]);

    useEffect(() => {
        const loadExperience = async () => {
            try {
                const items = await getRecommendations();
                setExperienceItems(items);
            } catch (error) {
                console.error('Error loading experience:', error);
            }
        };

        loadExperience();
    }, []);

    const toggleModal = (company: string) => {
        setIsModalOpen(prev => ({
            ...prev,
            [company]: !prev[company]
        }));
    };

    return { experienceItems, isModalOpen, toggleModal };
};