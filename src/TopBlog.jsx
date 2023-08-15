import React from 'react';
import './TopBlog.css';
import BigButton from './BigButton';
import HoverLink from './HoverLink';

export default function TopBlog() {
  return (
    <section className='w-full px-3 lg:pt-32'>
      <div className='max-w-screen-xl lg:mx-auto'>
        <div className='flex lg:mx-auto lg:flex-row w-5/6 h-96 top-blog-bg'>
          <div className='flex-1 p-16 flex justify-between flex-col'>
            <h2 className='text-black-0 text-4xl'>My Experience Developing Software For Compnaies</h2>
            <p className='text-black-grey text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            <div className='flex items-center justify-between'>
              <HoverLink size="md" href="/about" label={"Read Article"}/>
              <BigButton className="" btnText="Visit My Blog" onClick={() => console.log('Sign Up')}/>
            </div>
          </div>
          <div className='flex-1 relative'>
            <img src="/blog_image_1.png" alt="blog image" className="w-full h-full absolute"/>
          </div>
          </div>
      </div>
    </section>
  )
}
