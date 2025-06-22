import React from 'react'
import { NewsCard } from './newsCard'

export const NewsList = ({news}) => {
  return (
    <div className='news-Container'>
    <h2>Noticas ardientes</h2>
    {news.map ((news, indice) => (
      <NewsCard
      key={indice + news.title}
      title={news.title}
      description={news.description}
      source={news.source}
      image={news.image}
      />
    ))}
    </div>
  )
}
