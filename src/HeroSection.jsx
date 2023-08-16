import React from 'react'
import BigButton from './BigButton'
import './HeroSection.css'
import HoverLink from './HoverLink'
import { IoCodeDownloadSharp } from "react-icons/io5";

export default function HeroSection() {
  return (
    <div className='w-full hero-background px-3'>
      <div
        className="flex flex-col md:flex-row items-center  max-w-screen-xl  mx-auto lg-hero-height"
      >
        {/* <div className="absolute z-[-1] left-0 top-65-100 lg:top-1/2 place-content-center">
          <img src="/transparent-golden-5.png"
                alt="hero image"
                className="w-max aspect-auto" />
        </div> */}
        <div className="flex flex-col flex-2 gap-y-32 justify-center h-full">
          <div className="flex flex-row items-center gap-x-2">
            <h1 className="text-2xl poppins-font text-black-0">
              Hey! I'm<span className='text-golden'> Moustafa Makhlouf</span>
            </h1>
            <img src="/clapping_hands.png"
                alt="clapping hands"
                className="fill-current h-8 w-8 inline-block" />
          </div>
          <div>
            <p className="md:text-8xl text-black-0 font-bold text-6xl">
              <span className="text-golden">Software</span><br/>Builder,<br/>Designer, <br/>
              <span className="text-golden">Engineer</span>
            </p>
          </div>
          {/* <div className='flex flex-col gap-y-10 justify-items-start'> */}
            <BigButton size='2xl' className="w-min px-8 py-6" btnText="Explore My Work" onClick={() => console.log('Sign Up')}/>
          {/* </div> */}
        </div>
        <div className="flex-3 relative self-center">
          <img src="/profile-transparent.png"
                alt="hero image"
                className="w-max aspect-auto margin-auto" />
            <img src="/meem_golden_3.svg"
                alt="hero image"
                className="aspect-auto absolute top-96" />

        </div>

      </div>
    </div>
  )
}
