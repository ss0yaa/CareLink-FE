import React, { useState, useMemo, useEffect } from 'react'
import DiaryTipCard from './DiaryTipCard'
import CareMessageCard from './CareMessageCard'
import CalederCard from './CalederCard'
import CalendarContent from './CalendarContent'
import api from '@/apis/axios'

async function fetchMonthlyDiaries(year, month) {
  const res = await api.get('/api/diary', {
    params: { year: String(year), month: String(month) },
  })
  return res.data
}

const DiaryListContent = () => {
  const today = new Date()

  const [currentYM, setCurrentYM] = useState({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
  })

  const [selectedDate, setSelectedDate] = useState(null)
  const [diaries, setDiaries] = useState([])
  const [careMessage, setCareMessage] = useState('')

  useEffect(() => {
    const load = async () => {
      const data = await fetchMonthlyDiaries(currentYM.year, currentYM.month)

      const list = data?.data?.diaries ?? []
      setDiaries(list)
      setCareMessage(data?.data?.message ?? '')
    }
    load()
  }, [currentYM.year, currentYM.month])

  //점 찍을 날짜 배열
  const diaryDates = useMemo(() => diaries.map((d) => d.date), [diaries])

  const selectedKey = useMemo(() => {
    if (!selectedDate) return null
    const y = selectedDate.getFullYear()
    const m = String(selectedDate.getMonth() + 1).padStart(2, '0')
    const d = String(selectedDate.getDate()).padStart(2, '0')
    return `${y}-${m}-${d}`
  }, [selectedDate])

  //CalenderCard에 띄울 표시용 일기
  const displayDiary = useMemo(() => {
    if (!diaries.length) return null

    //선택 날짜에 일기 있는 경우
    if (selectedKey) {
      const found = diaries.find((x) => x.date === selectedKey)
      if (found) return found
    }

    //가장 최신 일기
    return diaries.reduce((latest, cur) => (cur.date > latest.date ? cur : latest), diaries[0])
  }, [diaries, selectedKey])

  return (
    <div className='flex-1 bg-background px-[50px] py-[30px] w-full overflow-y-auto flex flex-col gap-5'>
      <div>
        <h1 className='font-semibold text-[40px] text-black pb-2.5'>나의 일기 기록</h1>
        <p className='font-normal text-[18px] text-[#606060]'>
          작성한 일기를 달력에서 확인해보세요.
        </p>
      </div>
      <div className='flex gap-[50px]'>
        <CalendarContent
          diaryDates={diaryDates}
          onSelectDate={(date) => setSelectedDate(date)}
          onMonthChange={({ year, month }) => {
            setCurrentYM({ year, month })
          }}
        />
        <div className='flex flex-col gap-[25px]'>
          <DiaryTipCard />
          <CareMessageCard message={careMessage} />
          <CalederCard diary={displayDiary} />
        </div>
      </div>
    </div>
  )
}

export default DiaryListContent
