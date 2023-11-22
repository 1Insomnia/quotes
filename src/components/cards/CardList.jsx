import React from "react"
// Components
import Card from "./Card"

function CardList({ data }) {
  return (
    <div className="flex flex-col">
      {data.map(item => (
        <Card
          key={item.id}
          id={item.id}
          content={item.content}
          author={item.author.name}
          img_path={item.img_path}
        />
      ))}
    </div>
  )
}

export default CardList
