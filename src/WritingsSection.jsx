import React from 'react'
import SectionTitle from './SectionTitle'
import './writingsSection.css'
import writings from '../data/writings_shortlist.json'
import WritingItem from './WritingItem'
import BigButton from './BigButton'

export default function WritingsSection() {
  console.log(writings)
  return (
    <section className="w-full px-3 lg:py-32">
      <div className='max-w-screen-xl lg:mx-auto'>
      <SectionTitle title={
          [
            {
              "text": "Some ",
            },
            {
              "text": "Writings",
              "highlight": true,
            },
            {
              "text": ".",
            },
          ]
        } 
      />
        <div className='mt-20 writings-grid group/list'>
          {
            writings.map((writing, index) => (
              <WritingItem key={index} data={writing} />
            ))
          }
        </div>
        <div className='flex items-center justify-center mt-10 w-full'>
          <BigButton size="l" btnText="Visit My Blog" onClick={() => console.log('Sign Up')}/>
        </div>
      </div>
    </section>
  )
}
