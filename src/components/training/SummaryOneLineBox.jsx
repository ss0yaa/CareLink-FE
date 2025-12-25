import React, { useState, useEffect } from 'react'
import api from '@/apis/axios'
import SubmitButton from './SubmitButton'
import FeedbackBox from './FeedbackBox'
import Loading from '../common/Loading'
import IconNumber from '@/assets/icons/icon-number-2.svg'

const SummaryOneLineBox = ({
  newsId,
  mode = 'today',
  defaultFieldData = null,
  defaultAnswer = null,
}) => {
  const [showFeedback, setShowFeedback] = useState(mode === 'history')
  const [isLoading, setIsLoading] = useState(false)
  const [text, setText] = useState('')
  const [answer, setAnswer] = useState(defaultAnswer)

  const isFilled = text.trim().length > 0
  const handleSubmit = async () => {
    if (mode === 'history') return
    if (!isFilled) {
      alert('한 줄 요약에 대한 답변을 입력해주세요.')
      return
    }
    try {
      setIsLoading(true)
      const res = await api.post(`/api/trainings/news/${newsId}/summary`, {
        summary: text,
      })
      setAnswer(res.data.data.correctAnswer)
      setShowFeedback(true)
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (mode === 'history' && defaultFieldData) {
      setText(defaultFieldData)
      setAnswer({ summary: defaultAnswer })
      setShowFeedback(true)
    }
  }, [mode, defaultFieldData, defaultAnswer])
  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-row items-center gap-[13px]'>
        <img src={IconNumber} />
        <p className='font-medium text-[25px]'>한 줄 요약하기</p>
      </div>
      {/* 요약 input box */}
      <textarea
        placeholder='기사 내용을 바탕으로 한 줄로 요약해 보세요.'
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='flex-1 mt-5 mr-[58px] mb-[50px] ml-12 bg-[#F2F3F4] rounded-[10px] resize-none px-5 py-[15px] text-black text-[18px]'
        disabled={mode === 'history' || showFeedback}
      />
      {/* 제출 버튼 */}
      <div className='flex justify-center'>
        <SubmitButton label='최종 피드백 보기' onClick={handleSubmit} disabled={!isFilled} />
      </div>
      {isLoading && <Loading />}
      {/* 피드백 박스 */}
      {!isLoading && showFeedback && (
        <FeedbackBox
          title='최종 피드백'
          text={`모든 훈련을 완료하셨습니다! 정말 대단해요!\n AI의 자동 요약을 참교해 비교해보세요. 꾸준한 훈련은 인지 능력 향상에 큰 도움이 됩니다.`}
          boxtitle='AI 자동 요약 (참고용)'
          answer={answer}
          feedbackType={2}
        />
      )}
    </div>
  )
}

export default SummaryOneLineBox
