import React from 'react'

export default function BigButton({btnText, onClick, className}) {
  return (
    <button className={`text-black min-w-max bg-black-0 font-medium rounded-md text-sm px-5 py-2.5
    focus:ring-3 focus:ring-black-100
    hover:font-semibold hover:rounded-none duration-500 hover:drop-shadow-md
    ${className}`}>
      {btnText}
    </button>
  )
}
