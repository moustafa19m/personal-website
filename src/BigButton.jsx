import React from 'react'

export default function BigButton({btnText, onClick, className, color}) {

  return (
    <button className={`text-${color === undefined ? 'golden': color} 
        min-w-max bg-black font-medium border-${color === undefined ? 'golden': color} border-2 text-sm px-5 py-2.5
    hover:bg-${color === undefined ? 'golden': color} hover:text-black duration-500 ease-in
    ${className}`}>
      {btnText}
    </button>
  )
}
