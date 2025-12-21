import React from 'react'
import ConditionCard from './ConditionCard'
import StatusCard from './StatusCard'
import QuizCard from './QuizCard'
import CalenderCard from './CalenderCard'
import NotificationCard from './NotificationCard'
import InfoCard from './InfoCard'

const DashboardContent = () => {
  return (
    <div className='flex-1 bg-background px-[50px] py-[30px]'>
      <div>
        <h1 className='font-semibold text-[40px] text-black pb-6'>종합 대시보드</h1>
      </div>
      <div className='grid grid-rows-3 gap-9'>
        <div className='grid grid-cols-4 gap-7'>
          <ConditionCard />
          <StatusCard theme={'medicine'} />
          <StatusCard theme={'diary'} />
          <StatusCard theme={'training'} />
        </div>
        <div className='grid grid-cols-3 gap-7'>
          <QuizCard />
          <CalenderCard />
          <NotificationCard />
        </div>
        <div>
          <InfoCard />
        </div>
      </div>
    </div>
  )
}

export default DashboardContent
