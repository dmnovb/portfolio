import PortfolioItem from "./PortfolioItem"
import projects from "../data/projects"
import { useInView } from "react-intersection-observer"

export default function Portfolio () {
    
    const {ref: projectsContainer, inView: myElementVisible} = useInView()

    return (
        <div className="container">
            <div>
            <h1 id="my-projects">Some of my projects</h1>
            <div ref={projectsContainer} className="projects">
                {projects.map(project => (
                    <PortfolioItem
                    imgUrl={project.imgUrl}
                    title={project.title}
                    stack={project.stack}
                    info={project.info}
                    />
                ))}
            </div>
            </div>
        </div>
    )
}