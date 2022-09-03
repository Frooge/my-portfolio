import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import './skills.scss'

export default function Skills() {
    return (
        <div className="skills">
            <h1 className="title" align="center">- My Skills && Experiences -</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <AnimationOnScroll animateIn="animate__fadeIn" delay="0" className="col-content col-md-6">
                            <h2 align="center">Languages</h2>
                            <div align="center" className="row">
                                <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer" className="col-2">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="60" height="60"/>
                                </a>
                                <a href="https://www.w3schools.com/cs/" target="_blank" rel="noreferrer" className="col-2">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" width="60" height="60"/>
                                </a>
                                <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer" className="col-2">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="60" height="60"/>
                                </a>
                                <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer" className="col-2">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="60" height="60"/>
                                </a>
                                <a href="https://www.java.com" target="_blank" rel="noreferrer" className="col-2">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="60" height="60"/>
                                </a>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" className="col-2">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="60" height="60"/>
                                </a>
                                <a href="https://www.php.net" target="_blank" rel="noreferrer" className="col-2">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="60" height="60"/>
                                </a>
                            </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeIn" delay="250" className="col-content col-md-6">
                        <h2 align="center">Frameworks</h2>
                        <div align="center" className="row">
                            <a href="https://getbootstrap.com" target="_blank" rel="noreferrer" className="col-2">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="60" height="60"/>
                            </a>
                            <a href="https://dotnet.microsoft.com/" target="_blank" rel="noreferrer" className="col-2">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" alt="dotnet" width="60" height="60"/>
                            </a>
                            <a href="https://expressjs.com" target="_blank" rel="noreferrer" className="col-2">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="60" height="60"/>
                            </a>
                            <a href="https://laravel.com/" target="_blank" rel="noreferrer" className="col-2">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg" alt="laravel" width="60" height="60"/>
                            </a>
                            <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="col-2">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="60" height="60"/>
                            </a>
                            <a href="https://nodejs.org" target="_blank" rel="noreferrer" className="col-2">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="60" height="60"/>
                            </a>
                            <a href="https://dotnet.microsoft.com/apps/xamarin" target="_blank" rel="noreferrer" className="col-2">
                                <img src="https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/xamarin.svg" alt="xamarin" width="60" height="60"/>
                            </a>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeIn" delay="500" className="col-content col-md-6">
                        <h2 align="center">Tools</h2>
                        <div align="center" className="row justify-content-center">
                            <a href="https://firebase.google.com/" target="_blank" rel="noreferrer" className="col-2">
                                <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="60" height="60"/>
                            </a>
                            <a href="https://git-scm.com/" target="_blank" rel="noreferrer" className="col-2">
                                <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="60" height="60"/>
                            </a>
                            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer" className="col-2">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="60" height="60"/>
                            </a>
                            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer" className="col-2">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="60" height="60"/>
                            </a>
                            <a href="https://postman.com" target="_blank" rel="noreferrer" className="col-2">
                                <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="60" height="60"/>
                            </a>
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    )
}
