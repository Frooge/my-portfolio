import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { local } from '../utilities/local';

import './projects.scss';
import ProjectCard from './widgets/projectCard';

export default function Projects() {
  const delay = [200, 400, 600];
  return (
    <div id="projects" className="projects">
      <div className="container">
        <h1 align="center">Projects</h1>
        <ResponsiveMasonry columnsCountBreakPoints={{576: 1, 768: 2, 992: 3}}>
          <Masonry>
            {
              local.projects.map((project, index) => (
                <AnimationOnScroll key={`${project.title}_${index}`} animateIn="animate__fadeIn" animateOnce="true" delay={delay[index%3]}>
                  <ProjectCard img={project.img} title={project.title} desc={project.desc} year={project.year} src={project.ref}/>
                </AnimationOnScroll>
              ))
            }
          </Masonry>
        </ResponsiveMasonry>
        
      </div>  
    </div>
  )
}
