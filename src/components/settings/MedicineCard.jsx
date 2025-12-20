import React, { useEffect, useState } from 'react'
import IconSelect from '@/assets/icons/icon-select.svg'
import IconEdit from '@/assets/icons/icon-edit.svg'
import IconTrash from '@/assets/icons/icon-trash.svg'
import TimePicker from './TimePicker'

function MedicineCard({ item, isEditing, onSave, onEdit, onDelete }) {
  const [name, setName] = useState(item.name)
  const [times, setTimes] = useState(
    item.times && item.times.length > 0 ? item.times : [{ id: null, time: '' }],
  )
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false)
  const [activeTimeIndex, setActiveTimeIndex] = useState(null)

  useEffect(() => {
    if (isEditing) {
      setName(item.name)
      setTimes(
        item.times && item.times.length > 0 ? item.times : [{ id: `temp-${Date.now()}`, time: '' }],
      )
    }
  }, [isEditing, item])

  // 시간 선택 모달
  const handleModal = (index) => {
    setActiveTimeIndex(index)
    setIsTimeModalOpen(true)
  }

  // 시간 추가 버튼
  const handleAddTime = () => {
    // 마지막 입력창이 비어있으면 추가 방지
    if (times.length > 0 && !times[times.length - 1].time) {
      alert('시간을 먼저 선택해주세요.')
      return
    }
    setTimes((prev) => [...prev, { id: `temp-${Date.now()}`, time: '' }])
  }

  // 카드 저장 버튼
  const handleSaveClick = () => {
    if (!name.trim()) {
      alert('약 이름을 입력해주세요.')
      return
    }
    if (times.length === 0 || times.some((t) => !t.time)) {
      alert('복용 시간을 모두 입력해주세요.')
      return
    }

    onSave(item.id, {
      name,
      times,
    })
  }
  return (
    <div className='w-[700px] relative mx-auto'>
      <div className=' flex flex-col justify-center px-[150px] py-[45px] bg-white shadow-[0px_2px_2px_3px_rgba(0,0,0,0.25)] rounded-[25px]'>
        {isEditing ? (
          <>
            <div className='flex flex-col gap-2.5'>
              <p className='font-medium text-[23px]'>약 이름</p>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='복용하는 약을 입력해주세요.'
                className='px-[25px] py-[17px] font-semibold text-[18px] bg-white rounded-[10px] border-[1.50px] border-[#B3B3B3] placeholder:text-[#B3B3B3]'
              />
            </div>
            <div className='flex flex-col gap-2.5 mt-[30px]'>
              <p className='font-medium text-[23px]'>복용 시간</p>
              {times.map((t, index) => (
                <button
                  key={t.id || index}
                  type='button'
                  onClick={() => handleModal(index)}
                  className='flex flex-row justify-between px-[25px] py-[17px] font-semibold text-[18px] bg-white rounded-[10px] border-[1.50px] border-[#B3B3B3]  cursor-pointer'
                >
                  <p className={t.time ? 'text-black' : 'text-[#B3B3B3]'}>
                    {t.time || '시간을 선택해주세요.'}
                  </p>
                  <img src={IconSelect} />
                </button>
              ))}
            </div>
            <button
              type='button'
              onClick={handleAddTime}
              className='w-fit mt-5 px-[23px] py-[9px] font-semibold text-[18px] text-white bg-[#88D4C6] hover:bg-primary rounded-[10px] cursor-pointer'
            >
              시간 추가
            </button>
            <button
              type='button'
              onClick={handleSaveClick}
              className='mt-[50px] py-[11px] font-semibold text-[23px] text-white bg-primary rounded-[10px] cursor-pointer'
            >
              저장하기
            </button>
          </>
        ) : (
          <>
            <div className='flex flex-col gap-2.5'>
              <p className='font-medium text-[23px]'>약 이름</p>
              <div className='px-[25px] py-[17px] font-semibold text-[18px] bg-white rounded-[10px] border-[1.50px] border-[#B3B3B3]'>
                {item.name}
              </div>
            </div>
            <div className='flex flex-col gap-2.5 mt-[30px]'>
              <p className='font-medium text-[23px]'>복용시간</p>
              {item.times &&
                item.times.length > 0 &&
                item.times.map((t) => (
                  <div
                    key={t.id}
                    className='px-[25px] py-[17px] font-semibold text-[18px] bg-white rounded-[10px] border-[1.50px] border-[#B3B3B3] mb-2'
                  >
                    {t.time}
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
      {!isEditing && (
        <div className='absolute top-[30px] -right-20 flex flex-col gap-[30px] '>
          <button onClick={() => onEdit(item.id)} className='cursor-pointer'>
            <img src={IconEdit} />
          </button>
          <button onClick={() => onDelete(item.id)} className='cursor-pointer'>
            <img src={IconTrash} />
          </button>
        </div>
      )}
      <TimePicker
        isOpen={isTimeModalOpen}
        onClose={() => setIsTimeModalOpen(false)}
        onConfirm={(selectedTime) => {
          setTimes((prev) =>
            prev.map((t, i) => (i === activeTimeIndex ? { ...t, time: selectedTime } : t)),
          )
          setIsTimeModalOpen(false)
        }}
      />
    </div>
  )
}

export default MedicineCard
