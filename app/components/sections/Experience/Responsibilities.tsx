"use client";
import { PropsExperienceItem } from "./ExperienceItem"
import { useIntl } from 'react-intl'


interface Props {
    item: PropsExperienceItem
}

const Responsibilities: React.FC<Props> = ({ item }) => {
    if (!item?.details) return
    const intl = useIntl();
    const slug = item.company.toLowerCase().replace(/\s+/g, '');

    const { responsibilitiesJob } = item.details
    return (
        <div>
            <h4 className="font-semibold text-lg mb-2 font-noto">
                {intl.formatMessage({ id: 'experience.responsibilitiesTitle', defaultMessage: 'Key responsibilities:' })}
            </h4>
            <ul className="list-disc pl-5 space-y-1">
                {responsibilitiesJob.map((resp, index) => (
                    <li key={index}>
                        {intl.formatMessage({ id: `experience.${slug}.details.responsibilities.${index}`, defaultMessage: resp })}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Responsibilities