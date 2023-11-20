import React from "react"

function Container({ children, s }) {
  return (
    <main className="pt-16 min-h-screen">
      <div
        className={`mx-auto max-w-screen-xl px-4 flex flex-col gap-12 md:gap-20 lg:gap-32`}
      >
        {children}
      </div>
    </main>
  )
}

export default Container
