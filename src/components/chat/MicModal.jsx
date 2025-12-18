import React from 'react'
import RecordingIcon from '@/assets/icons/icon-mic-recording.svg'

function MicModal({ onClose }) {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full '>
<<<<<<< HEAD
      <div className='absolute inset-0 shadow-[0px_1px_5px_3px_rgba(0,0,0,0.25)] backdrop-blur-sm' />
=======
      <div className='absolute inset-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-sm' />
>>>>>>> dab64dfa8ca7872ddec519a3b92968057cfd3e05
      <div
        className={`px-[123px] py-[35px] relative flex flex-col gap-5 items-center justify-center m-auto py-10 bg-white shadow-[0px_1px_5px_3px_rgba(0,0,0,0.25)] rounded-[25px] `}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className='absolute text-[30px] cursor-pointer right-[30px] top-[20px] '
        >
          ✕
        </button>
        <div className='flex flex-row gap-[15px] items-center justify-center px-[35px] py-[14px] bg-[#E6FAF7] border-[1.50px] border-primary rounded-[100px]'>
          <div className='w-[17px] h-[17px] bg-primary rounded-[200px]'></div>
          <p className='font-semibold text-[20px]'>음성 인식 중</p>
        </div>
        <img src={RecordingIcon} />
        <div className='flex flex-col gap-2.5 justify-center items-center'>
          <p className='font-semibold text-[25px]'>목소리를 듣고 있어요</p>
          <p className='font-regular text-[15px]'>
            멈추고 싶은 경우 아래의 ‘완료’ 버튼을 눌러주세요.
          </p>
        </div>
        <button
          type='button'
          onClick={onClose}
          className='mt-5 px-[141px] py-[10.5px] font-semibold text-[23px] bg-primary text-white rounded-[10px] cursor-pointer'
        >
          완료
        </button>
      </div>
    </div>
  )
}

export default MicModal
