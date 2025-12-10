import React from 'react'
import Title from '../common/Title'
import Subtitle from '../common/Subtitle'
import BigArticleSection from './BigArticleSection'
import SmallArticleSection from './SmallArticleSection'
import ResultButton from './ResultButton'

const MainContent = () => {
  return (
    <div className='flex-1 bg-[#F6F8F6] py-[30px] pl-[50px] overflow-x-hidden'>
      <div className='flex flex-col gap-2.5'>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-2.5'>
            <Title text={'오늘의 추천 신문 기사'} />
            <Subtitle text={'AI가 회원님의 관심사와 인지 능력에 맞춰 추천하는 기사입니다.'} />
          </div>
          <BigArticleSection />
          <SmallArticleSection />
          <ResultButton />
        </div>
      </div>
    </div>
  )
}

export default MainContent
