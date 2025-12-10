import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function BigArticleCard({ img, title, time }) {
  const navigate = useNavigate()
  const { newsId } = useParams()

  return (
    <div
      className='w-80 h-80 flex flex-col gap-2.5 p-5 rounded-[20px] bg-[#D9D9D9] cursor-pointer'
      onClick={() => navigate(`/training/article`)} // 임시 경로
    >
      <img className='pb-2.5' src={img} />
      <p className='font-semibold text-[20px] line-clamp-1'>{title}</p>
      <p className='font-normal text-[18px]'>예상 소요 시간: {time}분</p>
    </div>
  )
}

export default BigArticleCard
