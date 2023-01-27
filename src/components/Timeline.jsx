import TimelineItem from "./TimelineItem"
import timeline from '../data/timeline'
import { useInView } from "react-intersection-observer"


export default function Timeline () {
    
    return (
        <div>
            <div className="container">
                <p id="timeline-name">Timeline</p>
                {timeline.map(a => (
                    <TimelineItem
                    year={a.year}
                    background={a.background}
                    skills={a.skills}
                    beginning={a.beginning}
                    />
                ))}
            </div>
        </div>
    )
}