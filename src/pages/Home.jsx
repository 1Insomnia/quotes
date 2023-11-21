import React from "react"
import useSWR from "swr"
// Components
import Container from "../components/layout/Container"
import Hero from "../components/hero/Hero"
import Navbar from "../components/navigation/Navbar"
import CardList from "../components/cards/CardList"

const fetcher = url => fetch(url).then(res => res.json())

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
