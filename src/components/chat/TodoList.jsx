import React, { useState, useEffect } from 'react'
import api from '@/apis/axios'
import TodoButton from './TodoButton'
import PillModal from '../todolist/PillModal'
import ConditionModal from '../todolist/ConditionModal'
import QuizModal from '../todolist/QuizModal'
import Pill from '@/assets/icons/icon-pill.svg'
import Condition from '@/assets/icons/icon-condition.svg'
import Quiz from '@/assets/icons/icon-quiz.svg'

const TodoList = () => {
  const [openModal, setOpenModal] = useState(null)
  const [doneStatus, setDoneStatus] = useState({
    pill: false,
    condition: false,
    quiz: false,
  })

  const handleClose = () => {
    setOpenModal(null)
  }

  const checkTodoList = async () => {
    try {
      const res = await api.get('/api/chatbot')
      const data = res.data.data

      setDoneStatus({
        pill: data.isMedicineChecked,
        condition: data.isConditionChecked,
        quiz: data.isQuizChecked,
      })
    } catch (err) {
    } finally {
    }
  }

  useEffect(() => {
    checkTodoList()
  }, [])

  return (
    <>
      <p className='font-semibold text-[25px] px-5'>오늘의 할 일</p>
      <div className='flex flex-row gap-[45px] px-5 pt-5 pb-10'>
        <TodoButton
          icon={Pill}
          title={'약 복용'}
          subtitle={'약을 드셨나요?'}
          done={doneStatus.pill}
          onClick={() => {
            setOpenModal('pill')
          }}
        />
        <TodoButton
          icon={Condition}
          title={'컨디션'}
          subtitle={'오늘 기분은 어때요?'}
          done={doneStatus.condition}
          onClick={() => {
            setOpenModal('condition')
          }}
        />
        <TodoButton
          icon={Quiz}
          title={'오늘의 퀴즈'}
          subtitle={'뇌 건강 퀴즈 풀기'}
          done={doneStatus.quiz}
          onClick={() => {
            setOpenModal('quiz')
          }}
        />
      </div>
      {/* 각 모달 띄우기 */}
      {openModal === 'pill' && <PillModal onClose={handleClose} onSuccess={checkTodoList} />}
      {openModal === 'condition' && (
        <ConditionModal onClose={handleClose} onSuccess={checkTodoList} />
      )}
      {openModal === 'quiz' && <QuizModal onClose={handleClose} onSuccess={checkTodoList} />}
    </>
  )
}

export default TodoList
