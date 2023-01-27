export default function TimelineItem ({year, background, skills, beginning}) {
    return (
        <div>
            <div className="timeline">
                
                <div id="beginning">
                    <h1>&#x2022; {year}</h1>
                    <h2>{beginning}</h2>                    
                </div>
                <p>{background}</p>
                <p>Skills:</p>
                <div className=" skills ">
                {skills.map((skill) => (
                    <p>{skill}</p>
                ))}
                </div>
            </div>
        </div>
    )
}