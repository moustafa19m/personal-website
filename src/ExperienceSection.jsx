import React from 'react'
import SectionTitle from './SectionTitle'

export default function ExperienceSection() {
  return (
    <section className='w-full px-3 lg:py-32'>
      <div className='max-w-screen-xl lg:mx-auto'>
        <SectionTitle title={
          [
            {
              "text": "Professional ",
            },
            {
              "text": "Experiences",
              "highlight": true,
            },
            {
              "text": ".",
            },
          ]
        } />
      </div>
    </section>
  )
}
