import { LINKEDIN_RECOMMENDATIONS_URL } from "@/app/utils/getRecomendation"
import { PropsExpirienceItem } from "../ExperienceItem"
import HighlightedProject from "./HighLightProject"
import Responsabilities from "./Resposabilities"
import Recommendation from "./Recomendation"


interface Props {
    item: PropsExpirienceItem
}


const ModalContent: React.FC<Props> = ({ item }) => {


    return (
        <div className="space-y-4 opacity-100">
            <h2 className="text-2xl font-bold">{item.company}</h2>
            <h3 className="text-xl font-semibold">{item.role}</h3>

            {item.details && (
                <>
                    <p className="text-gray-700">{item.details.fullDescription}</p>

                    <Responsabilities item={item}/>

                    <HighlightedProject item={item} />

                    <div className="mt-4 pt-4 border-t flex">
                        <p className="font-semibold mr-2">Stack: </p>
                        <p className="text-gray-700">{item.details.stack}</p>
                    </div>

                   <Recommendation item={item} />
                </>
            )}
        </div>
    )
}

export default ModalContent