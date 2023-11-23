import React from "react"

function Container({ children }) {
  return (
    <main className="min-h-screen">
      <div className="pt-32">
        <div className={`mx-auto max-w-screen-xl px-4`}>{children}</div>
      </div>
    </main>
  )
}

export default Container
