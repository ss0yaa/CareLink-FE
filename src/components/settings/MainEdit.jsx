import React, { useEffect, useState } from 'react'
import api from '@/apis/axios'
import Title from '../common/Title'
import Subtitle from '../common/Subtitle'
import MedicineCard from './MedicineCard'

function MainEdit() {
  const [medicines, setMedicines] = useState([])
  const [editingId, setEditingId] = useState(null)

  // 1. 약 정보 조회
  const getMedicines = async () => {
    try {
      const res = await api.get('/api/medicines')

      setMedicines(res.data.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getMedicines()
  }, [])

  // 2. 약 추가 버튼 (임시 카드)
  const handleAdd = () => {
    if (editingId) {
      alert('현재 작성 중인 내용을 먼저 저장해주세요.')
      return
    }
    const tempItem = {
      id: Date.now(),
      name: '',
      times: [],
    }

    setMedicines((prev) => [...prev, tempItem])
    setEditingId(tempItem.id)
  }

  // 3. 약 정보 저장 (새로 등록 or 수정)
  const handleSave = async (id, payload) => {
    try {
      const isNew = typeof id === 'number' && id > 1000000000

      if (isNew) {
        // 약 정보 새로 등록
        await api.post('/api/medicines', {
          name: payload.name,
          times: payload.newIntakeTimes.map((t) => t.time),
        })
      } else {
        // 약 정보 수정
        await api.put('/api/medicines/${id}', payload)
      }

      setEditingId(null)
      await getMedicines()
    } catch (err) {
      console.error(err)
    }
  }

  // 4. 약 정보 수정
  const handleEdit = (id) => {
    setEditingId(id)
  }

  // 5. 약 정보 삭제
  const handleDelete = async (medicineId) => {
    try {
      await api.delete(`${apiUrl}/api/medicines/${medicineId}`)

      setMedicines((prev) => prev.filter((item) => item.id !== medicineId))
      if (editingId === medicineId) {
        setEditingId(null)
      }
    } catch (err) {
      alert('약 삭제 실패')
      console.error(err)
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
