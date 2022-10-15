import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Masonry from 'react-responsive-masonry';
import { local } from '../utilities/local';

import './projects.scss';
import ProjectCard from './widgets/projectCard';

export default function Projects() {
  const delay = [100, 200, 300];
  return (
    <div id="projects" className="projects">
      <div className="container">
        <h1 align="center">Projects</h1>
        <Masonry columnsCount={3}>
          {
            local.projects.map((project, index) => (
              <AnimationOnScroll key={`${project.title}_${index}`} animateIn="animate__fadeIn" animateOnce="true" delay={delay[index%3]}>
                <ProjectCard img={project.img} title={project.title} desc={project.desc} src={project.ref}/>
              </AnimationOnScroll>
            ))
          }
        </Masonry>
      </div>  
    </div>
  )
}
