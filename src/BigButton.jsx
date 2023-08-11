import React from 'react'

export default function BigButton({btnText, onClick, className}) {
  return (
    <button className={`text-golden min-w-max bg-black font-medium border-golden border-2 text-sm px-5 py-2.5
    hover:bg-golden hover:text-black duration-500 ease-in
    ${className}`}>
      {btnText}
    </button>
  )
}
