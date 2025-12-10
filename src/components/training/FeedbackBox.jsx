import React from 'react'
import CircleCheck from '@/assets/icons/icon-circle-check.svg'

function FeedbackBox({ title, text, boxtitle, feedbackType }) {
  return (
    <div className='flex flex-col gap-5 p-[30px] mt-[50px] mr-[58px] ml-[48px] bg-[#D4ECDB] rounded-[20px]'>
      <div className='flex flex-row gap-[11px]'>
        <img src={CircleCheck} />
        <p className='font-semibold text-[23px]'>{title}</p>
      </div>
      <p className='text-[18px]'>{text}</p>
      <div className='py-[18px] px-[21px] bg-white rounded-[10px]'>
        <p className='font-semibold text-[20px]'>{boxtitle}</p>
        <div className='pt-2.5'>
          {feedbackType === 1 && '첫 번째 피드백 내용입니다.'}
          {feedbackType === 2 && '두 번째 피드백 내용입니다.'}
        </div>
      </div>
    </div>
  )
}

export default FeedbackBox
