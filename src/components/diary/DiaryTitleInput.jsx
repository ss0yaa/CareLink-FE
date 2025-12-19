import React from 'react'
import diary from '@/assets/icons/icon-diary.svg'

const DiaryTitleInput = () => {
  return (
    <div>
      <div className='flex items-center pb-2.5'>
        <img src={diary} alt='일기' className='aspect-square w-[25px]' />
        <p className='font-medium text-[24px] pl-2.5'>일기 제목</p>
      </div>
      <input
        type='text'
        placeholder='제목을 입력해주세요.'
        className='border-[1.5px] border-[#B3B3B3] rounded-[10px] w-full font-semibold text-[20px] px-[25px] py-[18px]'
      />
    </div>
  )
}

export default DiaryTitleInput
