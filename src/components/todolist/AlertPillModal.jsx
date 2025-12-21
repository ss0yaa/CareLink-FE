import React from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from '@/assets/icons/icon-alert.svg'
import Settings from '@/assets/icons/icon-small-settings.svg'

function AlertPillModal() {
  const today = new Date()
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/settings/medications/edit')
  }
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full '>
      <div className='absolute inset-0 shadow-[0px_1px_5px_3px_rgba(0,0,0,0.25)] backdrop-blur-sm' />
      <div
        className={`relative flex flex-col items-center justify-center gap-[48px] m-auto px-[95px] py-[65px] bg-white shadow-[0px_1px_5px_3px_rgba(0,0,0,0.25)] rounded-[25px] overflow-y-auto `}
      >
        <div className='flex flex-col items-center justify-center gap-2.5'>
          <p className='font-semibold text-[40px]'>약 복용 확인</p>
          <p className='font-light text-[18px]'>{formattedDate}</p>
          <img src={Alert} alt='alert' className='py-2.5' />
          <p className='font-semibold text-[25px]'>약 복용 정보가 설정되지 않았습니다.</p>
          <p className='font-regular text-[18px]'>{`약 정보는 환경설정 > 약 정보 수정 에서 설정할 수 있습니다.`}</p>
        </div>
        <button
          type='button'
          onClick={handleClick}
          className='w-[322px] h-12 flex flex-row justify-center items-center gap-2.5 bg-primary rounded-2xl cursor-pointer'
        >
          <img src={Settings} alt='setting' />
          <p className='font-semibold text-[18px] text-white'>약 복용 설정하기</p>
        </button>
      </div>
    </div>
  )
}

export default AlertPillModal
