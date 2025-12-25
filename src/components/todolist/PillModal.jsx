import React, { useEffect, useState } from 'react'
import api from '@/apis/axios'
import ModalBase from './ModalBase'
import CheckListSection from './CheckListSection'
import AlertPillModal from './AlertPillModal'
import Loading from '../common/Loading'

function PillModal({ onClose, onSuccess }) {
  const [morning, setMorning] = useState([])
  const [lunch, setLunch] = useState([])
  const [dinner, setDinner] = useState([])
  const [isEmpty, setIsEmpty] = useState(true) // 약 정보 등록 여부
  const [isLoading, setIsLoading] = useState(false)

  // 오늘 복용약 불러오는 함수
  const getTodayMedicines = async () => {
    try {
      setIsLoading(true)
      const res = await api.get('/api/medicines/today')
      const { morningMedicines, noonMedicines, eveningMedicines } = res.data.data

      const count = morningMedicines.length + noonMedicines.length + eveningMedicines.length
      if (count === 0) {
        setIsEmpty(true)
      } else {
        setIsEmpty(false)
        const allItems = [...morningMedicines, ...noonMedicines, ...eveningMedicines]
        setMorning(morningMedicines)
        setLunch(noonMedicines)
        setDinner(eveningMedicines)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }
  // 모달창 확인 버튼
  const handleConfirm = async () => {
    const allItems = [...morning, ...lunch, ...dinner]

    // 체크한 약 id만 추출
    const takenIds = allItems.filter((item) => item.isTaken).map((item) => item.id)

    try {
      await api.post('/api/medicines/today', {
        medicineIntakeTimeIds: takenIds,
      })
      await onSuccess()
      onClose()
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getTodayMedicines()
  }, [])

  if (isLoading) return <Loading />
  return (
    <>
      {!isEmpty ? (
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
      ) : (
        <AlertPillModal />
      )}
    </>
  )
}

export default PillModal
