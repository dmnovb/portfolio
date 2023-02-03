import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
        <div>
            <div className="container">
               <hr />
                <ul className="social-links">
                    <li><a href="https://github.com/dmnovb" target="https://github.com/dmnovb"><FontAwesomeIcon icon={faGithub} size={"2x"}/></a></li>
                    <li><a href="https://www.linkedin.com/in/boyan-damyanov-16004224b/" target="https://www.linkedin.com/in/boyan-damyanov-16004224b/"><FontAwesomeIcon icon={faLinkedin} size={"2x"}/></a></li>     
                </ul>
                <div className="copyright">
                <p id="copyright">&#169;Copyright. All rights reserved.</p>
                </div>
            </div>
        </div>
    )    
}

export default Footer;