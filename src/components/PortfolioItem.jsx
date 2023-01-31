import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PortfolioItem ({title,info, stack, link, imgUrl}) {

    return (
        <div >
            <a href={link} target={link}>
                <div className="project">
                <img className="project-image" src={imgUrl} alt="" />
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