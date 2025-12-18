import React from 'react'
import check_off from '@/assets/icons/icon-check.svg'
import check_on from '@/assets/icons/icon-checked.svg'

const AgreeItem = ({ required, title, checked, onToggle, onView }) => {
  return (
    <div className='flex py-3.5'>
      <div className='shrink-0 cursor-pointer'>
        <img
          src={checked ? check_on : check_off}
          alt='check'
          className='w-6 aspect-square mr-1'
          onClick={onToggle}
        />
      </div>
      <span className='flex-1'>
        [{required ? '필수' : '선택'}] {title}
      </span>
      <button type='button' onClick={onView} className='shrink-0 underline cursor-pointer'>
        보기
      </button>
    </div>
  )
}

export default AgreeItem
