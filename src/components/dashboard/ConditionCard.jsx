import React from 'react'
import condition from '@/assets/icons/icon-dashboard-condition.svg'

const ConditionCard = () => {
  return (
    <div className='bg-[#DFF0EF] rounded-[15px] p-[21px] min-w-40'>
      <div className='flex justify-between items-center'>
        <p className='font-semibold text-lg text-black'>컨디션</p>
        <div className='px-[5px] py-2.5 bg-[#B6E5E0] rounded-[15px]'>
          <img src={condition} alt='컨디션' className='aspect-square w-[30px]' />
        </div>
      </div>
      <div>
        <p className='font-semibold text-[28px] text-black py-5'>좋음</p>
        {/* <img src="" alt="" /> */}
        <p className='font-normal text-[15px] text-black text-end'>일주일 변화 추이</p>
      </div>
    </div>
  )
}

export default ConditionCard
