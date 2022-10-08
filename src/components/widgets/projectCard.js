import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './projectCard.scss';

export default function ProjectCard({img, title, desc, src}) {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true" delay="0">
      <div className='projectCard'>
      <a href={src} target="_blank">
        <img src={img} alt={title}/>
        <div className='text-zone'>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        
      </a>
    </div>
    </AnimationOnScroll>
    
  )
}
