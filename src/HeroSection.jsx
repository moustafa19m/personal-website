import React from 'react'
import BigButton from './BigButton'
import SocialsWidget from './SocialsWidget'

export default function HeroSection() {
  return (
    <div
      className="flex flex-row items-center justify-center w-full py-20"
    >
      {/* <div className="absolute z-[-1] left-0 top-65-100 lg:top-1/2 place-content-center">
        <img src="../public/transparent-golden-5.png"
              alt="hero image"
              className="w-max aspect-auto" />
      </div> */}
      <div className="flex flex-col flex-2 gap-y-10 justify-items-start h-full relative">
        <div className="flex flex-row items-center gap-x-2 ">
          <h1 className="text-2xl poppins-font text-black-0">
            Hey! I'm Moustafa Makhlouf
          </h1>
          <img src="../public/clapping_hands.png"
              alt="clapping hands"
              className="fill-current h-8 w-8 inline-block" />
        </div>
        <div>
          <p className="md:text-8xl text-black-0 font-bold">
            <span className="text-golden">Software Engineer,</span> Builder, Designer
          </p>
        </div>
        <BigButton className="w-min" btnText="Explore My Work" onClick={() => console.log('Sign Up')}/>
        <SocialsWidget />
      </div>
      <div className="flex-3 flex items-center justify-center h-full z-[-10]">
        <img src="../public/profile-transparent.png"
              alt="hero image"
              className="w-max aspect-auto " />
      </div>

    </div>
  )
}
