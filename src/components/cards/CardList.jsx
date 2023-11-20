import React from 'react'
// Components
import Card from './Card'

function CardList({ data }) {
  return (
    <div className="flex flex-col">
      {data.map(item => (
        <Card
          key={item.id}
          text={item.text}
          author={item.author}
          image={item.image}
          id={item.id}
        />
      ))}
    </div>
  )
}

export default CardList
