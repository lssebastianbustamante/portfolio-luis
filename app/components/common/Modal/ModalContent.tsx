"use client";
import { PropsExperienceItem } from "../../sections/Experience/ExperienceItem"
import HighlightedProject from "../../sections/Experience/HighlightedProject"
import Recommendation from "../../sections/Experience/Recomendation"
import Responsibilities from "../../sections/Experience/Responsibilities"
import { useIntl } from 'react-intl'


interface Props {
    item: PropsExperienceItem
}

const ModalContent: React.FC<Props> = ({ item }) => {
    const intl = useIntl();
    const slug = item.company.toLowerCase().replace(/\s+/g, '');


    return (
        <div className="space-y-4 opacity-100 modal-content">
            <h2 className="text-2xl font-bold">{intl.formatMessage({ id: `experience.${slug}.company`, defaultMessage: item.company })}</h2>
            <h3 className="text-xl font-semibold">{intl.formatMessage({ id: `experience.${slug}.role`, defaultMessage: item.role })}</h3>

            {item.details && (
                <>
                    <p className="text-gray-700">
                        {intl.formatMessage({ id: `experience.${slug}.details.fullDescription`, defaultMessage: item.details.fullDescription })}
                    </p>

                    <Responsibilities item={item}/>

                    <HighlightedProject item={item} />


                   <Recommendation item={item} />
                </>
            )}
        </div>
    )
}

export default ModalContent