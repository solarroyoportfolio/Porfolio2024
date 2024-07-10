import React from 'react'

export const Cta = ({button1,button2,link1,link2}) => {
  return (
    <div className="cta flex justify-center items-center gap-5 mt-6">
    <a className="rounded-md text-color_primary border px-4 py-1" href={link1} target='_blank'>
      {button1}
    </a>
    <a className="bg-color_primary rounded-md border border-color_primary px-4 py-1 text-color_bg" href={link2}>
      {button2}
    </a>
  </div>
  )
}
