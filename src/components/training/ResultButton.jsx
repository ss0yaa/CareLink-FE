import React from 'react'
import Button from '@/assets/icons/icon-result.svg'

const ResultButton = () => {
  return (
    <div className='w-fit flex flex-row gap-[5px] m-auto justify-center items-center px-[63px] py-[11px] bg-[#1D968199] rounded-[20px] cursor-pointer'>
      <img src={Button} />
      <p className='font-semibold text-white text-5'>지난 결과 보기</p>
    </div>
  )
}

export default ResultButton
