import React from "react"
import useSWR from "swr"
// Components
import Hero from "../components/hero/Hero"
import CardList from "../components/cards/CardList"
import { fetcher } from "../utils/helpers"

function Home() {
  const { data, error, isLoading } = useSWR("/data/data.json", fetcher)
  return (
    <div>
      {!error && !isLoading && (
        <>
          <Hero />
          <CardList data={data.data} />
        </>
      )}
    </div>
  )
}

export default Home
