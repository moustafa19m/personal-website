import React from 'react'
import HeroSection from './HeroSection'
import WorkedAt from './WorkedAt'
import ProjectsSection from './ProjectsSection'
import TopBlog from './TopBlog'
import ResumeSection from './ResumeSection'
import WritingsSection from './WritingsSection'

export default function PageBody() {
  return (
    <>
      <HeroSection />
      <WorkedAt />
      <TopBlog />
      <ProjectsSection />
      <ResumeSection />
      <WritingsSection />
    </>
  )
}
