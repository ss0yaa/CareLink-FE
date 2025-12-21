import React from 'react'
import calender from '@/assets/icons/icon-calender.svg'
import DiaryTitleInput from './DiaryTitleInput'
import DiaryTool from './DiaryTool'
import DiaryBtn from './DiaryBtn'
import diaryRecord from '@/assets/icons/icon-diary-record.svg'

const DiaryWriteContent = () => {
  const today = new Date()
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`

  return (
    <div className='flex-1 bg-background px-[50px] py-[30px] overflow-y-auto flex flex-col gap-5'>
      <div>
        <h1 className='font-semibold text-[40px] text-black pb-3'>일기</h1>
        <div className='flex items-center'>
          <img src={calender} alt='날짜' className='aspect-square w-[25px]' />
          <p className='font-normal text-[18px] text-black pl-[5px]'>{formattedDate}</p>
        </div>
      </div>
      <DiaryTitleInput />
      <DiaryTool />
      <div className='border-[1.5px] border-[#B3B3B3] rounded-[10px] min-h-[800px]'>
        {/* 일기 캔버스 */}
      </div>
      <div>
        <div className='flex justify-between'>
          <button
            type='button'
            className='border-[1.5px] border-primary rounded-[10px] bg-white font-semibold text-[23px] text-black min-w-[282px] py-5 cursor-pointer flex justify-center items-center'
          >
            <img src={diaryRecord} alt='일기 기록' className='w-[21px] h-6 mr-2.5' />
            나의 일기 기록
          </button>
          <DiaryBtn title='저장하기' />
        </div>
      </div>
    </div>
  )
}

export default DiaryWriteContent
