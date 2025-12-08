import React from 'react'
import SmallArticleCard from './SmallArticleCard'
import Thumb from '@/assets/images/temp-content-thumb.svg'

// 더미데이터
const dummyData = [
  {
    id: 1,
    img: Thumb,
    title: '뉴스 더미 데이터 1',
    subtitle: '더미데이터입니다.',
    time: 2,
  },
  {
    id: 2,
    img: Thumb,
    title: '뉴스 더미 데이터 2',
    subtitle: '더미데이터입니다.',
    time: 2,
  },
  {
    id: 3,
    img: Thumb,
    title: '뉴스 더미 데이터 3',
    subtitle: '더미데이터입니다.',
    time: 2,
  },
  {
    id: 4,
    img: Thumb,
    title: '뉴스 더미 데이터 4',
    subtitle: '더미데이터입니다.',
    time: 2,
  },
  {
    id: 5,
    img: Thumb,
    title: '예시 기사 더미 데이터 5',
    subtitle: '더미데이터입니다.',
    time: 2,
  },
]

const SmallArticleSection = () => {
  return (
    <div className='w-full overflow-x-auto'>
      <div className='flex flex-row gap-[35px] flex-nowrap w-max'>
        {dummyData.map((d) => (
          <SmallArticleCard
            key={d.id}
            img={d.img}
            title={d.title}
            subtitle={d.subtitle}
            time={d.time}
          />
        ))}
      </div>
    </div>
  )
}

export default SmallArticleSection
