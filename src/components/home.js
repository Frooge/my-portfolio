import React from 'react';
import AnimatedLetters from './animation/animatedLetters';

import './home.scss';

export default function Home() {
  return (
    <div className="home container">
        <div className="text-zone">
          <h1>
            <AnimatedLetters text="Hey There," idx="1"/>
            <br/>
            <AnimatedLetters text="I'm " idx="8"/>
            <span className="name"><AnimatedLetters text="Jade Andrie" idx="11"/></span>
            <br/>
            <AnimatedLetters text="web developer." idx="25"/>
          </h1>
          <h2>Front End Developer && Back End Developer</h2><br/>
          <button className="btn btn-outline-warning">Contact Me</button>
        </div>
    </div>
  )
}
