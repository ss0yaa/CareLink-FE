import React from 'react'
import CheckOn from '@/assets/icons/icon-small-checked-on.svg'
import CheckOff from '@/assets/icons/icon-small-checked-off.svg'

function CheckList({ title }) {
  return (
    <div>
      <p className='font-[30px]'>{title}</p>
    </div>
  )
}

export default CheckList
