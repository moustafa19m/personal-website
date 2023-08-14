import React from 'react'
import HeroSection from './HeroSection'
import WorkedAt from './WorkedAt'
import ProjectsSection from './ProjectsSection'

export default function PageBody() {
  return (
    <div>
      <HeroSection />
      <WorkedAt />
      <ProjectsSection />
    </div>
  )
}
