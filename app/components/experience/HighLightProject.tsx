import { PropsExpirienceItem } from "../ExperienceItem"
import { GitHubIcon } from "../icons/GitHubIcon"

interface Props {
    item: PropsExpirienceItem
}

const HighlightedProject: React.FC<Props> = ({ item }) => {

    if (!item?.details) return


    const { highlightedProject } = item.details
    if (!highlightedProject) return null
    return (
        <div className="projects-highlighted">
            <h4 className="font-semibold text-lg mb-2">
                Proyecto destacado – {highlightedProject?.name}:
            </h4>
            <ul className="list-disc pl-5 space-y-1">
                {highlightedProject?.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
            <a
                href={highlightedProject.repository}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: "flex",
                    alignItems: "center"
                }}
            >
        
                    <GitHubIcon/>

                <span>Ver repositorio</span>
            </a>
            <div className="stack mt-4 pt-4 border-t flex">
                <p className="font-semibold mr-2 stack">Stack: </p>
                <p className="text-gray-700">{item.details.stack}</p>
            </div>
        </div>
    )
}

export default HighlightedProject