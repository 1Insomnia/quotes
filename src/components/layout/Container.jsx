import React from "react"

function Container({ children }) {
  return (
    <main className="min-h-screen">
      <div className="pt-32">
        <div className="mx-auto max-w-screen-xl px-4 space-y-5 sm:space-y-10 md:space-y-16 lg:space-y-20">
          {children}
        </div>
      </div>
    </main>
  )
}

export default Container
