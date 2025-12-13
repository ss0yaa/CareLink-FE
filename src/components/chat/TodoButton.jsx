import React from 'react'
import CheckOff from '@/assets/icons/icon-checked-off.svg'
import CheckOn from '@/assets/icons/icon-checked-on.svg'

function TodoButton({ icon, title, subtitle, done, onClick }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='w-[298px] flex flex-row justify-between items-center px-5 py-[21px] bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#34C9B0] cursor-pointer'
    >
      <div className='flex flex-row gap-[15px]'>
        <img src={icon} />
        <div className='flex flex-col items-start gap-1.5'>
          <p className='text-[20px] font-semibold text-black'>{title}</p>
          <p className='text-[15px] font-normal text-neutral-600'>{subtitle}</p>
        </div>
      </div>
      <img src={done ? CheckOn : CheckOff} />
    </button>
  )
}

export default TodoButton
