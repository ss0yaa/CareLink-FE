import React from 'react'

function FieldRow({ label, placeholder, multiline = false, rows = 2, value }) {
  return (
    <div className='grid grid-cols-[82px_1fr] items-start'>
      <p className='font-semibold text-[20px] leading-tight'>{label}</p>
      {/* multiline 여부 체크 */}
      {multiline ? (
        <textarea
          placeholder={placeholder}
          value={value}
          rows={rows}
          className='w-full bg-[#F2F3F4] rounded-[10px] resize-none px-5 py-[15px]'
        />
      ) : (
        <input
          placeholder={placeholder}
          value={value}
          className='w-full bg-[#F2F3F4] rounded-[10px] px-5 py-[15px]'
        ></input>
      )}
    </div>
  )
}

export default FieldRow
