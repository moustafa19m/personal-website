import React from 'react'

export default function HoverLink({label, path, size='md', Icon, iconSize}) {
  return (
    <a path="/" className={`text-golden text-${size} flex flex-row items-center gap-x-4 cursor-pointer hover:text-white ease-in transition-500`}>
      {Icon && <Icon size={iconSize}/>}
      <p>{label}</p>
    </a>
  )
}
