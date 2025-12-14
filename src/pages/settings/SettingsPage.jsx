import React from 'react'
import SideNavBar from '@/components/common/SideNavBar'
import MainSettings from '@/components/settings/MainSettings'

const SettingsPage = () => {
  return (
    <div className='flex w-full h-dvh'>
      <SideNavBar />
      <MainSettings />
    </div>
  )
}

export default SettingsPage
