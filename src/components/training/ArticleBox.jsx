import React, { useState, useEffect } from 'react'
import api from '@/apis/axios'
import SummaryBox from './SummaryBox'
import SummaryOneLineBox from './SummaryOneLineBox'

function ArticleBox({ newsId }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const getArticle = async () => {
    try {
      const res = await api.get(`/api/trainings/news/${newsId}`)

      if (res.data.success) {
        setTitle(res.data.data.title)
        setContent(res.data.data.content)
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getArticle()
  }, [])
  return (
    <div className='p-[30px] bg-white rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] '>
      <div className='flex flex-col gap-[50px]'>
        <div className='flex flex-col gap-2.5'>
          <p className='font-semibold text-[30px] whitespace-pre-line'>{title}</p>
          <p className='text-[20px] whitespace-pre-line leading-relaxed'>{content}</p>
        </div>
        <SummaryBox />
        <hr className='w-[880px] border-0 border-t border-[#606060]' />
        <SummaryOneLineBox />
      </div>
    </div>
  )
}

export default ArticleBox
