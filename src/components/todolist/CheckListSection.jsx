import React from 'react'
import CheckOn from '@/assets/icons/icon-small-checked-on.svg'
import CheckOff from '@/assets/icons/icon-small-checked-off.svg'

function CheckListSection({ title, items, onChange }) {
  const handleClick = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isTaken: !item.isTaken,
        }
      }
      return item
    })

    onChange(newItems)
  }

  return (
    <div>
      <div className='flex flex-col gap-2.5'>
        <p className='font-medium text-[30px]'>{title}</p>
        <hr className='w-[592px] border-0 border-t border-[#575757]' />
      </div>
      {/* 체크 리스트 */}
      <div className='flex flex-col gap-5 mt-[25px]'>
        {items.map((item) => (
          <div key={item.id} className='grid grid-cols-[61px_140px_1fr]'>
            <button type='button' onClick={() => handleClick(item.id)} className='cursor-pointer'>
              {item.isTaken ? (
                <img src={CheckOn} alt='checked' />
              ) : (
                <img src={CheckOff} alt='unchecked' />
              )}
            </button>
            <p className='text-[25px]'>{item.name}</p>
            <p className='text-[25px]'>({item.time})</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CheckListSection
