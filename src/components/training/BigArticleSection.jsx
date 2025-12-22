import React from 'react'
import BigArticleCard from './BigArticleCard'
import Thumb from '@/assets/images/temp-article-thumb.svg'

const BigArticleSection = ({ items }) => {
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
          />
        ))}
      </div>
    </div>
  )
}

export default BigArticleSection
