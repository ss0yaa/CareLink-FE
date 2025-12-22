import React from 'react'
import calender from '@/assets/icons/icon-calender-fill.svg'
import DiaryBtn from './DiaryBtn'

const formatKoreanDate = (yyyyMmDd) => {
  if (!yyyyMmDd) return ''
  const [y, m, d] = yyyyMmDd.split('-').map(Number)
  const dt = new Date(y, m - 1, d)
  const day = ['일', '월', '화', '수', '목', '금', '토'][dt.getDay()]
  return `${y}년 ${m}월 ${d}일 (${day})`
}

const CalederCard = ({ diary }) => {
  const dateText = diary?.date ? formatKoreanDate(diary.date) : '표시할 일기가 없어요'
  const titleText = diary?.title ?? '-'

  return (
    <div className='flex flex-col rounded-[15px] p-[22px] inset-shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
      <div className='flex'>
        <div className='rounded-[50%] p-[9px] bg-[#E6FAF7]'>
          <img src={calender} alt='달력' className='aspect-square w-[33px]' />
        </div>
        <p className='font-semibold text-black text-[23px] pb-[7px] pt-[7px] pl-5'>{dateText}</p>
      </div>
      <div className='pl-2.5 pt-4'>
        <p className='font-normal text-[18px] text-[#323232]'>일기 제목</p>
        <p className='font-semibold text-[30px] text-black'>{titleText}</p>
      </div>
      <div className='px-[37px] pt-4 flex justify-center'>
        <DiaryBtn title={'일기 자세히 보기'} disabled={!diary} diaryId={diary?.id} />
      </div>
    </div>
  )
}

export default CalederCard
