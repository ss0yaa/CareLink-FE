import React from 'react'
import LoginInput from '@/components/login/LoginInput'
import ServiceInfo from '@/components/login/ServiceInfo'
import logo from '@/assets/icons/icon-logo.svg'

const LoginPage = () => {
  return (
    <div className='flex relative w-full h-dvh justify-center items-center'>
      <img src={logo} alt='careLink' className='absolute top-5 left-6 w-[120px]' />
      <div className='absolute top-0 right-0 bg-linear-[270deg,#CCF1EB_0.04%,#E3F6F3_52.45%,#FAFAFA_99.6%] h-full w-1/2 z-0'></div>
      <LoginInput />
      <ServiceInfo />
    </div>
  )
}

export default LoginPage
