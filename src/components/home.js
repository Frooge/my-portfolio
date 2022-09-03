import React from 'react';
import './home.scss';

export default function Home() {
  return (
    <div className="home container">
        <div className="text-zone">
          <h1>Hey There,<br/> I'm <span className="name">Jade Andrie</span><br/>web developer</h1>
          <h2>Front End Developer && Back End Developer</h2><br/>
          <button className="btn btn-outline-warning">Contact Me</button>
        </div>
    </div>
  )
}
