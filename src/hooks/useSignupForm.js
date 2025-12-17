import { useState, useCallback, useMemo } from 'react'

const initialForm = {
  name: '',
  phoneNum: '',
  password: '',
  passwordConfirm: '',
  birthday: '',
  cognitiveState: '',
  interestedCategory: [],
  caregiverName: '',
  caregiverPhoneNum: '',
  caregiverEmail: '',
  agreements: {
    all: false,
    service: false,
    privacy: false,
    sensitive: false,
    thirdParty: false,
    notify: false,
    marketing: false,
  },
}

export const useSignupForm = () => {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState(initialForm)

  //입력 필드 업데이트
  const setField = useCallback((key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }, [])

  //인지 상태 선택
  const setCog = useCallback((key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }, [])

  //관심 분야 선택
  const toggleInterest = useCallback((key, value) => {
    setForm((prev) => {
      const arr = prev[key] ?? []
      const next = arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]
      return { ...prev, [key]: next }
    })
  }, [])

  //약관 토글
  const toggleAgree = useCallback((key) => {
    setForm((prev) => {
      const cur = prev.agreements

      if (key === 'all') {
        const nextValue = !cur.all
        const nextAgreements = Object.fromEntries(Object.keys(cur).map((k) => [k, nextValue]))
        return { ...prev, agreements: nextAgreements }
      }

      const next = { ...cur, [key]: !cur[key] }
      next.all = Object.entries(next)
        .filter(([k]) => k !== 'all')
        .every(([, v]) => v)

      return { ...prev, agreements: next }
    })
  }, [])

  //다음 단계 체크
  const canGoNext = useMemo(() => {
    if (step === 1) {
      if (!form.name.trim()) return false
      if (!form.phoneNum.trim()) return false
      if (!form.password) return false
      if (form.password !== form.passwordConfirm) return false
      if (!form.birthday.trim()) return false
      if (!form.cognitiveState) return false
      return true
    }
    if (step === 2) {
      if (!form.caregiverName.trim()) return false
      if (!form.caregiverPhoneNum.trim()) return false
      if (!form.caregiverEmail.trim()) return false
      return true
    }
    if (step === 3) {
      const { service, privacy, sensitive, thirdParty } = form.agreements
      return service && privacy && sensitive && thirdParty
    }
    return true
  }, [step, form])

  const next = useCallback(() => {
    if (!canGoNext) return
    setStep((s) => Math.min(s + 1, 3))
  }, [canGoNext])

  const prev = useCallback(() => {
    setStep((s) => Math.max(s - 1, 1))
  }, [])

  return { step, form, setField, setCog, toggleInterest, toggleAgree, canGoNext, next, prev }
}
