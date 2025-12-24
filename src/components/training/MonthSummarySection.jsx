import React from 'react'
import Calendar from '@/assets/icons/icon-calender.svg'
import Histogram from '@/assets/icons/icon-histogram.svg'
import Prize from '@/assets/icons/icon-prize.svg'

function MonthSummarySection({ month, count, avgScore, bestScore }) {
  return (
    <div className='flex flex-col gap-[19px] px-[30px] py-[25px] bg-[#E6FAF7] rounded-[15px]'>
      <p className='font-medium text-[25px]'>{month}월의 훈련 요약</p>
      <div className='flex flex-row gap-[200px] items-center justify-center'>
        <div className='flex flex-col gap-2.5 items-center justify-center text-center'>
          <img src={Calendar} />
          <div>
            <p className='font-medium text-[20px]'>총 훈련 횟수</p>
            <p className='font-semibold text-[30px]'>{count}회</p>
          </div>
        </div>
        <div className='flex flex-col gap-2.5 items-center justify-center text-center'>
          <img src={Histogram} />
          <div>
            <p className='font-medium text-[20px]'>평균 요약 점수</p>
            <p className='font-semibold text-[30px]'>
              {avgScore != null ? `${avgScore}점` : '-점'}
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-2.5 items-center justify-center text-center'>
          <img src={Prize} />
          <div>
            <p className='font-medium text-[20px]'>최고 훈련 점수</p>
            <p className='font-semibold text-[30px]'>
              {bestScore != null ? `${bestScore}점` : '-점'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonthSummarySection
