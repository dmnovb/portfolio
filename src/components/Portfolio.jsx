import PortfolioItem from "./PortfolioItem"
import projects from "../data/projects"
import { useInView } from "react-intersection-observer"


export default function Portfolio () {
    
    const {ref: projectsContainer, inView: myElementVisible} = useInView({triggerOnce: true})

    let projects_show = 'projects'
    let projects_hidden = 'projects_hidden';

    return (
        <div className="container">
            <div ref={projectsContainer} >
                <h1 id="my-projects">Some of my projects</h1>
                <div className={myElementVisible ? projects_show : projects_hidden}>
                    {projects.map(project => (
                        <PortfolioItem
                        title={project.title}
                        stack={project.stack}
                        info={project.info}
                        link={project.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}