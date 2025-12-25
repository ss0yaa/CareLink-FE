import React, { useState, useEffect } from 'react'
import api from '@/apis/axios'
import FeedbackBox from './FeedbackBox'
import IconNumber from '@/assets/icons/icon-number-1.svg'
import CircleCheck from '@/assets/icons/icon-circle-check.svg'
import FieldRow from './FieldRow'
import SubmitButton from './SubmitButton'
import Loading from '../common/Loading'

const SummaryBox = ({ newsId, mode = 'today', defaultFieldData = null, defaultAnswers = null }) => {
  const [showFeedback, setShowFeedback] = useState(mode === 'history')
  const [isLoading, setIsLoading] = useState(false)
  const [fieldData, setFieldData] = useState(
    defaultFieldData || {
      who: '',
      whenAt: '',
      whereAt: '',
      what: '',
      how: '',
      why: '',
    },
  )
  const [answers, setAnswers] = useState(defaultAnswers)

  // 필드값 변경될 때 호출되는 함수
  const handleInput = (key, value) => {
    setFieldData((prev) => ({ ...prev, [key]: value }))
  }

  // 필드 하나라도 채워졌는지 확인
  const isAllFilled = Object.values(fieldData).some((val) => val.trim() !== '')
  const handleSubmit = async () => {
    if (mode === 'history') return
    if (!isAllFilled) {
      alert('최소 하나의 답변을 입력해 주세요.')
      return
    }
    try {
      setIsLoading(true)
      const res = await api.post(`/api/trainings/news/${newsId}/sixw`, {
        who: fieldData.who,
        whenAt: fieldData.whenAt,
        whereAt: fieldData.whereAt,
        what: fieldData.what,
        why: fieldData.why,
        how: fieldData.how,
      })
      setAnswers(res.data.data.correctAnswer)
      setShowFeedback(true)
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (mode === 'history' && defaultFieldData) {
      setFieldData(defaultFieldData)
      setAnswers(defaultAnswers)
      setShowFeedback(true)
    }
  }, [mode, defaultFieldData, defaultAnswers])
  return (
    <div>
      <div className='flex flex-row items-center gap-[13px]'>
        <img src={IconNumber} />
        <p className='font-medium text-[25px]'>육하원칙 요약하기</p>
      </div>
      {/* 육하원칙 작성 */}
      <div className='flex flex-col gap-10 pt-[25px] pr-[58px] pb-[50px] pl-12'>
        <FieldRow
          label='누가'
          placeholder='주체는 누구인가요?'
          value={fieldData.who}
          onChange={(val) => handleInput('who', val)}
          disabled={mode === 'history' || showFeedback}
        />
        <FieldRow
          label='언제'
          placeholder='언제 일어난 일인가요?'
          value={fieldData.whenAt}
          onChange={(val) => handleInput('whenAt', val)}
          disabled={mode === 'history' || showFeedback}
        />
        <FieldRow
          label='어디서'
          placeholder='어디에서 일어난 일인가요?'
          value={fieldData.whereAt}
          onChange={(val) => handleInput('whereAt', val)}
          disabled={mode === 'history' || showFeedback}
        />
        <FieldRow
          label='무엇을'
          placeholder='무엇을 했나요?'
          value={fieldData.what}
          multiline={true}
          rows={2}
          onChange={(val) => handleInput('what', val)}
          disabled={mode === 'history' || showFeedback}
        />
        <FieldRow
          label='어떻게'
          placeholder='어떻게 했나요?'
          value={fieldData.how}
          multiline={true}
          rows={2}
          onChange={(val) => handleInput('how', val)}
          disabled={mode === 'history' || showFeedback}
        />
        <FieldRow
          label='왜'
          placeholder='왜 그랬나요?'
          value={fieldData.why}
          multiline={true}
          rows={2}
          onChange={(val) => handleInput('why', val)}
          disabled={mode === 'history' || showFeedback}
        />
      </div>
      {/* 버튼 */}
      <div className='flex justify-center'>
        <SubmitButton label='답변 확인하기' onClick={handleSubmit} disabled={!isAllFilled} />
      </div>
      {isLoading && <Loading />}
      {/* 피드백 박스 -> 답변 확인 누르면 보이게 */}
      {!isLoading && showFeedback && (
        <FeedbackBox
          title='1단계 피드백'
          text='입력한 내용과 모법 답안을 비교해 보세요. 보완할 점도 확인하면 실력 향상에 도움이 될 거예요.'
          boxtitle='모범 답안'
          answers={answers}
          feedbackType={1}
        />
      )}
    </div>
  )
}

export default SummaryBox
