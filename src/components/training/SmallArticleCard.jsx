import React from 'react'

const SmallArticleCard = ({ img, title, subtitle, time }) => {
  return (
    <div className='w-64 h-80 flex flex-col  gap-2.5 py-5 px-[15px] rounded-[20px] bg-[#D9D9D9] cursor-pointer'>
      <img className='pb-2.5' src={img} />
      <p className='font-semibold text-[20px] pb-[5px] line-clamp-1'>{title}</p>
      <p className='font-normal text-[18px] line-clamp-2'>{subtitle}</p>
      <p className='font-normal text-[18px]'>예상 소요 시간: {time}분</p>
    </div>
  )
}

export default SmallArticleCard
