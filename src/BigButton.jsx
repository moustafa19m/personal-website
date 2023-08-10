import React from 'react'

export default function BigButton({btnText, onClick}) {
  return (
    <button className="text-black bg-black-0 focus:ring-3 focus:ring-black-100 font-medium rounded-md text-sm px-5 py-2.5">
      {btnText}
    </button>
  )
}
