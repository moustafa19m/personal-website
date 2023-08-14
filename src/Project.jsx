import React from 'react'

export default function Project({details, className}) {
  return (
    <div className={'flex flex-col shrink ' + className}>
      <div className='flex-1 relative'>
        <img src={details.image} alt={details.title} className={"h-full w-full absolute"}/>
      </div>
      <h4 className='text-3xl text-black-0 py-4'>
        {details.title}
      </h4>
      <p className='text-black-grey'>
        {details.description + details.description}
      </p>
      <a className='my-4'>
        <p className='text-golden'>Learn More {">>"}</p>
      </a>
    </div>
  )
}
