import React from 'react'

export default function NavLink({label, path}) {
  return (
    <a
      href={path}
      className="text-black-100 hover:text-white mx-6"
    >
     {label}
    </a>
  )
}
