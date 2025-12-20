import React from 'react'
import Title from '../common/Title'
import Subtitle from '../common/Subtitle'
import SettingsButton from './SettingsButton'
import Profile from '@/assets/icons/icon-settings-profile.svg'
import Pill from '@/assets/icons/icon-settings-pill.svg'
import Hospital from '@/assets/icons/icon-settings-hospital.svg'
import Exit from '@/assets/icons/icon-settings-exit.svg'

function MainSettings(props) {
  return (
    <div className='flex-1 bg-background py-[30px] px-[50px] overflow-x-hidden'>
      <div className='flex flex-col '>
        <div className='flex flex-col gap-2.5'>
          <Title text={'환경설정'} />
          <Subtitle
            text={'계정, 알림, 개인정보 등 서비스 이용을 위한 설정을 변경할 수 있습니다.'}
          />
        </div>
        <div className='flex flex-col gap-[35px] my-[50px]'>
          <SettingsButton
            icon={Profile}
            title='회원정보 수정'
            subtitle='이름, 연락처 등 개인 정보를 변경할 수 있습니다.'
            path='/settings'
          />
          <SettingsButton
            icon={Pill}
            title='약 복용 정보 수정'
            subtitle='복용 중인 약의 종류나 복용 시간을 변경할 수 있습니다.'
            path='/settings/medications/edit'
          />
          <SettingsButton
            icon={Hospital}
            title='병원 정보 수정'
            subtitle='주로 방문하는 병원과 외래 일정을 변경할 수 있습니다.'
            path='/settings'
          />
          <SettingsButton
            icon={Exit}
            title='회원 탈퇴'
            subtitle='서비스 이용을 중단하고 계정을 삭제합니다.'
            path='/settings'
          />
        </div>
        <p className='font-regular text-[15px] text-[#606060] text-center'>
          정보를 최신으로 유지하면 더 정확한 서비스를 받을 수 있어요. 언제든지 설정을 변경할 수
          있습니다.
        </p>
      </div>
    </div>
  )
}

export default MainSettings
