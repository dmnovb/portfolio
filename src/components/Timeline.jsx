import TimelineItem from "./TimelineItem"
import timeline from '../data/timeline'
import { useInView } from "react-intersection-observer"
import Name from './Name'

export default function Timeline () {
    const {ref: timelineContainer, inView: myElementVisible} = useInView({triggerOnce: true})
    
    const visible = 'timeline'
    const hidden = 'timeline-hidden'

    return (
        <div>
            <div ref={timelineContainer} className={myElementVisible ? visible : hidden}>
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