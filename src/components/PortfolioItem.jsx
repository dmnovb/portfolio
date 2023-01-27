import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

console.log(faGithub)

export default function PortfolioItem ({title,info, stack, link}) {
    
    return (
        <div >
            <a href={link} target={link}>
                <div className="project">
                <h1>{title}</h1>
                <p>{info}</p>
                <div className="stack">
                {stack.map((tech) => (
                    <h4>{tech}</h4>
                    ))}
                </div>
                    {/* <a href={link}><FontAwesomeIcon icon={faGithub} size={"2x"}/></a> */}
            </div>
            </a>
        </div>
    )
}