import React, { useState } from 'react'
import ModalBase from './ModalBase'
import ConditionQuestion from './ConditionQuestion'
import GoodCondition from '@/assets/icons/icon-condition-good.svg'
import NormalCondition from '@/assets/icons/icon-condition-normal.svg'
import BadCondition from '@/assets/icons/icon-condition-bad.svg'

// 버튼 양식
const conditionForm = [
  {
    key: 'mood',
    title: '오늘 기분은 어떠세요?',
    type: 'icon',
    options: [
      { value: 'good', label: '좋음', src: GoodCondition },
      { value: 'normal', label: '보통', src: NormalCondition },
      { value: 'bad', label: '나쁨', src: BadCondition },
    ],
  },
  {
    key: 'sleep',
    title: '간밤에 잘 주무셨나요?',
    type: 'text',
    options: [
      { value: 'well', label: '푹 잤어요' },
      { value: 'normal', label: '보통이에요' },
      { value: 'poor', label: '설쳤어요' },
    ],
  },
  {
    key: 'pain',
    title: '아픈 곳이 있으신가요?',
    type: 'text',
    options: [
      { value: 'none', label: '안 아파요' },
      { value: 'some', label: '조금 아파요' },
      { value: 'much', label: '많이 아파요' },
    ],
  },
]

function ConditionModal({ onClose, allChecked }) {
  const [answers, setAnswers] = useState({ mood: null, sleep: null, pain: null })

  const handleSelect = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }))
  }
  // 확인 버튼 (연동)
  const handleConfirm = () => {
    const isAllChecked = Object.values(answers).every((v) => v !== null)

    allChecked(isAllChecked)
    onClose()
  }
  return (
    <>
      <ModalBase
        title='오늘의 컨디션'
        onClose={onClose}
        onConfirm={handleConfirm}
        containerClassName='w-[871px]'
      >
        <div className='flex flex-col gap-10 mt-[35px] mb-[84px]'>
          {conditionForm.map((q) => (
            <ConditionQuestion
              key={q.key}
              title={q.title}
              options={q.options}
              type={q.type}
              selected={answers[q.key]}
              onSelect={(value) => handleSelect(q.key, value)}
            />
          ))}
        </div>
      </ModalBase>
    </>
  )
}

export default ConditionModal
