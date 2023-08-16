import React, { useState } from 'react'
import Tag from './Tag'

const catgories = [
  'Education',
  'Finance',
  'Health',
  'Politics',
  'Technology',
  'Photography',
];

export default function SubscribeSection() {
  const [email, setEmail] = useState('');
  const [selectedCategories, setSelectedCategories] = useState({
    ...
    catgories.map((category) => ({
      [category]: false,
    })),
  });
  return (
    <section className='w-full px-3 lg:py-32 bg-black-dark'>
      <div className='max-w-screen-xl lg:mx-auto flex flex-col gap-y-14 items-center '>
        <h2 className="text-black-0 text-3xl">
          Get my latest articles delivered straight to your inbox.
        </h2>
        <div className='flex flex-col items-center justify-between gap-y-6'>
          <div className='flex items-center justify-between gap-x-6'>
            {
              catgories.map((category, index) => (
                <Tag key={index} label={category} clickable={true} selected={selectedCategories[category]}  
                  onClick={
                    () => {
                      setSelectedCategories({
                        ...selectedCategories,
                        [category]: !selectedCategories[category],
                      })
                    }
                  }
                />
              ))
            }
          </div>
          <p className='text-black-100 text-xl'>
            Select topics you're interested in.
          </p>
        </div>
        <div className='flex flex-col items-center justify-between'>
          <input className='w-96 h-14 bg-black-200 p-6 text-golden focus:outline-none' type='email' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
          <button className='text-black-0 w-96 h-14 mt-6 mb-3 border-2 border-golden text-golden hover:bg-golden hover:text-black duration-500 ease-in'>Subscribe</button>
          <p className='text-black-0'>No Spam. I promise 🤞</p>
        </div>
      </div>
    </section>
          
  )
}
