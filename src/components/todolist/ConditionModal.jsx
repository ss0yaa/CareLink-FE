import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
      { value: 'good', label: '좋음', src: GoodCondition, score: 2 },
      { value: 'normal', label: '보통', src: NormalCondition, score: 1 },
      { value: 'bad', label: '나쁨', src: BadCondition, score: 0 },
    ],
  },
  {
    key: 'sleep',
    title: '간밤에 잘 주무셨나요?',
    type: 'text',
    options: [
      { value: 'well', label: '푹 잤어요', score: 2 },
      { value: 'normal', label: '보통이에요', score: 1 },
      { value: 'poor', label: '설쳤어요', score: 0 },
    ],
  },
  {
    key: 'pain',
    title: '아픈 곳이 있으신가요?',
    type: 'text',
    options: [
      { value: 'none', label: '안 아파요', score: 2 },
      { value: 'some', label: '조금 아파요', score: 1 },
      { value: 'much', label: '많이 아파요', score: 0 },
    ],
  },
]

function ConditionModal({ onClose, allChecked }) {
  // 항목별 점수 저장
  const [answers, setAnswers] = useState({ mood: null, sleep: null, pain: null })
  // 모달 등록 vs 수정 모드 구분
  const [isEditMode, setIsEditMode] = useState(false)

  // 버튼 선택에 따른 점수
  const handleSelect = (key, score) => {
    setAnswers((prev) => ({ ...prev, [key]: score }))
  }

  // 모달 확인 버튼 (연동)
  const apiUrl = import.meta.env.VITE_API_BASE_URL
  const accessToken = localStorage.getItem('accessToken')

  const handleConfirm = async () => {
    const isAllChecked = Object.values(answers).every((v) => v !== null)
    if (!isAllChecked) {
      alert('모든 값이 선택되지 않았습니다.')
      return
    }

    const payload = {
      moodScore: answers.mood,
      sleepScore: answers.sleep,
      painScore: answers.pain,
    }

    try {
      // 등록 vs 수정 모드 분기
      if (isEditMode) {
        await axios.put(`${apiUrl}/api/condition/today`, payload, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
      } else {
        await axios.post(`${apiUrl}/api/condition/today`, payload, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
      }

      allChecked(true)
      onClose()
    } catch (err) {
      console.error(err)
    }
  }

  // 오늘의 컨디션 불러오기 (연동)
  const getTodayCondition = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/condition/today`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })

      if (res.data.data) {
        const { moodScore, sleepScore, painScore } = res.data.data

        setAnswers({
          mood: moodScore,
          sleep: sleepScore,
          pain: painScore,
        })
        setIsEditMode(true) // 수정 모드
        allChecked(true)
      } else {
        setIsEditMode(false)
      }
    } catch (err) {
      setIsEditMode(false) // 새로 등록 모드
      console.log('오늘의 컨디션 없음')
    }
  }
  useEffect(() => {
    getTodayCondition()
  }, [])
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
              onSelect={(score) => handleSelect(q.key, score)}
            />
          ))}
        </div>
      </ModalBase>
    </>
  )
}

export default ConditionModal
