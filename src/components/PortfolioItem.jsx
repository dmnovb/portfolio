export default function PortfolioItem ({title, imgUrl, info, stack}) {
    
    return (
        <div >
            <div className="project">
                <h1>{title}</h1>
                <img src={imgUrl}/>
                <p>{info}</p>
                <div className="stack">
                {stack.map((tech) => (
                    <h4>{tech}</h4>
                ))}
                </div>
            </div>
        </div>
    )
}