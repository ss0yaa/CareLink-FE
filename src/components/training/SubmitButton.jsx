import React from 'react'

function SubmitButton({ label, onClick }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='w-[400px] bg-[#6AC7A6]  py-[15px] rounded-[20px] text-white text-[20px] font-semibold'
    >
      {label}
    </button>
  )
}

export default SubmitButton
