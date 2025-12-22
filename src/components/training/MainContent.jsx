import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Title from '../common/Title'
import Subtitle from '../common/Subtitle'
import BigArticleSection from './BigArticleSection'
import SmallArticleSection from './SmallArticleSection'
import ResultButton from './ResultButton'

const MainContent = () => {
  const [bigArticles, setBigArticles] = useState([])
  const [smallArticles, setSmallArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  // 연동
  const apiUrl = import.meta.env.VITE_API_BASE_URL
  const accessToken = localStorage.getItem('accessToken')
  const getTodayArticle = async () => {
    try {
      setIsLoading(true)
      const res = await axios.get(`${apiUrl}/api/trainings/news`)

      if (res.data.success) {
        setBigArticles(res.data.data.recommend)
        setSmallArticles(res.data.data.others)
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
    <div className='flex-1 bg-background py-[30px] pl-[50px] overflow-x-hidden'>
      <div className='flex flex-col gap-2.5'>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-2.5'>
            <Title text={'오늘의 추천 신문 기사'} />
            <Subtitle text={'AI가 회원님의 관심사와 인지 능력에 맞춰 추천하는 기사입니다.'} />
          </div>
          <BigArticleSection items={bigArticles} />
          <SmallArticleSection items={smallArticles} />
          <ResultButton onClick={handleClick} />
        </div>
      </div>
    </div>
  )
}

export default MainContent
