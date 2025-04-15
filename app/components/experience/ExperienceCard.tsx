import { PropsExpirienceItem } from "../ExperienceItem";

interface ExperienceCardProps {
    item: PropsExpirienceItem
    onClick: () => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({item, onClick}) => {

    return (
        <div
        className="border-l-4 border-[#fb733c] pl-4 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={onClick}
    >
        <h3 className="text-lg font-semibold text-black">{item.role} – {item.company}</h3>
        <p className="text-sm text-gray-500 mb-1">{item.period}</p>
        <p className="text-[#4b4f58] text-sm">{item.description}</p>
    </div>
    )
}

export default ExperienceCard;