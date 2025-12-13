import React from 'react'
import SummaryBox from './SummaryBox'
import SummaryOneLineBox from './SummaryOneLineBox'

function ArticleBox() {
  // 기사 불러오기 (api)
  return (
    <div className='p-[30px] bg-white rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] '>
      <div className='flex flex-col gap-[50px]'>
        <div className='flex flex-col gap-2.5'>
          <p className='font-semibold text-[30px]'>한국 우주 탐사, 새로운 장을 열다</p>
          <p className='text-[20px]'>
            한국 최초의 달 탐사선 ‘다누리’가 성공적으로 발사되어 우주 탐사의 새로운 역사로운 역사를
            썼습니다. 이번 발사는 한국이 세계 7번째 달 탐사국으로 발돋움하는 중요한 이정표입니다.
            ‘다누리’는 앞으로 1년간 달 궤도를 돌며 표면 촬영, 자원 탐사 등 다양한 과학 임무를 수행할
            예정입니다. 특히, 미국 항공우주국(NASA)의 유인 달 탐사 프로젝트 ‘아르테미스’의 착륙
            후보지를 탐색하는 임무도 맡고 있어 국제 사회의 주목을 받고 있습니다. <br />
            이번 성공은 국내 연구진의 끊임없는 노력과 기술이 집약된 결과입니다. 정부는 이번 성공을
            발판 삼아 2032년 달 착륙선 발사 등 후속 우주 개발 계획을 차질 없이 추친하겠다고
            밝혔습니다. 대한민국의 우주를 향한 도전은 이제부터 시작입니다.한국 최초의 달 탐사선
            ‘다누리’가 성공적으로 발사되어 우주 탐사의 새로운 역사로운 역사를 썼습니다. 이번 발사는
            한국이 세계 7번째 달 탐사국으로 발돋움하는 중요한 이정표입니다. ‘다누리’는 앞으로 1년간
            달 궤도를 돌며 표면 촬영, 자원 탐사 등 다양한 과학 임무를 수행할 예정입니다.
          </p>
        </div>
        <SummaryBox />
        <hr className='w-[880px] border-0 border-t border-[#606060]' />
        <SummaryOneLineBox />
      </div>
    </div>
  )
}

export default ArticleBox
