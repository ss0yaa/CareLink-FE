import React, { useEffect, useState } from 'react'
import api from '@/apis/axios'
import ModalBase from './ModalBase'
import QuizButton from './QuizButton'

function QuizModal({ onClose, onSuccess }) {
  const [quiz, setQuiz] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [correctIndex, setCorrectIndex] = useState(null)
  const [isCorrect, setIsCorrect] = useState(false)

  // 퀴즈 불러오기
  const getQuiz = async () => {
    try {
      const res = await api.get('/api/quiz/')
      console.log('QUIZ RESPONSE:', res)

      if (res.data.success) {
        setQuiz(res.data.data)
      }
    } catch (err) {
      console.error(err)
    }
  }
  // 버튼 선택
  const handleSelect = (index) => {
    if (isAnswered) return
    setSelectedIndex(index)
  }
  // 확인 버튼
  const handleConfirm = async () => {
    if (selectedIndex == null) return
    try {
      const res = await api.post(`/api/quiz/${quiz.quizId}/submit`, {
        selectedOption: selectedIndex + 1,
      })

      if (res.data.success) {
        const result = res.data.data
        setIsAnswered(true)
        setCorrectIndex(result.correctOption - 1)
        setIsCorrect(result.correct)
        await onSuccess()
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getQuiz()
  }, [])

  if (!quiz) return null

  return (
    <>
      <ModalBase
        title='오늘의 퀴즈'
        onClose={onClose}
        onConfirm={handleConfirm}
        containerClassName='w-[871px]'
      >
        <p className='mt-10 font-semibold text-[36px] text-center'>{quiz.question}</p>
        <div className='mt-[50px] mb-[85px] grid grid-cols-2 gap-x-20 gap-y-[60px]'>
          {quiz.options.map((text, index) => {
            const isSelected = index === selectedIndex // 내가 고른 답
            const isCorrectOption = index === correctIndex // 정답

            return (
              <QuizButton
                key={index}
                text={text}
                onClick={() => !isAnswered && setSelectedIndex(index)}
                disabled={isAnswered}
                isSelected={!isAnswered && isSelected}
                isCorrect={isAnswered && isCorrectOption}
                isWrong={isAnswered && isSelected && !isCorrectOption}
              />
            )
          })}
        </div>
      </ModalBase>
    </>
  )
}

export default QuizModal
