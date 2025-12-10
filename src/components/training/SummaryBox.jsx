import React from 'react'
import IconNumber from '@/assets/icons/icon-number-1.svg'

const questions = [
  { key: 'who', label: '누가', placeholder: '주체는 누구인가요?' },
  { key: 'when', label: '언제', placeholder: '언제 일어난 일인가요?' },
  { key: 'where', label: '어디서', placeholder: '어디에서 일어난 일인가요?' },
  { key: 'what', label: '무엇을', placeholder: '무엇을 했나요?' },
  { key: 'how', label: '어떻게', placeholder: '어떻게 했나요?' },
  { key: 'why', label: '왜', placeholder: '왜 그랬나요?' },
]

const SummaryBox = () => {
  return (
    <div>
      <div className='flex flex-row items-center gap-[13px]'>
        <img src={IconNumber} />
        <p className='font-medium text-[25px]'>육하원칙 요약하기</p>
      </div>
      {/* 육하원칙 작성 */}
      {/* 버튼 */}
      {/* 피드백 박스 */}
    </div>
  )
}

export default SummaryBox
