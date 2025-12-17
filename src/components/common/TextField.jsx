import React from 'react'

const TextField = ({ label, subtitle, placeholder, type, value, onChange }) => {
  return (
    <div>
      <div>
        <span className='text-[18px] font-semibold'>{label}</span>
        <span className='text-[15px] font-normal'>{subtitle}</span>
      </div>
      <input
        className='border-solid border-[1.5px] border-[#b3b3b3] rounded-[10px] w-full py-[19px] pl-[25px] font-medium text-[18px]'
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default TextField
