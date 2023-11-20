import React from 'react'
// Components
import Card from './Card'

function CardLayout({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.map(item => (
        <Card />
      ))}
    </div>
  )
}

export default CardLayout
