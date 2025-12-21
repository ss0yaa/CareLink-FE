import React, { useState } from 'react'
import LeftArrow from '@/assets/icons/icon-arrow-left.svg'
import RightArrow from '@/assets/icons/icon-arrow-right.svg'

function MonthSection({ month, setMonth }) {
  const handlePrevMonth = () => {
    setMonth((prev) => (prev === 1 ? 12 : prev - 1))
  }

  const handleNextMonth = () => {
    setMonth((prev) => (prev === 12 ? 1 : prev + 1))
  }
  return (
    <div className='flex flex-row gap-[92px] my-[33px] items-center justify-center'>
      <img src={LeftArrow} onClick={handlePrevMonth} className='cursor-pointer' />
      <p className='w-[60px] font-medium text-[30px] text-center'>{month}월</p>
      <img src={RightArrow} onClick={handleNextMonth} className='cursor-pointer' />
    </div>
  )
}

export default MonthSection
