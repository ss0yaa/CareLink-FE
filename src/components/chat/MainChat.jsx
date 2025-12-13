import React, { useState } from 'react'
import Chatbot from './Chatbot'
import ChatInputBar from './ChatInputBar'

function MainChat() {
  // 임시 메세지
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'bot',
      text: "안녕하세요, 숙멋사님! 오늘 하루를 시작해볼까요?\n상단의 '오늘의 할 일'을 먼저 확인해주세요.",
    },
  ])

  const handleSendMessage = (text) => {
    if (!text.trim()) return
    const newMessage = {
      id: Date.now(),
      role: 'user',
      text,
    }
    setMessages((prev) => [...prev, newMessage])
  }
  return (
    <div>
      {/* 채팅 기록 */}
      <Chatbot messages={messages} />
      {/* 채팅 입력창 */}
      <ChatInputBar onSend={handleSendMessage} />
    </div>
  )
}

export default MainChat
