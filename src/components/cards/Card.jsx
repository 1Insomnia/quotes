import React from "react"
import { Link } from "react-router-dom"

function Card({ id, text, author, image }) {
  function alternate(number) {
    return number % 2 !== 0
  }

  return (
    <Link to={`/citation/${id}`}>
      <div
        className={`py-5 lg:py-10 md:flex md:items-center ${
          alternate(id) ? "flex-row" : "flex-row-reverse"
        } `}
      >
        <div className="md:w-1/2 text-center">
          <img src={image} alt={image} className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-full rounded-lg font-alt md:w-1/2">
          <p className="font-alt text-3xl text-center mb-2 lg:text-6xl text-accents-6">
            {text}
          </p>
          <p className="font-sans uppercase text-center text-sm text-accents-7">
            "{author}"
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card
