import React from 'react'
import ChatbotProfile from '@/assets/icons/icon-chatbot-profile.svg'

function ChatBubble({ msg }) {
  const isUser = msg.role === 'user'
  return (
    <div className={`m-[25px] flex items-start ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && <img src={ChatbotProfile} className='mr-[17px]' />}
      <div
        className={`max-w-[42%] bg-[#EAEAEA] text-[18px] px-[15px] py-5 ${isUser ? 'rounded-tr-[10px] rounded-bl-[10px] rounded-tl-[10px]' : 'rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] whitespace-pre-line'}`}
      >
        {msg.text}
      </div>
    </div>
  )
}

export default ChatBubble
