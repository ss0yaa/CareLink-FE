import React from 'react'
import SmallArticleCard from './SmallArticleCard'
import Thumb from '@/assets/images/temp-content-thumb.svg'

const SmallArticleSection = ({ items }) => {
  return (
    <div className='w-full overflow-x-auto'>
      <div className='flex flex-row gap-[35px] flex-nowrap w-max mr-12'>
        {items.map((item) => (
          <SmallArticleCard
            key={item.newsId}
            newsId={item.newsId}
            img={item.thumbnailUrl}
            title={item.title}
            subtitle={item.previewSummary}
            time={item.estimatedMinutes}
          />
        ))}
      </div>
    </div>
  )
}

export default SmallArticleSection
