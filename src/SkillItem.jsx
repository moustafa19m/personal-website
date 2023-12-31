import React from 'react'
import './ResumeSection.css'

export default function SkillItem({data, withBottomBorder, sectionNumber}) {
  return (
    <div className={`flex flex-row w-full h-full gap-x-8 py-10 transition-opacity duration-500 ease-in-out lg:hover:!opacity-100  lg:peer-hover:!opacity-100 lg:group-hover/list:opacity-50 
    ${withBottomBorder && "border-b"} border-black-100
    resume-section${sectionNumber}`}>
      <div className='w-20 relative'>
        <img className='w-full absolute' src={data.image} alt={data.name} />
      </div>
      <div className='flex flex-col gap-y-8 w-full '>
        <h3 className="text-black-0 text-3xl">{data.name}</h3>
        <p className='text-black-100 text-md'>
          {data.description}
        </p>
      </div>
    </div>
  )
}
