import React from 'react'
import HeroSection from './HeroSection'
import WorkedAt from './WorkedAt'
import ProjectsSection from './ProjectsSection'
import TopBlog from './TopBlog'
import ResumeSection from './ResumeSection'

export default function PageBody() {
  return (
    <div>
      <HeroSection />
      <WorkedAt />
      <TopBlog />
      <ProjectsSection />
      <ResumeSection />
    </div>
  )
}
