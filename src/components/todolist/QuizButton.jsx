import React from 'react'
import Correct from '@/assets/icons/icon-correct.svg'
import NoCorrect from '@/assets/icons/icon-no-correct.svg'

<<<<<<< HEAD
function QuizButton({ text, onClick, isSelected, isCorrect, isWrong, disabled }) {
  const base = `w-60 h-36 font-medium text-[40px] rounded-[20px] cursor-pointer`

  let style = 'bg-[#F3F4F6]'

  if (isSelected && !isCorrect && !isWrong) {
    style = 'bg-[#E6FAF7] outline-2 outline-primary'
  }
  if (isCorrect) {
    style = 'bg-[#DCFCE7] outline-2 outline-[#22C55E]'
  } else if (isWrong) {
    style = 'bg-[#FDECEC] outline outline-2 outline-[#EF4444]'
=======
function QuizButton({ text, onClick, isCorrect, isWrong, disabled }) {
  const base = `w-60 h-36 font-medium text-[40px] rounded-[20px] cursor-pointer`

  let style = 'bg-gray-100'

  if (isCorrect) {
    style = 'bg-green-100 outline-2 outline-green-500'
  } else if (isWrong) {
    style = 'bg-rose-50 outline outline-2 outline-red-500'
>>>>>>> dab64dfa8ca7872ddec519a3b92968057cfd3e05
  }
  return (
    <button type='button' onClick={onClick} disabled={disabled} className={`${base} ${style}`}>
      <div className='flex flex-row items-center justify-center gap-[5px]'>
        {isCorrect && <img src={Correct} />}
        {isWrong && <img src={NoCorrect} />}
        {text}
      </div>
    </button>
  )
}

export default QuizButton
