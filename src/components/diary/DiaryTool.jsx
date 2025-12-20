import React from 'react'
import pen from '@/assets/icons/icon-pen.svg'
import eraser from '@/assets/icons/icon-eraser.svg'
import undo from '@/assets/icons/icon-undo.svg'

const DiaryTool = () => {
  return (
    <div className='border-[1.5px] border-[#B3B3B3] rounded-[10px] px-[25px] py-2.5 flex items-center'>
      <div className='flex gap-6'>
        <button
          type='button'
          className='flex flex-col items-center justify-center w-[60px] aspect-square bg-[#DEDEDE] rounded-[20px] cursor-pointer'
        >
          <img src={pen} alt='펜' className='aspect-square w-[30px]' />
          <p className='font-medium text-[13px] text-white'>펜</p>
        </button>
        <button
          type='button'
          className='flex flex-col items-center justify-center w-[60px] aspect-square bg-[#DEDEDE] rounded-[20px] cursor-pointer'
        >
          <img src={eraser} alt='지우개' className='aspect-square w-[30px]' />
          <p className='font-medium text-[13px] text-white'>지우개</p>
        </button>
        <button
          type='button'
          className='flex flex-col items-center justify-center w-[60px] aspect-square bg-[#DEDEDE] rounded-[20px] cursor-pointer'
        >
          <img src={undo} alt='되돌리기' className='aspect-square w-[30px]' />
          <p className='font-medium text-[13px] text-white'>되돌리기</p>
        </button>
      </div>
      <div className='h-[52px] w-[0.5px] bg-[#606060] mx-10'></div>
      <div className='flex gap-6'>
        <button className='rounded-[50%] bg-black aspect-square w-[45px] cursor-pointer'></button>
        <button className='rounded-[50%] bg-[#FF0000] aspect-square w-[45px] cursor-pointer'></button>
        <button className='rounded-[50%] bg-[#0000FF] aspect-square w-[45px] cursor-pointer'></button>
        <button className='rounded-[50%] bg-[#00FF00] aspect-square w-[45px] cursor-pointer'></button>
      </div>
    </div>
  )
}

export default DiaryTool
