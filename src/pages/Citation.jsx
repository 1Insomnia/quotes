import React from "react"
import { useParams } from "react-router-dom"
import supabaseClient from "../lib/supabaseClient"
// Components
import Exercise from "../components/exercice/Exercise"

function Citation() {
  let { id } = useParams()

  const [quote, setQuote] = React.useState({
    name: "",
    content: "",
    exercise_img: "",
    exercise_text: "",
    author: {
      name: "",
      img_path: ""
    }
  })

  const [isLoading, setIsLoading] = React.useState(null)
  const [fetchError, setFetchError] = React.useState(null)

  React.useEffect(() => {
    const getQuote = async () => {
      setIsLoading(true)
      const { data, error } = await supabaseClient
        .from("quote")
        .select(
          `
            id,
            content,
            exercise_img,
            exercise_text,
            author ( name, img_path, bio)
        `
        )
        .eq("id", id)

      if (error) {
        setFetchError("Could not fetch the quotes")
        setQuote(null)
        setIsLoading(false)
        console.warn(error)
      }
      setQuote(data[0])
      setFetchError(null)
      setIsLoading(false)
    }
    getQuote()
  }, [id])

  return (
    <>
      {fetchError && <div>{fetchError}</div>}
      {isLoading && <div>Loading content</div>}
      {!fetchError && !isLoading && (
        <>
          {/*  */}
          <div>
            <div>
              <h1 className="font-bold tracking-tighter text-center font-alt text-accents-6 text-xl md:text-3xl lg:text-4xl">
                {quote.content}
              </h1>
              <p className="text-xxs uppercase mt-1 text-center">
                "{quote.author.name}"
              </p>
            </div>
            <div className="flex items-center mt-5 md:mx-auto md:mt-10 lg:mt-20">
              <div className="w-1/3 mr-3 md:mr-0">
                <img
                  src={quote.author.img_path}
                  className="w-24 md:h-48 md:w-48 rounded-lg object-cover block"
                  alt={quote.author}
                  width={64}
                  height={64}
                />
              </div>
              <p className="w-2/3 text-xs pt-2 text-accents-7 bio md:text-xl">
                {quote.author.bio}
              </p>
            </div>
          </div>
          {/* Exercice section */}
          <Exercise
            exercise_img={quote.exercise_img}
            exercise_text={quote.exercise_text}
          />
        </>
      )}
    </>
  )
}

export default Citation
