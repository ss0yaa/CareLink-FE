import React from 'react'

const SignupTitle = ({ step }) => {
  let title = ''
  let subtitle = ''

  if (step === 1) {
    title = '필수 정보 입력'
    subtitle = '서비스 이용을 위해 가장 중요한 정보를 먼저 입력해주세요.'
  } else if (step === 2) {
    title = '필수 정보 입력'
    subtitle = '보호자 정보를 입력하고, 알림을 설정해주세요.'
  } else if (step === 3) {
    title = '약관 동의'
    subtitle = '서비스 이용을 위해 약관에 동의해주세요.'
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='flex items-center justify-center mb-3.5 w-60'>
        <div className='flex justify-center items-center w-[35px] aspect-square bg-primary rounded-[50%] mx-1.5'>
          <h1 className='font-normal text-xl text-white text-center'>1</h1>
        </div>
        <div
          className={`h-[5px] ${step === 2 || step === 3 ? 'bg-primary' : 'bg-[#e6e5e5]'} grow rounded-[10px]`}
        ></div>
        <div
          className={`flex justify-center items-center w-[35px] aspect-square ${step === 2 || step === 3 ? 'bg-primary' : 'bg-[#e6e5e5]'}  rounded-[50%] mx-1.5`}
        >
          <h1 className='font-normal text-xl text-white text-center'>2</h1>
        </div>
        <div
          className={`h-[5px] ${step === 3 ? 'bg-primary' : 'bg-[#e6e5e5]'} grow rounded-[10px]`}
        ></div>
        <div
          className={`flex justify-center items-center w-[35px] aspect-square ${step === 3 ? 'bg-primary' : 'bg-[#e6e5e5]'} rounded-[50%] mx-1.5`}
        >
          <h1 className='font-normal text-xl text-white text-center'>3</h1>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-black font-semibold text-[35px] py-4'>{title}</h2>
        <p className='text-[#606060] font-normal text-lg'>{subtitle}</p>
      </div>
    </div>
  )
}

export default SignupTitle
