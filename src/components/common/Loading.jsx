import React from 'react'
import ImgLoading from '@/assets/images/loading.svg'

const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <img src={ImgLoading} />
    </div>
  )
}

export default Loading
