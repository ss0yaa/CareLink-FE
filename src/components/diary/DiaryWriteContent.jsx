import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import calender from '@/assets/icons/icon-calender.svg'
import DiaryTitleInput from './DiaryTitleInput'
import DiaryTool from './DiaryTool'
import DiaryBtn from './DiaryBtn'
import diaryRecord from '@/assets/icons/icon-diary-record.svg'
import DiaryCanvas from './DiaryCanvas'
import api from '@/apis/axios'

const DiaryWriteContent = () => {
  const navigate = useNavigate()
  const today = new Date()
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`

  const [title, setTitle] = useState('')

  const handleSave = async () => {
    try {
      if (!title.trim()) {
        alert('일기 제목을 입력해주세요!')
        return
      }

      //캔버스 -> Blob
      const blob = await canvasRef.current?.exportBlob?.()
      if (!blob) {
        alert('이미지 생성에 실패했어요.')
        return
      }

      //Blob -> File
      const file = new File([blob], 'diary.png', { type: 'image/png' })

      //FormData 구성
      const formData = new FormData()
      formData.append('title', title)
      formData.append('image', file)

      //업로드
      const res = await api.post('/api/diary', formData)

      console.log(res.data)
      navigate(`/diary/${res.data.data}`)
    } catch (e) {
      console.error(e)
      alert('저장 중 오류가 발생했어요.')
    }
  }

  const canvasRef = useRef(null)
  const [tool, setTool] = useState('pen')
  const [color, setColor] = useState('#000000')

  return (
    <div className='flex-1 bg-background px-[50px] py-[30px] overflow-y-auto flex flex-col gap-5'>
      <div>
        <h1 className='font-semibold text-[40px] text-black pb-3'>일기</h1>
        <div className='flex items-center'>
          <img src={calender} alt='날짜' className='aspect-square w-[25px]' />
          <p className='font-normal text-[18px] text-black pl-[5px]'>{formattedDate}</p>
        </div>
      </div>
      <DiaryTitleInput title={title} setTitle={setTitle} />
      <DiaryTool
        tool={tool}
        setTool={setTool}
        color={color}
        setColor={setColor}
        onUndo={() => canvasRef.current?.undo()}
      />
      <div className='border-[1.5px] border-[#B3B3B3] rounded-[10px] min-h-[800px] overflow-hidden'>
        <DiaryCanvas ref={canvasRef} tool={tool} color={color} />
      </div>
      <div>
        <div className='flex justify-between'>
          <button
            type='button'
            onClick={() => navigate('/diary/list')}
            className='border-[1.5px] border-primary rounded-[10px] bg-white font-semibold text-[23px] text-black min-w-[282px] py-5 cursor-pointer flex justify-center items-center'
          >
            <img src={diaryRecord} alt='일기 기록' className='w-[21px] h-6 mr-2.5' />
            나의 일기 기록
          </button>
          <button
            type='button'
            onClick={handleSave}
            className='bg-primary rounded-[10px] font-semibold text-[23px] text-white min-w-[282px] py-5 cursor-pointer'
          >
            저장하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default DiaryWriteContent
