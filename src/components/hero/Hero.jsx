import React from 'react'
import heroImg from './hero.jpg'

function Header() {
  return (
    <div className="py-6 lg:py-12">
      <h1 className="font-bold tracking-tighter text-center inktrap-sm md:inktrap-md lg:inktrap-lg p-6 font-alt">
        Sois toi même pour réussir
      </h1>
      <p className="md:text-xl text-center py-6 px-8">
        Ce site à pour but de t’aider à avancer dans la vie, franchir les
        obstacles, te surpasser, pour réussir et vivre heureux. <br />
        Chaque citation proposée te permettra de construire ta feuille de route
      </p>
      <img
        src={heroImg}
        alt="Header"
        className="mt-5 lg:mt-10 w-3/4 block rounded-lg mx-auto"
      />
    </div>
  )
}

export default Header
