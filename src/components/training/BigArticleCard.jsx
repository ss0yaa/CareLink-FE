import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function BigArticleCard({ newsId, img, title, time }) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/training/article/${newsId}`)}
      className='w-80 h-80 flex flex-col gap-2.5 p-5 rounded-[20px] bg-[#E8E8E8] cursor-pointer'
    >
      <img className='w-[280px] h-[170px] rounded-[16px] object-cover pb-2.5' src={img} />
      <p className='font-semibold text-[20px] line-clamp-1'>{title}</p>
      <p className='font-normal text-[18px]'>예상 소요 시간: {time}분</p>
    </div>
  )
}

export default BigArticleCard
