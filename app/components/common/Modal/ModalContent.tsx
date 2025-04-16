import { PropsExperienceItem } from "../../sections/Experience/ExperienceItem"
import HighlightedProject from "../../sections/Experience/HighlightedProject"
import Recommendation from "../../sections/Experience/Recomendation"
import Responsibilities from "../../sections/Experience/Responsibilities"



interface Props {
    item: PropsExperienceItem
}

const ModalContent: React.FC<Props> = ({ item }) => {


    return (
        <div className="space-y-4 opacity-100 modal-content">
            <h2 className="text-2xl font-bold">{item.company}</h2>
            <h3 className="text-xl font-semibold">{item.role}</h3>

            {item.details && (
                <>
                    <p className="text-gray-700">{item.details.fullDescription}</p>

                    <Responsibilities item={item}/>

                    <HighlightedProject item={item} />

                    

                   <Recommendation item={item} />
                </>
            )}
        </div>
    )
}

export default ModalContent