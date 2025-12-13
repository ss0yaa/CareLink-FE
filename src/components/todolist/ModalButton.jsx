import React from 'react'

function ModalButton({ label, className, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className={`w-72 h-16 font-semibold text-white text-[23px] text-center rounded-[10px] cursor-pointer ${className}`}
      >
        {label}
      </button>
    </>
  )
}

export default ModalButton
