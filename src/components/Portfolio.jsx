import PortfolioItem from "./PortfolioItem"
import projects from "../data/projects"
import shoppingcart from '../assets/mainres.png'
import rickAndMortyApiImage from '../assets/mainres.png'
import { useInView } from "react-intersection-observer"


export default function Portfolio () {
    
    const {ref: projectsContainer, inView: myElementVisible} = useInView({triggerOnce: true})
    const images = [rickAndMortyApiImage]

    let projects_show = 'projects'
    let projects_hidden = 'projects_hidden';

    console.log(typeof(icon))


    return (
        <div className="container">
            <div ref={projectsContainer} >
                <h1 id="my-projects">Some of my projects</h1>
                <div className={myElementVisible ? projects_show : projects_hidden}>
                    {projects.map((project, idx) => (
                        <PortfolioItem
                        title={project.title}
                        stack={project.stack}
                        info={project.info}
                        link={project.link}
                        imgUrl={images[idx]}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}