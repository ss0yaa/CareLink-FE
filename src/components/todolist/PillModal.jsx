import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ModalBase from './ModalBase'
import CheckListSection from './CheckListSection'

function PillModal({ onClose, allChecked }) {
  const [morning, setMorning] = useState([])
  const [lunch, setLunch] = useState([])
  const [dinner, setDinner] = useState([])

  const apiUrl = import.meta.env.VITE_API_BASE_URL
  const accessToken = 'accessToken' // 임시 작성

  // 오늘 복용약 불러오는 함수
  const getTodayMedicines = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/medicines/today`)
      const { morningMedicines, noonMedicines, eveningMedicines } = res.data.data
      const allItems = [...morningMedicines, ...noonMedicines, ...eveningMedicines]

      const isAnyTaken = allItems.some((item) => item.isTaken)
      allChecked(isAnyTaken)

      setMorning(morningMedicines)
      setLunch(noonMedicines)
      setDinner(eveningMedicines)
    } catch (err) {
      console.error(err)
    }
  }
  // 모달창 확인 버튼
  const handleConfirm = async () => {
    const allItems = [...morning, ...lunch, ...dinner]

    // 체크한 약 id만 추출
    const takenIds = allItems.filter((item) => item.isTaken).map((item) => item.id)

    try {
      await axios.post(`${apiUrl}/api/medicines/today`, {
        medicineIntakeTimeIds: takenIds,
      })

      onClose()
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getTodayMedicines()
  }, [])

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
