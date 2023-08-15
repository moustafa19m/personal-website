import React from 'react'

export default function BigButton({btnText, size = 'md', onClick, className, color = 'golden'}) {
console.log(color)
  return (
    <button className={`text-${color} 
        min-w-max bg-black font-medium border-${color} border-2 text-${size} px-5 py-2.5
    hover:bg-${color} hover:text-black duration-500 ease-in
    ${className}`}>
      {btnText}
    </button>
  )
}
