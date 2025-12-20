import React from 'react'
import SideNavBar from '@/components/common/SideNavBar'
import DiaryWriteContent from '@/components/diary/DiaryWriteContent'

const DiaryWritePage = () => {
  return (
    <div className='flex w-full h-dvh'>
      <SideNavBar />
      <DiaryWriteContent />
    </div>
  )
}

export default DiaryWritePage
