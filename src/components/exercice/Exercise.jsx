import React from "react"

function Exercise({ exercise_text, exercise_img }) {
  return (
    <div>
      <h2 className="font-bold tracking-tighter text-center font-alt text-accents-6 text-xl md:text-3xl lg:text-4xl md:mb-6 lg:mb-10 border-t-2 border-t-accents-2 pt-2">
        Exercise
      </h2>
      {exercise_text && !exercise_img && (
        <div className="text-center leading-loose md:whitespace-pre-wrap text-xl">
          {exercise_text}
        </div>
      )}
      {!exercise_text && exercise_img && <img src={exercise_img} alt="azeaz" />}
    </div>
  )
}

export default Exercise
