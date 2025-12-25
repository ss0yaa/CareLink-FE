import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import api from '@/apis/axios'
import Profile from '@/assets/icons/icon-profile.svg'
import Chat from '@/assets/icons/icon-nav-chat.svg'
import Training from '@/assets/icons/icon-nav-training.svg'
import Diary from '@/assets/icons/icon-nav-diary.svg'
import DashBoard from '@/assets/icons/icon-nav-dashboard.svg'
import Setting from '@/assets/icons/icon-nav-setting.svg'

const MENUS = [
  { key: 'chat', label: '챗봇', icon: Chat, path: '/chat' },
  { key: 'training', label: '인지훈련', icon: Training, path: '/training' },
  { key: 'diary', label: '일기', icon: Diary, path: '/diary' },
  { key: 'dashboard', label: '대시보드', icon: DashBoard, path: '/dashboard' },
  { key: 'settings', label: '환경설정', icon: Setting, path: '/settings' },
]

function SideNavBar() {
  const [name, setName] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (path) => {
    if (!path) return
    navigate(path)
  }

  const getUsername = async () => {
    try {
      const res = await api.get('/api/username')

      setName(res.data.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getUsername()
  }, [])
  return (
    <div className='h-dvh w-68 bg-[#F8F9F9] px-5 border-r border-r-[#DADADA]'>
      <div className='flex flex-row items-center gap-1.5 pt-5 px-2.5 pb-15'>
        <img src={Profile} />
        <p className='text-[30px] font-medium'>{name}</p>
      </div>
      {/* 메뉴 리스트 */}
      <nav className='flex flex-col gap-[30px]'>
        {MENUS.map(({ key, label, icon, path }) => {
          const isActive = location.pathname.startsWith(path)

          return (
            <div
              key={key}
              onClick={() => handleClick(path)}
              className={`flex flex-row gap-[7px] p-2.5 rounded-[10px] items-center cursor-pointer ${isActive ? 'bg-[#B3DBD4]' : ''}`}
            >
              <img src={icon} />
              <p className='text-[25px]'>{label}</p>
            </div>
          )
        })}
      </nav>
    </div>
  )
}

export default SideNavBar
