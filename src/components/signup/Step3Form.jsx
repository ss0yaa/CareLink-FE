import React, { useMemo, useState } from 'react'
import TextField from '../common/TextField'
import SignupTitle from './SignupTitle'
import AgreeItem from './AgreeItem'
import agree_off from '@/assets/icons/icon-agree-off.svg'
import agree_on from '@/assets/icons/icon-agree-on.svg'
import AgreementModal from './AgreementModal'

const Step3Form = ({ agreements, toggleAgree }) => {
  const TERMS = [
    {
      key: 'service',
      required: true,
      title: '케어링크 서비스 이용약관 동의',
      content: `제1조 목적
 본 약관은 케어링크(CareLink) 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리·의무 및 책임사항을 규정합니다.
제2조 서비스 내용
 1. 약 복용 관리, 건강 상태 기록, 인지 건강 콘텐츠 제공
 2. 알림 및 스케줄 관리 기능
 3. 보호자 연동 기능
제3조 이용자의 의무
 · 정확한 정보를 입력하고 타인의 정보를 도용하지 않습니다.
 · 서비스 이용 과정에서 불법적 행위를 하지 않습니다.
제4조 회사의 의무
 · 이용자의 개인정보를 안전하게 보호합니다.
 · 안정적인 서비스 제공을 위해 노력합니다.
제5조 기타
 본 약관에서 정하지 않은 사항은 관련 법령을 따릅니다.`,
    },
    {
      key: 'privacy',
      required: true,
      title: '개인정보 수집·이용 동의',
      content: `수집 항목
 · 이름, 생년월일, 연락처, 보호자 정보, 계정 정보
수집 목적
 · 회원 가입 및 본인 확인
 · 서비스 제공 및 이용자 식별
 · 알림·고지 전달
보유 기간
 · 회원 탈퇴 시 즉시 파기 (단, 관련 법령에 따라 일정 기간 보관될 수 있음)`,
    },
    {
      key: 'sensitive',
      required: true,
      title: '민감정보(건강정보) 수집·이용 동의',
      content: `수집 항목
 · 건강 상태(치매 의심·경도·중증 등)
 · 복약 정보, 컨디션 기록, 인지 기능 관련 활동 내역
수집 목적
 · 맞춤형 건강 관리 기능 제공
 · 약 복용·운동·인지 활동 알림 제공
보유 기간
 · 회원 탈퇴 즉시 파기
※ 이용자는 민감정보 제공을 거부할 권리가 있으나, 거부 시 서비스 이용에 제한이 있을 수 있습니다.`,
    },
    {
      key: 'thirdParty',
      required: true,
      title: '개인정보 제3자 제공 동의',
      content: `제공받는 자
 · 보호자(사용자가 등록한 경우에 한함)
 · (선택) 연계 의료기관
제공 항목
 · 이용자의 이름, 기본 건강 정보, 알림 관련 정보
제공 목적
 · 보호자에게 알림 전송, 상태 확인 기능
보유 기간
 · 동의 철회 또는 회원 탈퇴 시까지`,
    },
    {
      key: 'notify',
      required: false,
      title: '전자적 전송(알림) 수신 동의',
      content: `수신 항목
 · 약 복용 알림
 · 건강 체크 및 인지 퀴즈 알림
 · 병원 방문 일정 알림
수단
 · 앱 푸시, 문자 메시지(SMS) 중 선택`,
    },
    {
      key: 'marketing',
      required: false,
      title: '마케팅 정보 수신 동의 (앱 푸시·SMS)',
      content: `수신 항목
 · 약 복용 알림
 · 건강 체크 및 인지 퀴즈 알림
 · 병원 방문 일정 알림
수단
 · 앱 푸시, 문자 메시지(SMS) 중 선택`,
    },
  ]

  const [open, setOpen] = useState(false)
  const [activeKey, setActiveKey] = useState(null)

  const activeTerm = useMemo(() => TERMS.find((t) => t.key === activeKey), [activeKey])

  const openModal = (key) => {
    setActiveKey(key)
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  return (
    <div>
      <AgreementModal term={activeTerm} open={open} onClose={closeModal} />
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
                  onView={() => openModal(t.key)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step3Form
