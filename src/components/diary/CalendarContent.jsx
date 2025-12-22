import React, { useMemo, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './calendar.css'

const CalendarContent = ({ diaryDates = [], onSelectDate, onMonthChange }) => {
  const [value, setValue] = useState(new Date())
  const diarySet = useMemo(() => new Set(diaryDates), [diaryDates])

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
        onChange={(date) => {
          setValue(date)
          onSelectDate?.(date)
        }}
        view='month'
        locale='ko-KR'
        next2Label={null}
        prev2Label={null}
        formatDay={(locale, date) => date.getDate()}
        tileContent={({ date, view }) => {
          if (view !== 'month') return null
          return diarySet.has(toKey(date)) ? <span className='cal-dot' /> : null
        }}
        onActiveStartDateChange={({ activeStartDate, view }) => {
          if (view !== 'month') return
          onMonthChange?.({
            year: activeStartDate.getFullYear(),
            month: activeStartDate.getMonth() + 1,
          })
        }}
      />
    </div>
  )
}

export default CalendarContent
