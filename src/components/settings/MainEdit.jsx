import React, { useEffect, useState } from 'react'
import Title from '../common/Title'
import Subtitle from '../common/Subtitle'
import MedicineCard from './MedicineCard'

function MainEdit() {
  const [medicines, setMedicines] = useState([])
  const [editingId, setEditingId] = useState(null)

  // 1. 약 정보 조회
  useEffect(() => {
    setMedicines([])
  }, [])

  // 2. 약 추가
  const handleAdd = () => {
    const newItem = {
      id: Date.now(),
      name: '',
      time: '',
    }

    setMedicines((prev) => [...prev, newItem])
    setEditingId(newItem.id)
  }

  // 3. 약 정보 저장
  const handleSave = (id, updatedData) => {
    setMedicines((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedData } : item)),
    )
    setEditingId(null)
  }

  // 4. 약 정보 수정
  const handleEdit = (id) => {
    setEditingId(id)
  }

  // 5. 약 정보 삭제
  const handleDelete = (id) => {
    setMedicines((prev) => prev.filter((item) => item.id !== id))

    if (editingId === id) {
      setEditingId(null)
    }
  }

  return (
    <div className='flex-1 bg-background py-[30px] px-[50px] overflow-x-hidden'>
      <div className='flex flex-col '>
        <div className='flex flex-col gap-2.5'>
          <Title text={'약 복용 정보 수정'} />
          <Subtitle text={'복용 중인 약의 종류나 복용 시간을 변경할 수 있습니다.'} />
        </div>
        {/* 약 리스트 */}
        <div className='flex flex-col items-center justify-center gap-10 mt-[30px]'>
          {medicines.map((item) => (
            <MedicineCard
              key={item.id}
              item={item}
              isEditing={editingId === item.id}
              onSave={handleSave}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
        {/* 항상 하단에 약 추가 버튼 */}
        <div className='flex flex-col items-center justify-center'>
          <button
            onClick={handleAdd}
            type='button'
            className='w-[654px] mt-10 py-[21px] font-semibold text-[23px] text-white bg-[#88D4C6] rounded-[10px] hover:bg-primary cursor-pointer'
          >
            약 추가
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainEdit
