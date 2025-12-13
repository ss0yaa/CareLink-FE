import React, { useState } from 'react'
import Title from '../common/Title'
import Subtitle from '../common/Subtitle'
import MonthSection from './MonthSection'
import MonthSummarySection from './MonthSummarySection'
import DaySummaryCard from './DaySummaryCard'

// 일별 더미데이터
const dayDummy = [
  {
    id: 1,
    date: '2025년 12월 27일',
    title: '건강한 노년을 위한 5가지 생활 습관',
    score: 92,
  },
  {
    id: 2,
    date: '2025년 12월 20일',
    title: '건강 지키는 여행 습관 3가지',
    score: 90,
  },
  {
    id: 3,
    date: '2025년 12월 18일',
    title: '반려동물과 함께하는 행복한 시간',
    score: 92,
  },
  {
    id: 4,
    date: '2025년 12월 11일',
    title: '시니어와 반려견, 함께 걷는 건강 산책법',
    score: 95,
  },
  {
    id: 5,
    date: '2025년 12월 1일',
    title: '하루 20분 스트레칭, 병원 갈 일 줄였다',
    score: 81,
  },
]

const MainResult = () => {
  // 이번달 받아오기
  const [month, setMonth] = useState(new Date().getMonth() + 1)

  // 월별 훈련요약 연동

  // 일별 훈련요약 카드 연동

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
        <MonthSummarySection month={month} count={5} avgScore={90} bestScore={95} />
        {/* 결과 카드 */}
        <div className='grid grid-cols-3 gap-x-[34px] gap-y-[25px] mt-[25px]'>
          {dayDummy.map((item) => (
            <DaySummaryCard key={item.id} date={item.date} title={item.title} score={item.score} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainResult
