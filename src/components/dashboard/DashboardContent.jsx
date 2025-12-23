import React, { useEffect, useState, useMemo } from 'react'
import ConditionCard from './ConditionCard'
import StatusCard from './StatusCard'
import QuizCard from './QuizCard'
import CalenderCard from './CalenderCard'
import NotificationCard from './NotificationCard'
import InfoCard from './InfoCard'
import Loading from '../common/Loading'
import api from '@/apis/axios'

const DashboardContent = () => {
  const [dash, setDash] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        setError(null)

        const res = await api.get('/api/dashboard')
        setDash(res.data.data ?? null)
      } catch (e) {
        setError('대시보드를 불러오지 못했어요.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const moodChartData = useMemo(() => {
    const scores = dash?.condition?.moodScores ?? []
    return scores.map((v, i) => ({ x: i, y: v }))
  }, [dash])

  const quizChartData = useMemo(() => {
    const list = dash?.quiz?.last7Days ?? []
    return list.map((item, i) => ({
      x: i,
      y: item.score,
    }))
  }, [dash])

  if (loading) {
    return <Loading />
  }
  if (error || !dash)
    return <div className='flex-1 text-2xl bg-background px-[50px] py-[30px]'>{error}</div>

  return (
    <div className='flex-1 bg-background px-[50px] py-[30px]'>
      <div>
        <h1 className='font-semibold text-[40px] text-black pb-6'>종합 대시보드</h1>
      </div>
      <div className='grid grid-rows-3 gap-9'>
        <div className='grid grid-cols-4 gap-7'>
          <ConditionCard moodData={moodChartData} />
          <StatusCard theme={'medicine'} data={dash.medicine} />
          <StatusCard theme={'diary'} data={dash.diary} />
          <StatusCard theme={'training'} data={dash.cognitiveTraining} />
        </div>
        <div className='grid grid-cols-3 gap-7'>
          <QuizCard quizData={quizChartData} score={dash.quiz.todayScore} />
          <CalenderCard />
          <NotificationCard />
        </div>
        <div>
          <InfoCard />
        </div>
      </div>
    </div>
  )
}

export default DashboardContent
