import React from 'react'

export default function SectionTitle({title, highlightColor}) {
  if (highlightColor === undefined) {
    highlightColor = 'golden';
  }

  // const titleText = () => {
  //   let text = "";
  //   title.forEach((item, index) => {
  //     console.log(item, item.text, text);
  //     if (item.highlight) {
  //       text += <span className={`text-${highlightColor}`}>{item.text}</span>
  //     } else {
  //       text += <span>{item.text}</span>
  //     }
  //   })
  //   console.log(text);
  //   return text;
  // };
  // console.log(titleText());

  return (
    <div>
      <h2 className='text-6xl font-bold'>
        {
          title.map((item, index) => {
            if (item.highlight) {
              return <span key={index} className={`text-${highlightColor}`}>{item.text}</span>
            } else {
              return <span key={index} className='text-black-0'>{item.text}</span>
            }
          })
        }
      </h2>
    </div>
  )
}
