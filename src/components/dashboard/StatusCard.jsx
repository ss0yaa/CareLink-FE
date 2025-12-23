import React from 'react'
import medicine from '@/assets/icons/icon-dashboard-medicine.svg'
import diary from '@/assets/icons/icon-dashboard-dairy.svg'
import training from '@/assets/icons/icon-dashboard-training.svg'
import CircularProgressChart from './CircularProgressChart'

const StatusCard = ({ theme, data }) => {
  const percentage = data?.percentage ?? 0
  const completedDays = data?.completedDays ?? 0
  const todayStatus = data?.todayStatus ?? '-'

  const STATUS_THEME = {
    medicine: {
      title: '약 복용',
      img: medicine,
      bg: '#E3EAF7',
      iconBg: '#C1D5F6',
      stroke: '#1990E6',
    },
    diary: {
      title: '일기 작성',
      img: diary,
      bg: '#F5EFDF',
      iconBg: '#F3E3B4',
      stroke: '#EAB308',
    },
    training: {
      title: '인지 훈련',
      img: training,
      bg: '#EEE6F7',
      iconBg: '#E0C9F6',
      stroke: '#A855F7',
    },
  }

  const { title, img, bg, iconBg, stroke } = STATUS_THEME[theme]

  return (
    <div className='rounded-[15px] p-[18px] min-w-40' style={{ backgroundColor: bg }}>
      <div className='flex justify-between items-center'>
        <p className='font-semibold text-lg text-black'>{title}</p>
        <div className='px-[5px] py-2.5 rounded-[15px]' style={{ backgroundColor: iconBg }}>
          <img
            src={img}
            alt={title}
            className={`aspect-square ${theme === 'diary' ? 'w-[26px]' : 'w-[30px]'}`}
          />
        </div>
      </div>
      <div className='flex pt-[50px]'>
        <CircularProgressChart value={percentage} color={stroke} />
        <div className='pl-3'>
          <p className='font-semibold text-[28px] text-black'>{todayStatus}</p>
          <p className='font-normal text-[15px] text-black '>
            이번 주 <br />
            {completedDays}/7회{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default StatusCard
