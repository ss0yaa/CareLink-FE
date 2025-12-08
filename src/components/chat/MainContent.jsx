import React from 'react'
import TodoList from './TodoList'
import Chatbot from './Chatbot'

const MainContent = () => {
  return (
    <div className='flex-1 bg-[#F6F8F6] p-[30px]'>
      <TodoList />
      <Chatbot />
    </div>
  )
}

export default MainContent
