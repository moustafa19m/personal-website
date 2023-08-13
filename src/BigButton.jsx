import React from 'react'

export default function BigButton({btnText, onClick, className, color}) {
  if ( color === undefined ) {
    color = 'golden'
  }
  return (
    <button className={`text-${color} min-w-max bg-black font-medium border-${color} border-2 text-sm px-5 py-2.5
    hover:bg-${color} hover:text-black duration-500 ease-in
    ${className}`}>
      {btnText}
    </button>
  )
}
