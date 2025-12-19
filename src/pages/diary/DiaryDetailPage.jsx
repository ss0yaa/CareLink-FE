import React from 'react'
import SideNavBar from '@/components/common/SideNavBar'
import DiaryDetailContent from '@/components/diary/DiaryDetailContent'

const DiaryDetailPage = () => {
  return (
    <div className='flex w-full h-dvh'>
      <SideNavBar />
      <DiaryDetailContent />
    </div>
  )
}

export default DiaryDetailPage
