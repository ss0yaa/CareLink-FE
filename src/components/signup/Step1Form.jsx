import React from 'react'
import TextField from '../common/TextField'
import SignupTitle from './SignupTitle'
import SelectChip from './SelectChip'
import IdSignupField from './IdSignupField'

const Step1Form = ({ form, setField, setBirthday, setCog, toggleInterest, check, checkId }) => {
  const COGNITIVE_OPTIONS = [
    { id: 'SUSPECTED', label: '치매 의심' },
    { id: 'MILD', label: '치매 경도' },
    { id: 'SEVERE', label: '치매 중증' },
    { id: 'IMPAIRMENT', label: '인지장애' },
  ]

  const INTEREST_OPTIONS = [
    { id: 'HEALTH', label: '건강·병원' },
    { id: 'WELFARE_POLICY', label: '복지·정책' },
    { id: 'PETS', label: '반려동물' },
    { id: 'SOCIETY', label: '사회·시사' },
    { id: 'PLANTS', label: '식물·원예' },
    { id: 'FOOD', label: '음식·요리' },
    { id: 'TRAVEL', label: '여행' },
    { id: 'HOBBY_CULTURE', label: '취미·문화' },
  ]

  return (
    <div className='max-w-[815px] inset-shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] shadow-[0_2px_2px_3px_rgba(0,0,0,0.25)] rounded-3xl'>
      <div className='px-50 py-16'>
        <SignupTitle step={1} />
        <div className='grid gap-10 mt-12'>
          <TextField
            label='이름'
            type='text'
            placeholder='숙멋사'
            value={form.name}
            onChange={(e) => setField('name', e.target.value)}
          />
          <IdSignupField
            value={form.phoneNum}
            onChange={(e) => setField('phoneNum', e.target.value)}
            onCheck={checkId}
            status={check.phoneDup.status}
            message={check.phoneDup.message}
          />
          <TextField
            label='비밀번호'
            type='password'
            placeholder='4자리 이상 숫자'
            value={form.password}
            onChange={(e) => setField('password', e.target.value)}
          />
          <TextField
            label='비밀번호 확인'
            type='password'
            placeholder='비밀번호를 한 번 더 입력해주세요.'
            value={form.passwordConfirm}
            onChange={(e) => setField('passwordConfirm', e.target.value)}
          />
          <TextField
            label='생년월일'
            type='text'
            placeholder='생년월일 8자리를 입력해주세요.'
            value={form.birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>
        <div className='grid gap-12 mt-12'>
          <div>
            <h2 className='text-[18px] font-semibold'>현재 인지 건강 상태를 알려주세요.</h2>
            <div className='grid grid-cols-4 gap-5 mt-3.5'>
              {COGNITIVE_OPTIONS.map((opt) => (
                <SelectChip
                  key={opt.id}
                  label={opt.label}
                  selected={form.cognitiveState === opt.id}
                  onClick={() => setCog('cognitiveState', opt.id)}
                />
              ))}
            </div>
          </div>
          <div>
            <h2 className='text-[18px] font-semibold'>
              평소 관심 있는 분야를 선택해주세요.{' '}
              <span className='font-normal text-[15px]'>(중복선택 가능)</span>
            </h2>
            <div className='grid grid-cols-4 gap-5 mt-3.5'>
              {INTEREST_OPTIONS.map((opt) => (
                <SelectChip
                  key={opt.id}
                  label={opt.label}
                  selected={form.interestedCategory.includes(opt.id)}
                  onClick={() => toggleInterest('interestedCategory', opt.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step1Form
