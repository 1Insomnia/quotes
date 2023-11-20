import React from 'react'

function Card({ id, text, author, image }) {
  function alternate(number) {
    return number % 2 !== 0
  }

  const [isVisible, setIsVisible] = React.useState(true)

  return (
    <div
      className={`py-5 lg:py-10 md:flex md:items-center relative ${
        alternate(id) ? 'flex-row' : 'flex-row-reverse'
      } `}
      onClick={e => setIsVisible(prevIsVisible => !prevIsVisible)}
    >
      <p
        className={`font-alt text-3xl text-center mb-2  lg:text-6xl text-accents-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition ease-out duration-500 ${
          isVisible ? 'opacity-0' : 'opacity-1'
        }`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
        dignissimos.
      </p>
      <div
        className={`md:w-1/2 text-center transition ease-out duration-500 ${
          isVisible ? 'opactiy-1' : 'opacity-0'
        }`}
      >
        <img src={image} alt={image} className="w-full h-auto rounded-lg" />
      </div>
      <div
        className={`w-full rounded-lg font-alt md:w-1/2 transition ease-out duration-500  ${
          isVisible ? 'opactiy-1' : 'opacity-0'
        }`}
      >
        <p className="font-alt text-3xl text-center mb-2 lg:whitespace-pre lg:text-6xl text-accents-6">
          {text}
        </p>
        <p className="font-sans uppercase text-center text-sm text-accents-7">
          "{author}"
        </p>
      </div>
    </div>
  )
}

export default Card
