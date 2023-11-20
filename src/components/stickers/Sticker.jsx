import React from 'react'

function Sticker({ title, text, color }) {
  return (
    <div className="text-center py-2">
      <h3
        className={`font-bold tracking-tighter uppercase ${color} md:mb-2 md:text-xl lg:text-2xl font-alt`}
      >
        {title}
      </h3>
      <p className="text-xxs md:text-xs">{text}</p>
    </div>
  )
}

export default Sticker
