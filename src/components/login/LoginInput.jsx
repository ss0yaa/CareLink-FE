import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import TextField from '../common/TextField'
import { login } from '@/apis/auth'

const LoginInput = () => {
  const navigate = useNavigate()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const trimmedPhoneNumber = phoneNumber.trim()
  const trimmedPassword = password.trim()

  const isFormValid = trimmedPhoneNumber.length > 0 && trimmedPassword.length > 0

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    if (!isFormValid) return
    try {
      const res = await login({
        phoneNum: trimmedPhoneNumber,
        password: trimmedPassword,
      })

      const { accessToken, refreshToken } = res.data.data

      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)

      navigate('/chat')
    } catch (err) {
      const status = err?.response?.status
      const code = err?.response?.data?.code
      const msgFromServer = err?.response?.data?.message

      let msg = msgFromServer || '로그인에 실패했습니다. 잠시 후 다시 시도해주세요.'
      if (status === 400 && code === 'INVALID_INPUT_VALUE') {
        msg = '아이디/비밀번호를 모두 입력해주세요.'
      }
      if (status === 401 && code === 'UNAUTHORIZED') {
        msg = '잘못된 아이디 또는 비밀번호입니다.'
      }

      setErrorMsg(msg)
    }
  }

  return (
    <div className='w-[518px] max-h-[710px] rounded-[10px] inset-shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] shadow-[0_5px_5px_2px_rgba(0,0,0,0.25)] z-10'>
      <div className='p-14 grid gap-9'>
        <div>
          <h2 className='font-semibold text-[35px] text-center'>로그인</h2>
          <p className='font-normal text-[18px] text-[#606060] text-center'>
            서비스 이용을 위해 로그인해주세요.
          </p>
        </div>
        <form onSubmit={handleSubmit} className='grid gap-7 relative'>
          <TextField
            label='아이디'
            type='text'
            subtitle='(전화번호)'
            placeholder='010-0000-0000'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            label='비밀번호'
            type='password'
            placeholder='비밀번호를 입력하세요.'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMsg && (
            <p className='text-[#980000] font-normal text-[15px] absolute top-56'>{errorMsg}</p>
          )}
          <button
            type='submit'
            disabled={!isFormValid}
            className='w-full bg-primary text-white font-semibold text-xl rounded-[10px] py-[18px] mt-3 cursor-pointer'
          >
            로그인
          </button>
        </form>
        <div>
          <div className='flex items-center py-6'>
            <div className='h-[0.5px] bg-[#606060] grow'></div>
            <span className='text-[#606060] px-5'>아직 계정이 없으신가요?</span>
            <div className='h-[0.5px] bg-[#606060] grow'></div>
          </div>
          <button
            onClick={() => navigate(`/signup`)}
            className='w-full border-[1.5px] border-primary bg-[#f2fffd] text-[#606060] font-semibold text-xl rounded-[10px] py-[18px] cursor-pointer'
          >
            회원가입하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginInput
