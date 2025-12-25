import React from 'react'
import SmallArticleCard from './SmallArticleCard'

const SmallArticleSection = ({ items, disabled }) => {
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
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  )
}

export default SmallArticleSection
