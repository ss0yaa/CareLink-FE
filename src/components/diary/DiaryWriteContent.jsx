import React from 'react'
import calender from '@/assets/icons/icon-calender.svg'

const DiaryWriteContent = () => {
  return (
    <div className='px-[50px] py-[30px] w-full'>
      <div>
        <h1 className='font-semibold text-[40px] text-black pb-6'>일기</h1>
      </div>
      <div>
        <div>
          <img src={calender} alt='날짜' />
          <p>2025년 12월 20일</p>
        </div>
        <div>
          <div>
            <img src='' alt='' />
            <p>일기 제목</p>
            {/* input창 */}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default DiaryWriteContent
