import React, { useState } from 'react'
import ModalBase from './ModalBase'
import CheckListSection from './CheckListSection'

// 더미데이터
const pillDummy = {
  morning: [
    {
      id: 'm1',
      name: '혈압약',
      time: '아침 09:00',
      checked: false,
    },
    {
      id: 'm2',
      name: '비타민 D',
      time: '아침 10:00',
      checked: false,
    },
  ],

  lunch: [
    {
      id: 'm3',
      name: '오메가3',
      time: '낮 12:00',
      checked: false,
    },
  ],

  dinner: [
    {
      id: 'm4',
      name: '치매 처방약',
      time: '저녁 7:00',
      checked: false,
    },
  ],
}

function PillModal({ onClose }) {
  const [morning, setMorning] = useState(pillDummy.morning)
  const [lunch, setLunch] = useState(pillDummy.lunch)
  const [dinner, setDinner] = useState(pillDummy.dinner)

  // 확인 버튼
  const handleConfirm = () => {
    onClose()
  }
  return (
    <>
      <ModalBase
        title='약 복용 확인'
        detail='약 정보 수정은 환경설정에서 가능합니다.'
        onClose={onClose}
        onConfirm={handleConfirm}
        containerClassName='w-[787px]'
      >
        <div className='flex flex-col gap-[45px] mt-10 mb-21'>
          <CheckListSection title='아침' items={morning} onChange={setMorning} />
          <CheckListSection title='점심' items={lunch} onChange={setLunch} />
          <CheckListSection title='저녁' items={dinner} onChange={setDinner} />
        </div>
      </ModalBase>
    </>
  )
}

export default PillModal
