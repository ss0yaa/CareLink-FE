import React from 'react'
import Step1Form from '@/components/signup/Step1Form'
import Step2Form from '@/components/signup/Step2Form'
import Step3Form from '@/components/signup/Step3Form'
import StepActions from '@/components/signup/StepActions'
import { useSignupForm } from '@/hooks/useSignupForm'
import { useNavigate } from 'react-router-dom'
import { signup } from '@/apis/auth'

const SignupPage = () => {
  const navigate = useNavigate()
  const {
    step,
    form,
    setField,
    setBirthday,
    setCog,
    toggleInterest,
    toggleAgree,
    canGoNext,
    next,
    prev,
    check,
    checkId,
  } = useSignupForm()

  const handleFinalSubmit = async () => {
    try {
      await signup({
        name: form.name,
        password: form.password,
        phoneNum: form.phoneNum,
        birthday: form.birthday,
        cognitiveState: form.cognitiveState,
        interestedCategory: form.interestedCategory,
        caregiverName: form.caregiverName,
        caregiverPhoneNum: form.caregiverPhoneNum,
        caregiverEmail: form.caregiverEmail,
      })

      navigate('/signup/result', {
        state: {
          phoneNum: form.phoneNum,
          password: form.password,
        },
      })
    } catch (err) {
      console.log(err?.response?.data?.message || '회원가입에 실패했습니다.')
    }
  }

  return (
    <div className='flex flex-col items-center relative w-full h-dvh py-11 overflow-y-auto'>
      {step === 1 && (
        <Step1Form
          form={form}
          setField={setField}
          setBirthday={setBirthday}
          setCog={setCog}
          toggleInterest={toggleInterest}
          check={check}
          checkId={checkId}
        />
      )}
      {step === 2 && <Step2Form form={form} setField={setField} />}
      {step === 3 && <Step3Form agreements={form.agreements} toggleAgree={toggleAgree} />}
      <StepActions
        onPrev={prev}
        onNext={() => {
          if (!canGoNext) return
          if (step === 3) {
            handleFinalSubmit()
          } else {
            next()
          }
        }}
        prevDisabled={step === 1}
        nextDisabled={!canGoNext}
      />
    </div>
  )
}

export default SignupPage
