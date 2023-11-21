import React from "react"
import { useParams } from "react-router-dom"

function Citation() {
  let { id } = useParams()

  return <div>Hello {id}</div>
}

export default Citation
