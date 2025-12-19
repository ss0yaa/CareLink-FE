import React from 'react'
import calender from '@/assets/icons/icon-calender.svg'
import diary from '@/assets/icons/icon-diary.svg'
import DiaryBtn from './DiaryBtn'

const DiaryDetailContent = () => {
  const diaryContent = `벌써 1년이 지나갔다니 정말 믿기지 않아요.

 처음 시작할 때는 걱정도 많았고 잘 따라갈 수 있을까 불안하기도 했는데,
 돌아보면 그 시간 동안 정말 많은 걸 배우고 성장했던 한 해였던 것 같아요.
모두 정말 고생 많으셨습니다 😊

세미나 때마다 정성스럽게 준비해주신 운영진분들 덕분에 개념도 쉽게 이해할 수 있었고, 혼자였다면 
절대 못 했을 실습들도 재밌게 따라갈 수 있었어요. 질문하면 항상 친절하게 답해주시고, 방향도 잘 잡아주셔서 아기사자로서 정말 든든했습니다.

그리고 프로젝트랑 해커톤 준비할 때는 팀원들이 아이디어 하나하나 진지하게 고민하고 열정적으로 의견을 나누는 모습을 보면서  “아, 나도 더 잘하고 싶다”는 마음이 자연스럽게 들 정도였어요.
서로 챙겨주고 도와주는 분위기 덕분에 힘든 것보다 즐거운 기억이 훨씬 많습니다.

13기 모두가 각자 자리에서 더 멋지게 성장하길 응원하고, 언젠가 또 좋은 인연으로 만날 수 있으면 
좋겠습니다.

정말 고생 많았고, 다들 너무 멋졌습니다! 💙`

  return (
    <div className='px-[50px] py-[30px] w-full overflow-y-auto flex flex-col gap-5'>
      <div>
        <h1 className='font-semibold text-[40px] text-black pb-2.5'>나의 일기 기록</h1>
        <div className='flex items-center'>
          <img src={calender} alt='날짜' className='aspect-square w-[25px]' />
          <p className='font-normal text-[18px] text-black pl-[5px]'>2025년 12월 27일</p>
        </div>
      </div>
      <div>
        <div className='flex items-center pb-2.5'>
          <img src={diary} alt='일기' className='aspect-square w-[25px]' />
          <p className='font-medium text-[24px] pl-2.5'>일기 제목</p>
        </div>
        <div className='border-[1.5px] border-[#B3B3B3] rounded-[10px] w-full font-semibold text-[20px] px-[30px] py-[13px]'>
          <p className='font-semibold text-[45px] text-black'>숙멋 사랑해</p>
        </div>
      </div>
      <div className='border-[1.5px] border-[#B3B3B3] rounded-[10px] w-full font-semibold text-[20px] p-[40px_60px_40px_40px]'>
        <p className='font-normal text-[20px] text-black whitespace-pre-wrap'>{diaryContent}</p>
      </div>
      <div className='flex justify-center p-5'>
        <DiaryBtn title={'돌아가기'} />
      </div>
    </div>
  )
}

export default DiaryDetailContent
