import React from 'react'
import Spinner from '@/assets/images/Spinner.svg'

const Loading = () => {
  return (
    <div className='fixed inset-0 flex flex-col items-center justify-center w-full h-full bg-white/70 z-999'>
      <img src={Spinner} />
    </div>
  )
}

export default Loading
