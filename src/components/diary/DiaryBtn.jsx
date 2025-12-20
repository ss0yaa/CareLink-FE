import React from 'react'

const DiaryBtn = ({ title }) => {
  return (
    <button
      type='button'
      className='bg-primary rounded-[10px] font-semibold text-[23px] text-white min-w-[282px] py-5 cursor-pointer'
    >
      {title}
    </button>
  )
}

export default DiaryBtn
