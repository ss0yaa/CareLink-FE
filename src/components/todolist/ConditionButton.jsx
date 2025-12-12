import React from 'react'

function ConditionButton({ label, icon, isSelected, onClick }) {
  const base = `w-52 py-[20px] text-[20px] rounded-[20px] cursor-pointer`
  let style = 'bg-gray-100'

  if (isSelected) {
    style = 'bg-emerald-50 outline-2 outline-teal-400'
  }

  return (
    <button type='button' onClick={onClick} className={`${base} ${style}`}>
      <div className='flex flex-col items-center justify-center gap-[5px]'>
        {icon && <img src={icon} />}
        {label}
      </div>
    </button>
  )
}

export default ConditionButton
