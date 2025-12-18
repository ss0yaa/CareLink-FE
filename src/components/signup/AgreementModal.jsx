import React from 'react'
import close from '@/assets/icons/icon-close.svg'

const AgreementModal = ({ term, open, onClose }) => {
  if (!open || !term) return null
  return (
    <div className='fixed inset-0 w-full h-dvh z-40 flex items-center justify-center bg-[#E6E5E5]/50'>
      <div className='w-[855px] rounded-[25px] bg-white shadow-[0_1px_5px_3px_rgba(0,0,0,0.25)] px-[30px] py-10 relative'>
        <div className='flex justify-between pb-[30px]'>
          <p>
            [{term.required ? '필수' : '선택'}] {term.title}
          </p>
          <button type='button' onClick={onClose} className='absolute right-4 top-4 cursor-pointer'>
            <img src={close} alt='닫기' />
          </button>
        </div>
        <div className='whitespace-pre-wrap'>
          <p>{term.content}</p>
        </div>
      </div>
    </div>
  )
}

export default AgreementModal
