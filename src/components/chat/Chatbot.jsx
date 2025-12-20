import React, { useEffect, useRef } from 'react'
import ChatBubble from './ChatBubble'

function Chatbot({ messages }) {
  const bottomRef = useRef(null)

  useEffect(() => {
    if (!bottomRef.current) return
    bottomRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [messages])
  return (
    <div className='h-[599px] flex-1 bg-white rounded-t-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-b-[#DADADA] overflow-y-auto'>
      {messages.map((msg) => (
        <ChatBubble key={msg.id} msg={msg} />
      ))}
      {/* 채팅 기준점 */}
      <div ref={bottomRef} />
    </div>
  )
}

export default Chatbot
