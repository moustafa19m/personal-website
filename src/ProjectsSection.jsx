import React from 'react'
import SectionTitle from './SectionTitle'
import Project from './Project'
import './ProjectsSection.css'
import BigButton from './BigButton'
import projects from '../data/projects_shortlist.json'

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
          {
            projects.map((project, index) => {
              return (
                <Project key={index} details={project} className={`max-lines-2 ${project.className}`}/>
              )
            })
          }
        </div>
      </div>
      <div className='flex items-center justify-center mt-10 w-full'>
        <BigButton size="l" btnText="View More Projects" onClick={() => console.log('Sign Up')}/>
      </div>
    </section>
  )
}
