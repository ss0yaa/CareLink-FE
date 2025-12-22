import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import check from '@/assets/icons/icon-agree-on.svg'
import { login } from '@/apis/auth'

const SignupResult = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { phoneNum, password } = location.state || {}

  const handleStart = async () => {
    if (!phoneNum || !password) {
      navigate('/login')
      return
    }

    try {
      const res = await login({ phoneNum, password })
      const { accessToken, refreshToken } = res.data.data

      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)

      navigate('/chat')
    } catch (err) {
      console.log(err?.response?.data?.message || '자동 로그인에 실패했습니다.')
      navigate('/login')
    }
  }

  return (
    <div className='shadow-[0_2px_2px_3px_rgba(0,0,0,0.25)] inset-shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] rounded-[25px] px-52 py-24'>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center relative w-[130px] h-[130px]'>
          <div className='bg-[#65e2cb] w-[116px] aspect-square rounded-[50%] blur-[25px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'></div>
          <div className='bg-white w-[130px] aspect-square rounded-[50%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'></div>
          <img
            className='w-[74px] aspect-square absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
            src={check}
            alt='완료'
          />
        </div>
        <div className='py-[30px]'>
          <p className='font-semibold text-[35px] text-black pb-[30px]'>
            회원가입이 완료되었습니다!
          </p>
          <p className='font-normal text-xl text-center'>
            환영합니다! <br /> 오늘부터 <span className='text-primary font-semibold'>케어링크</span>
            와 함께 <br /> 매일의 건강을 든든하게 함께하겠습니다.
          </p>
        </div>
        <div>
          <button
            type='button'
            className='mt-[50px] bg-primary rounded-[10px] px-[100px] py-5 font-semibold text-[23px] text-white cursor-pointer'
            onClick={handleStart}
          >
            시작하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignupResult
