import React from 'react'
import care from '@/assets/icons/icon-care.svg'

const CareMessageCard = ({ message }) => {
  return (
    <div className='flex items-start rounded-[15px] p-[22px] inset-shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
      <div className='rounded-[50%] p-[9px] bg-[#E6FAF7] aspect-square w-[51px] shrink-0'>
        <img src={care} alt='케어링크' className='aspect-square w-[33px]' />
      </div>
      <div className='flex flex-col justify-center pl-3'>
        <p className='font-semibold text-black text-[23px] pb-[7px] pt-[7px]'>케어링크의 한 마디</p>
        <p className='font-normal text-black text-[18px]'>{message}</p>
      </div>
    </div>
  )
}

export default CareMessageCard
