import React from 'react'
import SideNavBar from '@/components/common/SideNavBar'
import DiaryListContent from '@/components/diary/DiaryListContent'

const DiaryListPage = () => {
  return (
    <div className='flex w-full h-dvh'>
      <SideNavBar />
      <DiaryListContent />
    </div>
  )
}

export default DiaryListPage
