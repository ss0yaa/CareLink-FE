import React from 'react'
import warning from '@/assets/icons/icon-warning.svg'
import security from '@/assets/icons/icon-security.svg'

const NotificationCard = () => {
  return (
    <div className='px-6 py-6 bg-[#F7EAEA] rounded-[15px]'>
      <div>
        <p className='font-bold text-[25px] text-[#980000]'>보호자 알림</p>
      </div>
      <div className='flex items-start pt-[25px] pb-8'>
        <img src={warning} alt='경고' />
        <div className='pl-5'>
          <p className='font-semibold text-[18px] text-black pb-[5px]'>약 복용 기록 부재</p>
          <p className='font-light text-[18px] text-black leading-5'>
            3일 연속 약 복용 기록이 <br /> 없습니다. <br /> 확인이 필요합니다.
          </p>
        </div>
      </div>
      <div className='rounded-[15px] bg-[#F43F5E] flex items-center justify-center px-16 py-3.5'>
        <img src={security} alt='확인하기' className='aspect-square w-[30px]' />
        <p className='font-semibold text-[18px] text-white pl-[5px]'>기록 확인하기</p>
      </div>
    </div>
  )
}

export default NotificationCard
