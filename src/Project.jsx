import React from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";

export default function Project({details, className}) {
  return (
    <div className={'flex flex-col shrink ' + className}>
      <div className='flex-1 relative'>
        <img src={details.image} alt={details.title} className={"h-full w-full absolute"}/>
      </div>
      <h4 className='text-3xl text-black-0 py-4'>
        {details.title}
      </h4>
      <p className='text-black-100'>
        {details.description}
      </p>
      <a path="/" className={`my-4 flex flex-row items-center hover:gap-x-2 transition-all duration-500 ease-in text-black-0 cursor-pointer hover:text-golden ease-in transition-500`}>
        <p>
          Learn More
        </p>
        <IoChevronForwardOutline size={20}/>
      </a>

    </div>
  )
}
