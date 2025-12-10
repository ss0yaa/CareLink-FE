import React, { useState } from 'react'
import SubmitButton from './SubmitButton'
import FeedbackBox from './FeedbackBox'
import IconNumber from '@/assets/icons/icon-number-2.svg'

const SummaryOneLineBox = () => {
  const [showFeedback, setShowFeedback] = useState(false)
  const handleSubmit = () => {
    setShowFeedback(true)
  }
  return (
    <div>
      <div className='flex flex-row items-center gap-[13px]'>
        <img src={IconNumber} />
        <p className='font-medium text-[25px]'>한 줄 요약하기</p>
      </div>
      {/* 요약 input box */}
      {/* 제출 버튼 */}
      <div className='flex justify-center'>
        <SubmitButton label='최종 피드백 보기' onClick={handleSubmit} />
      </div>
      {/* 피드백 박스 */}
      {showFeedback && (
        <FeedbackBox
          title='최종 피드백'
          text='AI의 자동 요약을 참교해 비교해보세요. 꾸준한 훈련은 인지 능력 향상에 큰 도움이 됩니다.'
          boxtitle='AI 자동 요약 (참고용)'
          feedbackType={2}
        />
      )}
    </div>
  )
}

export default SummaryOneLineBox
