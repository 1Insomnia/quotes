import React from 'react'

function Card({ id, text, author, image }) {
  return (
    <div className="">
      <div className="font-alt mb-4">
        <p className="text-3xl text-center mb-2">{text}</p>
        <p className="font-sans uppercase text-center text-sm">"{author}"</p>
      </div>
      <img src={image} alt={image} className="rounded-lg" />
    </div>
  )
}

export default Card
