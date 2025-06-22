import React from 'react'
import "./newsCard.css"
export const NewsCard = ({title, description, source, image}) => {

    const ImageUrl = image ? image : "https://placehold.co/400"

  return (
    <div className='News_card'>
        <img src={ImageUrl} alt={title}/>
        <div className='card-content'></div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Fuente: {source}</p>
    </div>
  )
}
