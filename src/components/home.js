import React from 'react';
import AnimatedLetters from './animation/animatedLetters';

import './home.scss';

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="text-zone">
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
          <button className="btn btn-outline-warning animate__animated animate__fadeIn animate__delay-4s">Contact Me</button>
        </div>
      </div>
    </div>
  )
}
