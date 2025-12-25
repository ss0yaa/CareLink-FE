import React from 'react'
import BigArticleCard from './BigArticleCard'

const BigArticleSection = ({ items, disabled }) => {
  return (
    <div className='w-full overflow-x-auto'>
      <div className='flex flex-row gap-[30px] flex-nowrap w-max'>
        {items.map((item) => (
          <BigArticleCard
            key={item.newsId}
            newsId={item.newsId}
            img={item.thumbnailUrl}
            title={item.title}
            time={item.estimatedMinutes}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  )
}

export default BigArticleSection
