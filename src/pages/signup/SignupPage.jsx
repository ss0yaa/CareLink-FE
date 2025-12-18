import React from 'react'
import Step1Form from '@/components/signup/Step1Form'
import Step2Form from '@/components/signup/Step2Form'
import Step3Form from '@/components/signup/Step3Form'
import StepActions from '@/components/signup/StepActions'
import { useSignupForm } from '@/hooks/useSignupForm'

const SignupPage = () => {
  const { step, form, setField, setCog, toggleInterest, toggleAgree, canGoNext, next, prev } =
    useSignupForm()
  return (
    <div className='flex flex-col items-center relative w-full h-dvh py-11 overflow-y-auto'>
      {step === 1 && (
        <Step1Form
          form={form}
          setField={setField}
          setCog={setCog}
          toggleInterest={toggleInterest}
        />
      )}
      {step === 2 && <Step2Form form={form} setField={setField} />}
      {step === 3 && <Step3Form agreements={form.agreements} toggleAgree={toggleAgree} />}
      <StepActions
        onPrev={prev}
        onNext={next}
        prevDisabled={step === 1}
        nextDisabled={!canGoNext}
      />
    </div>
  )
}

export default SignupPage
