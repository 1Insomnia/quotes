import React from "react"
import { Link } from "react-router-dom"
import logo from "./jb-logo.svg"

function Navbar() {
  return (
    <div className="shadow-xl fixed top-0 left-0 w-full z-10 main_nav">
      <div className="mx-auto max-w-screen-xl px-4 flex items-center justify-between h-16">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            width={48}
            height={48}
            className="h-12 w-12"
          />
        </Link>
        <div>Menu</div>
      </div>
    </div>
  )
}

export default Navbar
