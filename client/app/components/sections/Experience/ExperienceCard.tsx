"use client";
import { PropsExperienceItem } from "./ExperienceItem";
import { useIntl } from 'react-intl';

interface ExperienceCardProps {
    item: PropsExperienceItem
    onClick: () => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({item, onClick}) => {
    const intl = useIntl();
    const slug = item.company.toLowerCase().replace(/\s+/g, '');
    const role = intl.formatMessage(
        { id: `experience.${slug}.role`, defaultMessage: item.role }
    );
    const period = intl.formatMessage(
        { id: `experience.${slug}.period`, defaultMessage: item.period }
    );
    const description = intl.formatMessage(
        { id: `experience.${slug}.description`, defaultMessage: item.description }
    );

    return (
        <div
        className="experience-card border-l-4  pl-4 cursor-pointer  transition-colors"
        onClick={onClick}
    >
        <h3 className="text-lg font-semibold text-black">{role} – {item.company}</h3>
        <p className="text-sm text-gray-500 mb-1">{period}</p>
        <p className="text-[#4b4f58] text-sm">{description}</p>
    </div>
    )
}

export default ExperienceCard;