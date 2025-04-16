import { PropsExperienceItem } from "./ExperienceItem";








interface ExperienceCardProps {
    item: PropsExperienceItem
    onClick: () => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({item, onClick}) => {

    return (
        <div
        className="experience-card border-l-4  pl-4 cursor-pointer  transition-colors"
        onClick={onClick}
    >
        <h3 className="text-lg font-semibold text-black">{item.role} – {item.company}</h3>
        <p className="text-sm text-gray-500 mb-1">{item.period}</p>
        <p className="text-[#4b4f58] text-sm">{item.description}</p>
    </div>
    )
}

export default ExperienceCard;