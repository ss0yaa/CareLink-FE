import React, { useState } from 'react'
import ModalBase from './ModalBase'
import QuizButton from './QuizButton'

// 퀴즈 더미데이터
const quizDummy = {
  quizId: 1,
  question: '대한민국의 수도는 어디일까요?',
  options: [
    {
      id: 1,
      text: '부산',
    },
    {
      id: 2,
      text: '서울',
    },
    {
      id: 3,
      text: '인천',
    },
    {
      id: 4,
      text: '대전',
    },
  ],
  correctOptionId: 2, //정답
}

function QuizModal({ onClose, allChecked }) {
  const [selectedId, setSelectedId] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)

  // 버튼 선택
  const handleSelect = (id) => {
    if (isAnswered) return
    setSelectedId(id)
  }
  // 확인 버튼
  const handleConfirm = () => {
    if (selectedId == null) return
    setIsAnswered(true)
    allChecked(true)
  }

  return (
    <>
      <ModalBase
        title='오늘의 퀴즈'
        onClose={onClose}
        onConfirm={handleConfirm}
        containerClassName='w-[871px]'
      >
        <p className='mt-10 font-semibold text-[36px] text-center'>{quizDummy.question}</p>
        <div className='mt-[50px] mb-[85px] grid grid-cols-2 gap-x-20 gap-y-[60px]'>
          {quizDummy.options.map((q) => {
            const isSelected = q.id === selectedId // 내가 고른 버튼
            const isCorrect = q.id === quizDummy.correctOptionId //정답 여부

            return (
              <QuizButton
                key={q.id}
                text={q.text}
                onClick={() => handleSelect(q.id)}
                disabled={isAnswered}
                isSelected={!isAnswered && isSelected}
                isCorrect={isAnswered && isCorrect} // 정답 버튼
                isWrong={isAnswered && isSelected && !isCorrect} // 오답 버튼
              />
            )
          })}
        </div>
      </ModalBase>
    </>
  )
}

export default QuizModal
