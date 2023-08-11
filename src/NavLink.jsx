import React from 'react'

export default function NavLink({label, path}) {
  const pathname = window.location.pathname
  console.log(pathname)
  return (
    <a
      href={path}
      className={`py-2 px-4 rounded-2xl 
      ${pathname === path ? 'bg-black-200 text-white' : 'text-black-100'}
      hover:text-white hover:bg-black-200 duration-500`}
    >
     {label}
    </a>
  )
}
