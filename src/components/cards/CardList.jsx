import React from 'react'
// Components
import Card from './Card'

function CardList({ data }) {
  return (
    <div className="py-10">
      {data.map(item => (
        <Card
          key={item.id}
          text={item.text}
          author={item.author}
          image={item.image}
        />
      ))}
    </div>
  )
}

export default CardList
