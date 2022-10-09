import React from 'react';
import AnimatedLetters from './animation/animatedLetters';
import { SocialIcon } from 'react-social-icons';

import './home.scss';

export default function Home() {
  return (
    <div id="home" className="home">
      <div className="social-icons">
        <SocialIcon url="https://www.linkedin.com/in/jade-andrie-rosales-2a4706223/" target='_blank' fgColor='white'/>
        <SocialIcon url="https://github.com/Frooge" target='_blank' fgColor='white'/>
        <SocialIcon url="https://www.facebook.com/jade.rosales.90857/" target='_blank' fgColor='white'/>
      </div>
      <div className="content container row">
        <div className="text-zone col-8">
          <h1>
            <AnimatedLetters text="Hey There," idx="1"/>
            <br/>
            <AnimatedLetters text="I'm " idx="8"/>
            <span className="name"><AnimatedLetters text="Jade Andrie" idx="11"/></span>
            <br/>
            <AnimatedLetters text="web developer." idx="24"/>
          </h1>
          <h2 className="animate__animated animate__fadeIn animate__delay-3s">Front End Developer && Back End Developer</h2>    
          <br/>
          <a href="#contacts"><button className="btn btn-outline-warning animate__animated animate__fadeIn animate__delay-4s">Contact Me</button></a>
        </div>
      </div>
    </div>
  )
}
