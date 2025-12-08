import React, { useState } from 'react'

function ChatInputBar({ onSend }) {
  const [text, setText] = useState('')

  const handleClick = () => {
    onSend(text)
    setText('')
  }
  return (
    <div className=' h-[99px] bg-white rounded-b-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex justify-center items-center'>
      <div className='flex flex-row px-[26px] w-full'>
        <input
          placeholder='하고 싶은 말을 여기에 입력해주세요.'
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='flex-1 px-[30px] py-[19px] bg-white rounded-tl-[10px] rounded-bl-[10px] border border-[#47B5A2] text-[18px] font-normal'
        />
        <button
          onClick={handleClick}
          className='px-[29px] py-[18px] bg-[#47B5A2] rounded-tr-[10px] rounded-br-[10px] text-white text-5 font-normal cursor-pointer'
        >
          보내기
        </button>
      </div>
    </div>
  )
}

export default ChatInputBar
