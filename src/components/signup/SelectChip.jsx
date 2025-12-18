import React from 'react'

const SelectChip = ({ label, selected, onClick }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`cursor-pointer w-[85px] h-[55px] border-[1.5px] ${selected ? 'border-primary' : 'border-[#b3b3b3]'} rounded-[10px] ${selected ? 'bg-[#e6faf7]' : 'bg-white'} font-normal text-[18px]`}
    >
      {label}
    </button>
  )
}

export default SelectChip
