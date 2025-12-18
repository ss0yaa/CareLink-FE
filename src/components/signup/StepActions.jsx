import React from 'react'

const StepActions = ({ onPrev, onNext, prevDisabled, nextDisabled }) => {
  return (
    <div className='w-full max-w-[815px] flex justify-between mt-10'>
      <button
        type='button'
        onClick={onPrev}
        disabled={prevDisabled}
        className='w-[282px] h-[70px] bg-[#d6d6d6] rounded-[10px] text-white font-semibold text-[23px] cursor-pointer'
      >
        이전 단계
      </button>
      <button
        type='button'
        onClick={onNext}
        disabled={nextDisabled}
        className='w-[282px] h-[70px] bg-primary rounded-[10px] text-white font-semibold text-[23px] cursor-pointer'
      >
        다음 단계
      </button>
    </div>
  )
}

export default StepActions
