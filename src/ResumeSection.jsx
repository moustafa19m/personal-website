import React from 'react'
import BigButton from './BigButton'
import './ResumeSection.css'
import SkillItem from './SkillItem'
import skills from '../data/skills.json'

export default function ResumeSection() {
  return (
    <section className='w-full px-3 lg:py-32 bg-black-dark'>
      <div className='max-w-screen-xl lg:mx-auto resume-grid group/list'>
        <div className='flex w-full h-full resume-button items-center justify-center peer'>
          <BigButton size="2xl" btnText="View Resume" onClick={() => console.log('Sign Up')}/>
        </div>
        {
          skills.map((skill, i) => {
            return (
              <SkillItem key={i} data={skill} sectionNumber={i + 1} withBottomBorder={(i+1)%2}/>
            )
          })
        }
      </div>
    </section>
  )
}
