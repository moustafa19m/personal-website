import React from 'react'
import SectionTitle from './SectionTitle'
import Project from './Project'
import './ProjectsSection.css'

const project = {
  "title": "Project Title",
  "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  "image": "/barmej.png",
}

export default function ProjectsSection() {
  return (
    <section className='w-full px-3 lg:py-32'>
      <div className='max-w-screen-xl lg:mx-auto'>
        <SectionTitle title={
          [
            {
              "text": "Some ",
            },
            {
              "text": "Projects",
              "highlight": true,
            },
            {
              "text": ".",
            },
          ]
        } />
        <div className='projects-grid mt-20'>
          <Project details={project} className="main-project"/>
          <Project details={project} className="secondary-project"/>
          <Project details={project} className="secondary-project-2"/>
        </div>
      </div>
    </section>
  )
}
