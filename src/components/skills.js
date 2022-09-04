import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import './skills.scss'

export default function Skills() {
    const skills = {
        languages: [
            {name: "c",ref: "https://www.cprogramming.com/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"},
            {name: "csharp",ref: "https://www.w3schools.com/cs/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"},
            {name: "css3",ref: "https://www.w3schools.com/css/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"},
            {name: "html5",ref: "https://www.w3.org/html/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"},
            {name: "java",ref: "https://www.java.com", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"},
            {name: "javascript",ref: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"},
            {name: "php",ref: "https://www.php.net", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"},
        ],
        frameworks: [
            {name: "bootstrap",ref: "https://getbootstrap.com", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"},
            {name: "dotnet",ref: "https://dotnet.microsoft.com/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg"},
            {name: "express",ref: "https://expressjs.com", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"},
            {name: "laravel",ref: "https://laravel.com/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg"},
            {name: "react",ref: "https://reactjs.org/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"},
            {name: "nodejs",ref: "https://nodejs.org", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"},
            {name: "xamarin",ref: "https://dotnet.microsoft.com/apps/xamarin", img: "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/xamarin.svg"},
        ],
        tools: [
            {name: "firebase",ref: "https://firebase.google.com/", img: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"},
            {name: "git",ref: "https://git-scm.com/", img: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"},
            {name: "mongodb",ref: "https://www.mongodb.com/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"},
            {name: "mysql",ref: "https://www.mysql.com/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"},
            {name: "postman",ref: "https://postman.com", img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"},
        ],
    };
    return (
        <div id="skills" className="skills">
            <h1 align="center">- My Skills && Experiences -</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <AnimationOnScroll animateIn="animate__fadeIn" delay="0" className="col-content col-md-6">
                            <h2 align="center">Languages</h2>
                            <div align="center" className="row">
                                {
                                    skills.languages.map((item, index) => (
                                        <a href={item.ref} target="_blank" rel="noreferrer" className="col-2" key={`langs-${index}`}>
                                            <img src={item.img} alt={item.name} width="60" height="60"/>
                                        </a>
                                    ))
                                }
                            </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeIn" delay="250" className="col-content col-md-6">
                        <h2 align="center">Frameworks</h2>
                        <div align="center" className="row">
                            {
                                skills.frameworks.map((item, index) => (
                                    <a href={item.ref} target="_blank" rel="noreferrer" className="col-2" key={`frame-${index}`}>
                                        <img src={item.img} alt={item.name} width="60" height="60"/>
                                    </a>
                                ))
                            }
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeIn" delay="500" className="col-content col-md-6">
                        <h2 align="center">Tools</h2>
                        <div align="center" className="row justify-content-center">
                        {
                            skills.tools.map((item, index) => (
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
