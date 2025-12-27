import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import calender from '@/assets/icons/icon-calender.svg'
import diaryIcon from '@/assets/icons/icon-diary.svg'
import DiaryBtn from './DiaryBtn'
import Loading from '../common/Loading'
import api from '@/apis/axios'

const DiaryDetailContent = () => {
  const { diaryId } = useParams()
  const navigate = useNavigate()

  const [diary, setDiary] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const formatDate = (dateStr) => {
    if (!dateStr) return ''
    const [year, month, day] = dateStr.split('-')
    return `${year}년 ${Number(month)}월 ${Number(day)}일`
  }

  useEffect(() => {
    const fetchDiaryDetail = async () => {
      try {
        setLoading(true)
        const res = await api.get(`/api/diary/${diaryId}`)
        setDiary(res.data?.data ?? null)
      } catch (err) {
        setError('일기를 불러오지 못했어요.')
      } finally {
        setLoading(false)
      }
    }

    fetchDiaryDetail()
  }, [diaryId])

  if (loading) {
    return <Loading />
  }

  if (error || !diary) {
    return (
      <div className='p-10'>
        <p className='text-xl'>{error ?? '일기가 존재하지 않아요.'}</p>
        <button onClick={() => navigate('/diary/list')} className='mt-6 underline'>
          목록으로 돌아가기
        </button>
      </div>
    )
  }

  return (
    <div className='flex-1 bg-background px-[50px] py-[30px] w-full overflow-y-auto flex flex-col gap-5'>
      <div>
        <h1 className='font-semibold text-[40px] text-black pb-2.5'>나의 일기 기록</h1>
        <div className='flex items-center'>
          <img src={calender} alt='날짜' className='aspect-square w-[25px]' />
          <p className='font-normal text-[18px] text-black pl-[5px]'>
            {formatDate(diary.localDate)}
          </p>
        </div>
      </div>
      <div>
        <div className='flex items-center pb-2.5'>
          <img src={diaryIcon} alt='일기' className='aspect-square w-[25px]' />
          <p className='font-medium text-[24px] pl-2.5'>일기 제목</p>
        </div>
        <div className='border-[1.5px] border-[#B3B3B3] rounded-[10px] w-full font-semibold text-[20px] px-[30px] py-[13px]'>
          <p className='font-semibold text-[45px] text-black'>{diary.title}</p>
        </div>
      </div>
      <div className='border-[1.5px] border-[#B3B3B3] rounded-[10px] w-full p-1'>
        <img src={diary.imageUrl} alt='일기 내용 이미지' className='w-full h-auto rounded-[10px]' />
      </div>
      <div className='flex justify-center p-5'>
        <button
          type='button'
          onClick={() => navigate(-1)}
          className='bg-primary rounded-[10px] font-semibold text-[23px] text-white min-w-[282px] py-5 cursor-pointer'
        >
          돌아가기
        </button>
      </div>
    </div>
  )
}

export default DiaryDetailContent
