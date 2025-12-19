import React from 'react'
import info from '@/assets/icons/icon-dashboard-information.svg'
import guide from '@/assets/icons/icon-guide.svg'
import support from '@/assets/icons/icon-support.svg'
import link from '@/assets/icons/icon-link.svg'

const InfoCard = () => {
  return (
    <div className='px-9 py-4 border border-[#0284C7] rounded-[15px]'>
      <div className='flex items-center'>
        <p className='font-semibold text-[20px] text-black pr-7'>보호자를 위한 정보 및 자료</p>
        <div className='px-[5px] py-2.5 rounded-[15px] bg-[#E8F9EF]'>
          <img src={info} alt='정보' className='aspect-square w-6' />
        </div>
      </div>
      <div className='grid grid-cols-3'>
        <div className='flex py-6'>
          <div className='bg-[#E6F6FD] rounded-[15px] p-2.5'>
            <img src={guide} alt='팁' className='aspect-square w-[30px]' />
          </div>
          <div className='pl-[18px]'>
            <p className='font-semibold text-[18px] text-black'>치매 환자 돌봄 가이드</p>
            <p className='font-normal text-[16px] text-black'>일상 생활 속 돌봄 팁</p>
          </div>
        </div>
        <div className='flex py-6'>
          <div className='bg-[#FFEDD5] rounded-[15px] p-2.5'>
            <img src={support} alt='지원' className='aspect-square w-[30px]' />
          </div>
          <div className='pl-[18px]'>
            <p className='font-semibold text-[18px] text-black'>정부 지원 정책 안내</p>
            <p className='font-normal text-[16px] text-black'>지원금 및 서비스 정보</p>
          </div>
        </div>
        <div className='flex py-6'>
          <div className='bg-[#ECFCCB] rounded-[15px] p-2.5'>
            <img src={link} alt='링크' className='aspect-square w-[30px]' />
          </div>
          <div className='pl-[18px]'>
            <p className='font-semibold text-[18px] text-black'>유용한 외부 자료</p>
            <p className='font-normal text-[16px] text-black'>중앙치매센터 바로가기</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
