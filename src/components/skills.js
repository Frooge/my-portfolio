import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { local } from '../utilities/local'

import './skills.scss'

export default function Skills() {
    return (
        <div id="skills" className="skills">
            <div className="container d-flex flex-column">
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true" delay="0" className="row align-items-center profile">
                    <div className="col-3">
                        <img className="dev-face" src="https://avatars.githubusercontent.com/u/88530893?s=400&u=c3c1e638fa48a121255cfb89507769a8b2ab1e7d&v=4" alt="dev_face"/>
                    </div>
                    <div className="col text-area">
                        <p>
                            Hey I'm Jade Andrie Rosales!
                            I'm a 3rd year computer science student from the Univesity of San Carlos and an aspiring full-stack developer.
                            I started my programming journey when I watched a documentary on how my favorite video games were made.
                            It piqued my interest and started to learn python but soon realized that there are many things that you can learn and do with programming.
                            That is how I got into this programming rabbit hole and found my passion in this field.
                            As of now, I'm currently learning web development mainly with ReactJs.
                        </p>
                    </div>
                </AnimationOnScroll>
                <div className="row justify-content-center">
                    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true" delay="250" className="col-content col-md-6">
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
                    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true" delay="500" className="col-content col-md-6">
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
                    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true" delay="750" className="col-content col-md-6">
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
