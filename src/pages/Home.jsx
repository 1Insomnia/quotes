import React from "react"
import supabaseClient from "../lib/supabaseClient"
// Components
import Hero from "../components/hero/Hero"
import CardList from "../components/cards/CardList"
import { fetcher } from "../utils/helpers"

function Home() {
  const [quotes, setQuotes] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(null)
  const [fetchError, setFetchError] = React.useState(null)

  React.useEffect(() => {
    const getQuotes = async () => {
      setIsLoading(true)
      const { data, error } = await supabaseClient.from("quote").select(`
            id,
            content,
            img_path,
            author ( name)
        `)

      if (error) {
        setFetchError("Could not fetch the quotes")
        setQuotes(null)
        setIsLoading(false)
        console.warn(error)
      }
      setQuotes(data)
      setFetchError(null)
      setIsLoading(false)
    }
    getQuotes()
  }, [])

  console.log(quotes)

  return (
    <div>
      <>
        <Hero />
        {fetchError && <div>{fetchError}</div>}
        {isLoading && <div>Loading content</div>}
        {!fetchError && !isLoading && <CardList data={quotes} />}
      </>
    </div>
  )
}

export default Home
