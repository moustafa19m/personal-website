import React from 'react'


const labelColors = {
  "Education": {
    "text": "text-teal-600",
    "bg": "bg-teal-600"
  }, 
  "Finance" : {
    "text": "text-green-600",
    "bg": "bg-green-600"
  },
  "Health": {
    "text": "text-red-500",
    "bg": "bg-red-500"
  },
  "Politics": {
    "text": "text-blue-500",
    "bg": "bg-blue-500"
  },
  "Technology": {
    "text": "text-yellow-600",
    "bg": "bg-yellow-600"
  },
  "Photography": {
    "text": "text-purple-500",
    "bg": "bg-purple-500"
  },
};

export default function tag({clickable, label, selected, onClick}) {
  if (clickable === false) {
    selected = false;
    onClick = null;
  }

  return (
    <button disabled={!clickable}
      onClick={onClick}
      className={`py-1 px-3 transition duration-500 ease-in-out rounded-md text-bold ${!selected && 'bg-opacity-10'} ${selected? 'text-black-0' : labelColors[label].text} ${labelColors[label].bg}`}
    >
      {label}
    </button>
  )
}
