import React, { useState, useEffect } from 'react'
import api from '@/apis/axios'
import Title from '../common/Title'
import Subtitle from '../common/Subtitle'
import MonthSection from './MonthSection'
import MonthSummarySection from './MonthSummarySection'
import DaySummaryCard from './DaySummaryCard'

const MainResult = () => {
  // 이번달 받아오기
  const [month, setMonth] = useState(new Date().getMonth() + 1)
  const [summary, setSummary] = useState(null)
  const [trainings, setTrainings] = useState([])

  // 월별 훈련요약 연동
  const getMonthResult = async () => {
    try {
      const year = new Date().getFullYear()
      const formattedMonth = `${year}-${String(month).padStart(2, '0')}`

      const res = await api.get('/api/trainings/monthly', { params: { month: formattedMonth } })

      if (res.data.success) {
        setSummary(res.data.data.summary)
        setTrainings(res.data.data.trainings)
      }
    } catch (err) {
      console.error(err)
      console.error('STATUS:', err.response.status)
      console.error('HEADERS:', err.response.headers)
      console.error('DATA:', err.response.data)
    }
  }

  useEffect(() => {
    getMonthResult()
  }, [month])

  return (
    <div className='flex-1 bg-background py-[30px] px-[50px] overflow-x-hidden'>
      <div className='flex flex-col '>
        <div className='flex flex-col gap-2.5'>
          <Title text={'지난 훈련 결과'} />
          <Subtitle text={'AI 신문 요약 훈련 기록입니다. 월별로 기록을 탐색하세요.'} />
        </div>
        {/* 월 선택 */}
        <MonthSection month={month} setMonth={setMonth} />
        {/* 훈련 요약 */}
        {summary && (
          <MonthSummarySection
            month={month}
            count={summary.totalCount}
            avgScore={summary.averageScore}
            bestScore={summary.maxScore}
          />
        )}
        {/* 결과 카드 */}
        <div className='grid grid-cols-3 gap-x-[34px] gap-y-[25px] mt-[25px]'>
          {trainings.map((item) => (
            <DaySummaryCard
              key={item.newsId}
              date={item.date}
              title={item.title}
              score={item.score}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainResult
