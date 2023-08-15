import React from 'react'
import BigButton from './BigButton'

export default function WritingItem({data}) {
  return (
    <a className='w-full hover:opacity-60' href={data.link}>
      <div className='relative w-full h-60'>
        <img className="absolute h-full w-full" src={data.image} alt={data.title} />
      </div>
      <div className='mt-2'>
        <p className='text-black-100'>
          {data.date}
        </p>
        <h3 className='mt-1 text-black-0 text-2xl'>
          {data.title}
        </h3>
      </div>
    </a>
  )
}
