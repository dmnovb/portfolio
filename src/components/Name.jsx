// import {avatar} from '../assets/avatar.png'
import { useInView } from "react-intersection-observer"
import { useRef, useEffect, useState } from "react"

export default function Name () {

    const {ref: infoContainer, inView: myElementVisible} = useInView({triggerOnce: true});

    let info = 'info'
    let info_hidden = 'info-hidden'

    return (
        <div className="container">   
            <section ref={infoContainer} className={myElementVisible ? info : info_hidden} >
                <h1>I'm Boyan Damyanov.</h1>
                <h2>Web Developer.</h2>
                <h3>Currently based in Sofia.</h3>
                {/* <h4>{myElementVisible ? 'yes' : 'no'}</h4> */}
            </section>
        </div>
    )
}