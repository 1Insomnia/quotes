import React from "react"
import heroImg from "./hero.jpg"

function Hero() {
  return (
    <div className="pt-10">
      <h1 className="font-bold tracking-tighter text-center inktrap-sm md:inktrap-md lg:inktrap-lg font-alt text-accents-6">
        Just be yourself
      </h1>
      <p className="md:text-xl text-center py-6 px-8">
        Ce site à pour but de t’aider à avancer dans la vie, franchir les
        obstacles, te surpasser, pour réussir et vivre heureux.
        <br />
        Sois loyal envers-toi même, fais-toi confiance.
        <br />
        N'essaye pas d'etre quelqu'un d'autre, juste pour être comme les autres
        : <span className="text-main">Just Be Yourself</span>.
        <br />
      </p>
      <img
        src={heroImg}
        alt="Header"
        className="mt-5 lg:mt-10 w-3/4 block rounded-lg mx-auto"
      />
      <p className="text-center py-4">
        Chaque citation proposée te permettra de construire ta feuille de route
      </p>
    </div>
  )
}

export default Hero
