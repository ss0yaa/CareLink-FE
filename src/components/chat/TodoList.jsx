import React from 'react'
import TodoButton from './TodoButton'
import Pill from '@/assets/icons/icon-pill.svg'
import Condition from '@/assets/icons/icon-condition.svg'
import Quiz from '@/assets/icons/icon-quiz.svg'

const TodoList = () => {
  return (
    <>
      <p className='font-semibold text-[25px] px-5'>오늘의 할 일</p>
      <div className='flex flex-row gap-[45px] px-5 pt-5 pb-10'>
        <TodoButton icon={Pill} title={'약 복용'} subtitle={'약을 드셨나요?'} />
        <TodoButton icon={Condition} title={'컨디션'} subtitle={'오늘 기분은 어때요?'} />
        <TodoButton icon={Quiz} title={'오늘의 퀴즈'} subtitle={'뇌 건강 퀴즈 풀기'} />
      </div>
    </>
  )
}

export default TodoList
