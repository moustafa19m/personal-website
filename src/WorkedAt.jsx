import React from 'react'
import companies from '../data/companies.json'
import './WorkedAt.css'

export default function WorkedAt() {
  return (
    <div className="bg-black-dark">
      <div className='max-w-screen-xl lg:mx-auto lg:py-32 flex flex-col gap-y-20'>
        <h2 className='text-black-0 text-2xl worked-at-text'>WORKED AT</h2>
        <div className="flex flex-row justify-between">
          {companies.map((company, index) => {
            return (
              <img key={index} src={company.img} alt={company.name} className="lg:max-h-20"/>
            )
          })}
        </div>
      </div>
    </div>
  )
}
