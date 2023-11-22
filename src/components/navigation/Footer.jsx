import React from "react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="w-full bg-main text-background">
      <div className="mx-auto max-w-screen-xl px-4 h-16 flex items-center justify-between mt-10">
        <Link to="/" className="font-bold tracking-tighter font-alt text-xl">
          JB
        </Link>
        <p>&copy; Jeremy & CO</p>
      </div>
    </div>
  )
}

export default Footer
