import React from 'react'
import { useNavigate } from 'react-router-dom'

const SmallArticleCard = ({ newsId, img, title, subtitle, time }) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/training/article/${newsId}`)}
      className='w-64 h-80 flex flex-col  gap-2.5 py-5 px-[15px] rounded-2xl bg-[#E8E8E8] cursor-pointer'
    >
      <img className='w-[219px] h-[110px] rounded-2xl object-coverpb-2.5' src={img} />
      <p className='font-semibold text-[20px] pb-[5px] line-clamp-1'>{title}</p>
      <p className='font-normal text-[18px] line-clamp-2'>{subtitle}</p>
      <p className='font-normal text-[18px]'>예상 소요 시간: {time}분</p>
    </div>
  )
}

export default SmallArticleCard
