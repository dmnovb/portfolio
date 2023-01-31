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
                    
            </div>
            </a>
        </div>
    )
}