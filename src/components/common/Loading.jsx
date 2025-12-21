import React from 'react'
import ImgLoading from '@/assets/images/loading.svg'

const Loading = () => {
  return (
    <div className='fixed inset-0 flex flex-col items-center justify-center w-full h-full bg-white/70 z-999'>
      <img src={ImgLoading} />
    </div>
  )
}

export default Loading
