import { PropsExperienceItem } from "./ExperienceItem";



const LINKEDIN_RECOMMENDATIONS_URL = "https://www.linkedin.com/in/luissb-bustamante/details/recommendations"; // Replace with the actual URL

interface Props {
    item: PropsExperienceItem
}

const Recomendation: React.FC<Props> = ({ item }) => {
    if (!item?.details) return


    const { recomendationsJob } = item.details
    if (!recomendationsJob || recomendationsJob.length === 0) return null
    return (
        <div className="mt-4 pt-4 border-t recomendation">
            <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-lg">Recomendaciones:</h4>
                <a
                    href={LINKEDIN_RECOMMENDATIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4b55dc] hover:underline text-sm flex items-center gap-1"
                >
                    Ver en LinkedIn
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
            <div className="space-y-4 recommendation-items">
                {recomendationsJob?.map((rec) => (
                    <div key={rec.id} className="recommendation-item bg-gray-50 rounded-lg">
                        <p className="text-black font-bold">
                            {rec.author}
                        </p>
                        <p className="text-gray-600 mb-2 text-sm">
                            {rec.date.toLocaleDateString()} | {rec.relationship}
                        </p>

                        <p className="text-gray-700 italic mb-2">{rec.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Recomendation