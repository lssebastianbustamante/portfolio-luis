import { PropsExperienceItem } from "./ExperienceItem"





interface Props {
    item: PropsExperienceItem
}

const Responsibilities: React.FC<Props> = ({ item }) => {
    if (!item?.details) return


    const { responsibilitiesJob } = item.details
    return (
        <div>
            <h4 className="font-semibold text-lg mb-2 font-noto">Responsabilidades clave:</h4>
            <ul className="list-disc pl-5 space-y-1">
                {responsibilitiesJob.map((resp, index) => (
                    <li key={index}>{resp}</li>
                ))}
            </ul>
        </div>
    )
}

export default Responsibilities