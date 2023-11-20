import React from 'react'
import Sticker from './Sticker'

function StickerList({ data }) {
  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 py-10">
      {data.map(item => (
        <Sticker
          title={item.title}
          text={item.text}
          color={item.color}
          key={item.id}
        />
      ))}
    </div>
  )
}

export default StickerList
