import React, { useMemo, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './calendar.css'

const CalendarContent = ({ diaryDates = [] }) => {
  //기본 선택: 오늘(처음 로딩 시 네모가 오늘에 뜸)
  const [value, setValue] = useState(new Date())

  //일기 작성 날짜 빠른 조회용
  const diarySet = useMemo(() => new Set(diaryDates), [diaryDates])

  //Date -> "YYYY-MM-DD"
  const toKey = (date) => {
    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, '0')
    const d = String(date.getDate()).padStart(2, '0')
    return `${y}-${m}-${d}`
  }

  return (
    <div className='calendar-wrap'>
      <Calendar
        value={value}
        onChange={setValue}
        view='month'
        locale='ko-KR'
        next2Label={null}
        prev2Label={null}
        formatDay={(locale, date) => date.getDate()}
        tileContent={({ date, view }) => {
          if (view !== 'month') return null
          return diarySet.has(toKey(date)) ? <span className='cal-dot' /> : null
        }}
      />
    </div>
  )
}

export default CalendarContent
