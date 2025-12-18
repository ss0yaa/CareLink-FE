import React from 'react'
import SignupTitle from './SignupTitle'
import TextField from '../common/TextField'

const Step2Form = ({ form, setField }) => {
  return (
    <div className='w-full max-w-[815px] inset-shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] shadow-[0_2px_2px_3px_rgba(0,0,0,0.25)] rounded-3xl'>
      <div className='px-52 py-16'>
        <SignupTitle step={2} />
        <div className='grid gap-10 mt-12'>
          <TextField
            label='보호자 이름'
            type='text'
            placeholder='숙멋사'
            value={form.caregiverName}
            onChange={(e) => setField('caregiverName', e.target.value)}
          />
          <TextField
            label='보호자 휴대폰 번호'
            type='text'
            placeholder='010-0000-0000'
            value={form.caregiverPhoneNum}
            onChange={(e) => setField('caregiverPhoneNum', e.target.value)}
          />
          <TextField
            label='보호자 이메일'
            type='text'
            placeholder='final@likelion.ac.kr'
            value={form.caregiverEmail}
            onChange={(e) => setField('caregiverEmail', e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default Step2Form
