import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '@/apis/axios'
import Title from '../common/Title'
import Subtitle from '../common/Subtitle'
import BigArticleSection from './BigArticleSection'
import SmallArticleSection from './SmallArticleSection'
import ResultButton from './ResultButton'

const MainContent = () => {
  const [bigArticles, setBigArticles] = useState([])
  const [smallArticles, setSmallArticles] = useState([])
  const [todayDone, setTodayDone] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const getTodayArticle = async () => {
    try {
      setIsLoading(true)
      const res = await api.get('/api/trainings/news')

      if (res.data.success) {
        const recommended = res.data.data.recommended
        const others = res.data.data.others

        setBigArticles(recommended)
        setSmallArticles(others)

        const isCompleted = [...recommended, ...others].some((item) => item.completed === true)

        if (isCompleted) {
          setTodayDone(true)
        }
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleClick = () => {
    navigate('/training/result')
  }

  useEffect(() => {
    getTodayArticle()
  }, [])
  return (
    <div className='flex-1 bg-background py-[30px] pl-[50px] pr-[24px] overflow-x-hidden'>
      <div className='flex flex-col gap-2.5'>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-2.5'>
            <Title text={'오늘의 추천 신문 기사'} />
            <Subtitle text={'AI가 회원님의 관심사와 인지 능력에 맞춰 추천하는 기사입니다.'} />
          </div>
          <BigArticleSection items={bigArticles} disabled={todayDone} />
          <SmallArticleSection items={smallArticles} disabled={todayDone} />
          <ResultButton onClick={handleClick} />
        </div>
      </div>
    </div>
  )
}

export default MainContent
