import React from 'react'
import pen from '@/assets/icons/icon-pen.svg'
import eraser from '@/assets/icons/icon-eraser.svg'
import undo from '@/assets/icons/icon-undo.svg'

const COLORS = ['#000000', '#FF0000', '#0000FF', '#00FF00']

const DiaryTool = ({ tool, setTool, color, setColor, onUndo }) => {
  const toolBtnBase =
    'flex flex-col items-center justify-center w-[60px] aspect-square rounded-[20px] cursor-pointer'
  const toolBtnActive = 'bg-primary'
  const toolBtnInactive = 'bg-[#DEDEDE]'

  return (
    <div className='border-[1.5px] border-[#B3B3B3] rounded-[10px] px-[25px] py-2.5 flex items-center'>
      <div className='flex gap-6'>
        <button
          type='button'
          onClick={() => setTool('pen')}
          className={`${toolBtnBase} ${tool === 'pen' ? toolBtnActive : toolBtnInactive}`}
        >
          <img src={pen} alt='펜' className='aspect-square w-[30px]' />
          <p className='font-medium text-[13px] text-white'>펜</p>
        </button>
        <button
          type='button'
          onClick={() => setTool('eraser')}
          className={`${toolBtnBase} ${tool === 'eraser' ? toolBtnActive : toolBtnInactive}`}
        >
          <img src={eraser} alt='지우개' className='aspect-square w-[30px]' />
          <p className='font-medium text-[13px] text-white'>지우개</p>
        </button>
        <button type='button' onClick={onUndo} className={`${toolBtnBase} ${toolBtnInactive}`}>
          <img src={undo} alt='되돌리기' className='aspect-square w-[30px]' />
          <p className='font-medium text-[13px] text-white'>되돌리기</p>
        </button>
      </div>
      <div className='h-[52px] w-[0.5px] bg-[#606060] mx-10'></div>
      <div className='flex gap-6'>
        {COLORS.map((c) => (
          <button
            key={c}
            type='button'
            onClick={() => setColor(c)}
            className='rounded-[50%] aspect-square w-[45px] cursor-pointer'
            style={{
              backgroundColor: c,
              outline: color === c ? '3px solid #111' : 'none',
              outlineOffset: '2px',
            }}
            aria-label={`color-${c}`}
          />
        ))}
      </div>
    </div>
  )
}

export default DiaryTool
