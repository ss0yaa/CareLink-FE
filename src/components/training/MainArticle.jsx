import React from 'react'
import Title from '../common/Title'
import Subtitle from '../common/Subtitle'
import ArticleBox from './ArticleBox'

const MainArticle = () => {
  return (
    <div className='flex-1 bg-[#F6F8F6] py-[30px] px-[50px] overflow-x-hidden'>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-2.5'>
          <Title text={'신문을 요약해보세요.'} />
          <Subtitle text={'기사를 읽고 단계에 따라 내용을 요약해보세요.'} />
        </div>
        <ArticleBox />
      </div>
    </div>
  )
}

export default MainArticle
