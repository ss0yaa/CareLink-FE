import React from 'react'
import tip from '@/assets/icons/icon-tip.svg'

const DiaryTipCard = () => {
  return (
    <div className='flex items-start rounded-[15px] p-[22px] inset-shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
      <div className='rounded-[50%] p-[9px] bg-[#E6FAF7]'>
        <img src={tip} alt='팁' className='aspect-square w-[33px]' />
      </div>
      <div className='flex flex-col justify-center pl-3'>
        <p className='font-semibold text-black text-[23px] pb-[7px] pt-[7px]'>사용 팁</p>
        <p className='font-normal text-black text-[18px]'>
          달력에서 <span className='text-primary'>초록색 점</span>이 있는 날짜는 <br /> 일기를
          작성한 날짜입니다. <br /> 날짜를 눌러 그 날의 추억을 확인하세요.
        </p>
      </div>
    </div>
  )
}

export default DiaryTipCard
