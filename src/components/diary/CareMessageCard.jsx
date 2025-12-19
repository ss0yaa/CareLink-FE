import React from 'react'
import care from '@/assets/icons/icon-care.svg'

const CareMessageCard = () => {
  return (
    <div className='flex items-start rounded-[15px] p-[22px] inset-shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
      <div className='rounded-[50%] p-[9px] bg-[#E6FAF7]'>
        <img src={care} alt='케어링크' className='aspect-square w-[33px]' />
      </div>
      <div className='flex flex-col justify-center pl-3'>
        <p className='font-semibold text-black text-[23px] pb-[7px] pt-[7px]'>케어링크의 한 마디</p>
        <p className='font-normal text-black text-[18px]'>
          정말 대단해요! <br />
          일기를 꾸준히 쓰는 건 생각보다 쉽지 <br /> 않은데, 이렇게 계속 이어오신 것만으로도 <br />{' '}
          스스로를 잘 돌보고 계시다는 뜻이죠!
        </p>
      </div>
    </div>
  )
}

export default CareMessageCard
