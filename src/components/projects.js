import React from 'react';
import Masonry from 'react-responsive-masonry';
import { local } from '../utilities/local';

import './projects.scss';
import ProjectCard from './widgets/projectCard';

export default function Projects() {

  return (
    <div id="projects" className="projects">
        <h1 align="center">- Projects -</h1>
        <Masonry columnsCount={3}>
          {
            local.projects.map((project, index) => (
              <ProjectCard key={`${project.title}_${index}`} img={project.img} title={project.title} desc={project.desc} src={project.ref}/>
            ))
          }
        </Masonry>
    </div>
  )
}
