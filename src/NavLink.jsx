import React from 'react'

export default function NavLink({label, path}) {
  return (
    <a
      href={path}
      className="text-black-100 hover:text-white duration-500"
    >
     {label}
    </a>
  )
}
