import React from 'react'
import { useNavigate } from 'react-router-dom'
import Arrow from '@/assets/icons/icon-settings-arrow.svg'

function SettingsButton({ icon, title, subtitle, path }) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(path)
  }
  return (
    <div
      onClick={handleClick}
      className='flex flex-row justify-between px-[30px] py-[26px] bg-white rounded-[20px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.25)] cursor-pointer'
    >
      <div className='flex flex-row items-center gap-[30px]'>
        <img src={icon} />
        <div className='flex flex-col gap-2.5'>
          <p className='font-semibold text-[25px]'>{title}</p>
          <p className='font-regular text-[15px] text-[#606060]'>{subtitle}</p>
        </div>
      </div>
      <img src={Arrow} />
    </div>
  )
}

export default SettingsButton
