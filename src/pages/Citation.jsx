import React from "react"
import useSWR from "swr"

import { useParams } from "react-router-dom"
import { fetcher } from "../utils/helpers"

function Citation() {
  let { id } = useParams()
  const { data, error, isLoading } = useSWR("/data/data.json", fetcher)
  if (error)
    return (
      <div className="text-lg text-center">
        We are sorry an error has occur loading data. Try to refresh the page.
      </div>
    )
  if (isLoading) return
  const citation = data.data.find(item => parseInt(item.id) === parseInt(id))

  return (
    <div className="">
      <div>
        <h1 className="font-bold tracking-tighter text-center font-alt text-accents-6 text-xl md:text-3xl lg:text-4xl">
          {citation.text}
        </h1>
        <p className="text-xxs uppercase mt-1 text-center">
          "{citation.author}"
        </p>
      </div>
      <div className="flex items-center mt-5 md:mx-auto md:mt-10 lg:mt-20">
        <div className="md:w-1/3 mr-3 md:mr-0">
          <img
            src={citation.author_img}
            className="h-16 w-16 md:h-48 md:w-48 rounded-lg object-cover block"
            alt={citation.author}
            width={64}
            height={64}
          />
        </div>
        <p className="text-xs pt-2 text-accents-7 bio md:w-3/5 md:text-xl">
          {citation.author_bio}
        </p>
      </div>
    </div>
  )
}

export default Citation
