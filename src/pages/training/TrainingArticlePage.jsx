import React from 'react'
import { useParams } from 'react-router-dom'
import SideNavBar from '@/components/common/SideNavBar'
import MainArticle from '@/components/training/MainArticle'

const TrainingArticlePage = () => {
  const { newsId } = useParams()
  return (
    <div className='flex w-full h-dvh'>
      <SideNavBar />
      <MainArticle newsId={newsId} />
    </div>
  )
}

export default TrainingArticlePage
