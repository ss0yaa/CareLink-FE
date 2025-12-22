import React from 'react'
import { useNavigate } from 'react-router-dom'

const DiaryBtn = ({ title, diaryId }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (!diaryId) return
    navigate(`/diary/${diaryId}`)
  }

  return (
    <button
      type='button'
      onClick={handleClick}
      disabled={!diaryId}
      className='bg-primary rounded-[10px] font-semibold text-[23px] text-white min-w-[282px] py-5 cursor-pointer'
    >
      {title}
    </button>
  )
}

export default DiaryBtn
