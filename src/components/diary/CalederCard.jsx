import React from 'react'
import calender from '@/assets/icons/icon-calender-fill.svg'
import DiaryBtn from './DiaryBtn'

const CalederCard = () => {
  return (
    <div className='flex flex-col rounded-[15px] p-[22px] inset-shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
      <div className='flex'>
        <div className='rounded-[50%] p-[9px] bg-[#E6FAF7]'>
          <img src={calender} alt='달력' className='aspect-square w-[33px]' />
        </div>
        <p className='font-semibold text-black text-[23px] pb-[7px] pt-[7px] pl-[3px]'>
          2025년 12월 27일 (토)
        </p>
      </div>
      <div className='pl-[34px] pt-4'>
        <p className='font-normal text-[18px] text-[#323232]'>일기 제목</p>
        <p className='font-semibold text-[30px] text-black'>숙멋 사랑해</p>
      </div>
      <div className='px-[37px] pt-4'>
        <DiaryBtn title={'일기 자세히 보기'} />
      </div>
    </div>
  )
}

export default CalederCard
