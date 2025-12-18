import React, { useRef, useState } from 'react'
import Wheel from './Wheel'

function TimePicker({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null

  const hours = Array.from({ length: 23 }, (_, i) => String(i + 1).padStart(2, '0'))
  const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'))

  const [hour, setHour] = useState('01')
  const [minute, setMinute] = useState('00')

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full'>
      <div className='absolute inset-0 backdrop-blur-sm' />
      <div className=' relative flex flex-col px-5 py-10 bg-white rounded-[10px] shadow-[0px_1px_5px_3px_rgba(0,0,0,0.25)]'>
        <p className='font-semibold text-[23px] pb-12'>시간 선택</p>

        {/* 휠 영역 */}
        <div className='relative flex justify-center gap-[50px] h-[275px] z-10'>
          <div
            className='pointer-events-none absolute top-1/2 left-0 right-0 
                h-12 -translate-y-1/2 bg-[#C5EDE6] rounded-[10px] z-[-1]'
          />
          <Wheel items={hours} value={hour} onChange={setHour} />
          <Wheel items={minutes} value={minute} onChange={setMinute} />
          {/* 중앙 선택 영역 표시 */}
        </div>

        {/* 버튼 */}
        <div className='flex justify-between gap-12 mt-12'>
          <button
            onClick={onClose}
            className='w-[127px] py-2 bg-[#D6D6D6] text-white font-semibold text-[18px] rounded-[10px] cursor-pointer'
          >
            취소
          </button>
          <button
            onClick={() => onConfirm(`${hour}:${minute}`)}
            className='w-[127px] py-2 bg-primary text-white font-semibold text-[18px] rounded-[10px] cursor-pointer'
          >
            확인
          </button>
        </div>
      </div>
    </div>
  )
}

export default TimePicker
