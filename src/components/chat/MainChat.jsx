import React, { useState, useEffect } from 'react'
import api from '@/apis/axios'
import Chatbot from './Chatbot'
import ChatInputBar from './ChatInputBar'
import Loading from '../common/Loading'

function MainChat() {
  const [isLoading, setIsLoading] = useState(false)
  // 채팅 초기 메세지
  const [messages, setMessages] = useState([])

  // 1. 채팅방 불러오기
  const getChatRoom = async () => {
    try {
      setIsLoading(true)
      const res = await api.get('/api/chatbot')
      const conversations = res.data.data.conversations ?? []

      const getMessages = conversations.flatMap((c, index) => [
        { id: `${index}-question`, role: 'user', text: c.question },
        { id: `${index}-answer`, role: 'bot', text: c.answer },
      ])

      if (getMessages.length === 0) {
        setMessages([
          {
            id: 'default-question',
            role: 'bot',
            text: "안녕하세요! 오늘 하루를 활기차게 시작해볼까요?\n상단의 '오늘의 할 일'을 먼저 확인해주세요.",
          },
          ...getMessages,
        ])
      } else {
        setMessages(getMessages)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  // 2. 음성 -> 채팅 변환 연동
  const sendVoice = async (file) => {
    try {
      setIsLoading(true)
      const formData = new FormData()
      formData.append('file', file)

      const res = await api.post('/api/chatbot/voice', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return res.data.data
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  // 3. 채팅 전송
  const sendChat = async (text) => {
    try {
      setIsLoading(true)
      await api.post('/api/chatbot/chat', {
        question: text,
      })
      await getChatRoom() // 채팅방 다시 불러오기
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getChatRoom()
  }, [])
  return (
    <div className='relative'>
      {isLoading && (
        <div className='absolute inset-0 z-10 flex items-center justify-cente'>
          <Loading />
        </div>
      )}
      {/* 채팅 기록 */}
      <Chatbot messages={messages} />
      {/* 채팅 입력창 */}
      <ChatInputBar onSendText={sendChat} onSendVoice={sendVoice} />
    </div>
  )
}

export default MainChat
