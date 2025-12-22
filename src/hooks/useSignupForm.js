import { useState, useCallback, useMemo } from 'react'
import { checkPhoneDup } from '@/apis/auth'

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

const initialCheck = {
  phoneDup: { status: 'idle', message: '' }, // idle(대기) | loading(로딩중) | ok(확인) | fail(실패)
  phoneVerifiedValue: '', // 중복확인 완료된 phone 값
}

export const useSignupForm = () => {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState(initialForm)
  const [check, setCheck] = useState(initialCheck)

  //전화번호 자동 하이픈 생성
  const formatPhoneNumber = (value) => {
    // 숫자만 남기기
    const digits = value.replace(/\D/g, '').slice(0, 11)

    if (digits.length <= 3) return digits
    if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`
  }

  //입력 필드 업데이트
  const setField = useCallback((key, value) => {
    if (key === 'phoneNum') {
      const formatted = formatPhoneNumber(value)
      setForm((prev) => ({ ...prev, phoneNum: formatted }))
      setCheck((prev) => ({
        ...prev,
        phoneDup: { status: 'idle', message: '' },
        phoneVerifiedValue: '',
      }))
      return
    }

    if (key === 'caregiverPhoneNum') {
      const formatted = formatPhoneNumber(value)
      setForm((prev) => ({ ...prev, caregiverPhoneNum: formatted }))
      return
    }

    setForm((prev) => ({ ...prev, [key]: value }))
  }, [])

  //아이디 중복 확인
  const checkId = useCallback(async () => {
    const phone = form.phoneNum.trim()
    if (!phone) {
      setCheck((prev) => ({
        ...prev,
        phoneDup: { status: 'fail', message: '휴대폰 번호를 입력해주세요.' },
      }))
      return
    }

    try {
      setCheck((prev) => ({ ...prev, phoneDup: { status: 'loading', message: '' } }))

      const res = await checkPhoneDup(phone)
      const isDuplicate = res.data.data

      if (isDuplicate) {
        setCheck((prev) => ({
          ...prev,
          phoneDup: { status: 'fail', message: '사용 불가능한 아이디입니다.' },
          phoneVerifiedValue: '',
        }))
      } else {
        setCheck((prev) => ({
          ...prev,
          phoneDup: { status: 'ok', message: '사용 가능한 아이디입니다.' },
          phoneVerifiedValue: phone,
        }))
      }
    } catch (e) {
      setCheck((prev) => ({
        ...prev,
        phoneDup: { status: 'fail', message: '중복확인에 실패했어요. 다시 시도해주세요.' },
      }))
    }
  }, [form.phoneNum])

  //생년월일 자동 하이픈 생성
  const formatBirthday = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 8)

    if (digits.length <= 4) return digits
    if (digits.length <= 6) return `${digits.slice(0, 4)}-${digits.slice(4)}`
    return `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6)}`
  }

  const setBirthday = useCallback((value) => {
    const formatted = formatBirthday(value)
    setForm((prev) => ({ ...prev, birthday: formatted }))
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
      if (check.phoneDup.status !== 'ok') return false
      if (check.phoneVerifiedValue !== form.phoneNum.trim()) return false
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
  }, [step, form, check])

  const next = useCallback(() => {
    if (!canGoNext) return
    setStep((s) => Math.min(s + 1, 3))
  }, [canGoNext])

  const prev = useCallback(() => {
    setStep((s) => Math.max(s - 1, 1))
  }, [])

  return {
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
  }
}
