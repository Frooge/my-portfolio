import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { local } from '../utilities/local'

import './skills.scss'

export default function Skills() {
    return (
        <div id="skills" className="skills">
            <h1 align="center">- My Skills && Experiences -</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true" delay="0" className="col-content col-md-6">
                            <h2 align="center">Languages</h2>
                            <div align="center" className="row">
                                {
                                    local.skills.languages.map((item, index) => (
                                        <a href={item.ref} target="_blank" rel="noreferrer" className="col-2" key={`langs-${index}`}>
                                            <img src={item.img} alt={item.name} width="60" height="60"/>
                                        </a>
                                    ))
                                }
                            </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true" delay="250" className="col-content col-md-6">
                        <h2 align="center">Frameworks</h2>
                        <div align="center" className="row">
                            {
                                local.skills.frameworks.map((item, index) => (
                                    <a href={item.ref} target="_blank" rel="noreferrer" className="col-2" key={`frame-${index}`}>
                                        <img src={item.img} alt={item.name} width="60" height="60"/>
                                    </a>
                                ))
                            }
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true" delay="500" className="col-content col-md-6">
                        <h2 align="center">Tools</h2>
                        <div align="center" className="row justify-content-center">
                        {
                            local.skills.tools.map((item, index) => (
                                <a href={item.ref} target="_blank" rel="noreferrer" className="col-2" key={`tools-${index}`}>
                                    <img src={item.img} alt={item.name} width="60" height="60"/>
                                </a>
                            ))
                        }
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    )
}
