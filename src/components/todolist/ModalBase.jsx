import React from 'react'
import ModalButton from './ModalButton'

function ModalBase({ title, detail, onClose, onConfirm, children, containerClassName = '' }) {
  const today = new Date()
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full '>
      <div className='absolute inset-0 shadow-[0px_1px_5px_3px_rgba(0,0,0,0.25)] backdrop-blur-sm' />
      <div
        className={`max-h-[95dvh] overflow-y-auto relative flex flex-col items-center justify-center m-auto py-10 bg-white shadow-[0px_1px_5px_3px_rgba(0,0,0,0.25)] rounded-[25px] ${containerClassName}`}
      >
        <div className='flex flex-col items-center gap-2.5'>
          <p className='font-semibold text-[40px]'>{title}</p>
          <p className='font-light text-[18px]'>{formattedDate}</p>
        </div>
        <div>{children}</div>
        <div className='flex flex-row gap-[85px]'>
          <ModalButton label='닫기' className='bg-[#D6D6D6]' onClick={onClose} />
          <ModalButton label='확인' className='bg-primary' onClick={onConfirm} />
        </div>
        {detail && <p className='text-zinc-600 font-[#575757] pt-[30px]'>{detail}</p>}
      </div>
    </div>
  )
}

export default ModalBase
