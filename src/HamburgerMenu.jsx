import React from 'react'

export default function HamburgerMenu({isOpen, setIsOpen}) {
  return (
    <button className="flex items-center px-3 py-2 border rounded text-white border-white"
      onClick={() => setIsOpen(!isOpen)}>
        <svg className="fill-current h-3 w-3 transition-all ease-in duration-300" viewBox="0 0 20 20">
          {
            isOpen ?
            // if open show x path     
            <>
              <title>Close</title>
              <path d="M0 0h20v20H0z" fill="none"/>
              <path
                d="M5.25 4.75l-.75.75L9.5 10l-5 5 .75.75 5-5 5 5 .75-.75-5-5 5-5-.75-.75-5 5-5-5z"
                fillRule="evenodd"
              /> 
            </>:
            // if closed show menu path
            <>
              <title>Menu</title>
              <path d="M0 0h20v20H0z" fill="none"/>
              <path
                d="M0 4h20v1.5H0zM0 9.5h20V11H0zM0 15h20v1.5H0z"
                fillRule="evenodd"
              />
            </>
          }
        </svg>


    </button>
  )
}
