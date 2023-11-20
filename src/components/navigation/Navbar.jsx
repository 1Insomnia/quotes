import React from 'react'

function Navbar() {
  return (
    <div className="shadow-xl fixed top-0 left-0 w-full z-10 main_nav">
      <div className="mx-auto max-w-screen-xl px-4 flex items-center justify-between h-16">
        <h1 className="font-bold tracking-tighter text-main font-alt text-xl">
          JB
        </h1>
        <div>Menu</div>
      </div>
    </div>
  )
}

export default Navbar
