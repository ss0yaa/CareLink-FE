import React from 'react'
import TextField from '../common/TextField'
import SignupTitle from './SignupTitle'
import AgreeItem from './agreeItem'
import agree_off from '@/assets/icons/icon-agree-off.svg'
import agree_on from '@/assets/icons/icon-agree-on.svg'

const Step3Form = ({ agreements, toggleAgree }) => {
  const TERMS = [
    { key: 'service', required: true, title: '케어링크 서비스 이용약관 동의' },
    { key: 'privacy', required: true, title: '개인정보 수집·이용 동의' },
    { key: 'sensitive', required: true, title: '민감정보(건강정보) 수집·이용 동의' },
    { key: 'thirdParty', required: true, title: '개인정보 제3자 제공 동의' },
    { key: 'notify', required: false, title: '전자적 전송(알림) 수신 동의' },
    { key: 'marketing', required: false, title: '마케팅 정보 수신 동의 (앱 푸시·SMS)' },
  ]
  return (
    <div className='w-full max-w-[815px] inset-shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] shadow-[0_2px_2px_3px_rgba(0,0,0,0.25)] rounded-3xl'>
      <div className='px-52 py-16'>
        <SignupTitle step={3} />
        <div className='mt-12'>
          <div className='flex items-center pb-1.5'>
            <img
              src={agreements.all ? agree_on : agree_off}
              alt='agree'
              className='cursor-pointer w-7 aspect-square'
              onClick={() => toggleAgree('all')}
            />
            <h1 className='font-medium text-[25px] text-black pl-3'>모든 약관에 동의합니다.</h1>
          </div>
          <div>
            {TERMS.map((t) => (
              <AgreeItem
                key={t.key}
                required={t.required}
                title={t.title}
                checked={agreements[t.key]}
                onToggle={() => toggleAgree(t.key)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step3Form
