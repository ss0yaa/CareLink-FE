import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Title from '../common/Title'
import Subtitle from '../common/Subtitle'
import MedicineCard from './MedicineCard'

function MainEdit() {
  const [medicines, setMedicines] = useState([])
  const [editingId, setEditingId] = useState(null)

  const apiUrl = import.meta.env.VITE_API_BASE_URL
  const accessToken = localStorage.getItem('accessToken')

  // 1. 약 정보 조회
  const getMedicines = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/medicines`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })

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
    const tempItem = {
      id: Date.now(),
      name: '',
      times: [],
    }

    setMedicines((prev) => [...prev, tempItem])
    setEditingId(tempItem.id)
  }

  // 3. 약 정보 저장
  const handleAddMedicine = async ({ name, times }) => {
    try {
      const res = await axios.post(
        `${apiUrl}/api/medicines`,
        { name, times: times.map((t) => t.time) },
        { headers: { Authorization: `Bearer ${accessToken}` } },
      )
    } catch (err) {
      console.error(err)
    }
  }

  const handleSave = async (tempId, { name, times }) => {
    try {
      await handleAddMedicine({ name, times })
      // 임시 카드 제거
      setMedicines((prev) => prev.filter((item) => item.id !== tempId))
      setEditingId(null)

      await getMedicines()
    } catch (err) {
      alert('약 추가 실패')
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
      await axios.delete(`${apiUrl}/api/medicines/${medicineId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })

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
