import React from 'react'
import IconNumber from '@/assets/icons/icon-number-2.svg'

const SummaryOneLineBox = () => {
  return (
    <div>
      <div className='flex flex-row items-center gap-[13px]'>
        <img src={IconNumber} />
        <p className='font-medium text-[25px]'>한 줄 요약하기</p>
      </div>
    </div>
  )
}

export default SummaryOneLineBox
