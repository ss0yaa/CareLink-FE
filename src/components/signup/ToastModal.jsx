import React, { useEffect } from 'react'

const ToastModal = ({ open, message, duration = 1000, onClose }) => {
  useEffect(() => {
    if (!open) return
    const t = setTimeout(() => {
      onClose?.()
    }, duration)
    return () => clearTimeout(t)
  }, [open, duration, onClose])

  if (!open) return null

  return (
    <div className='fixed inset-0 w-full h-dvh z-40 flex items-center justify-center bg-[#E6E5E5]/50'>
      <div className='rounded-[25px] bg-white shadow-[0_1px_5px_3px_rgba(0,0,0,0.25)] px-[30px] py-10'>
        <p className='font-medium text-[23px] text-black'>{message}</p>
      </div>
    </div>
  )
}

export default ToastModal
