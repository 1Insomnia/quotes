import React from 'react'

function Container({ children }) {
  return (
    <div className="">
      <main className="pt-16 min-h-screen text-accents-9">
        <div className="mx-auto max-w-screen-xl px-4">{children}</div>
        <div className="min-h-screen"></div>
      </main>
    </div>
  )
}

export default Container
