import React from 'react'
import medicine from '@/assets/icons/icon-dashboard-medicine.svg'
import diary from '@/assets/icons/icon-dashboard-dairy.svg'
import training from '@/assets/icons/icon-dashboard-training.svg'

const StatusCard = ({ theme }) => {
  const STATUS_THEME = {
    medicine: {
      title: '약 복용',
      img: medicine,
      bg: '#E3EAF7',
      iconBg: '#C1D5F6',
    },
    diary: {
      title: '일기 작성',
      img: diary,
      bg: '#F5EFDF',
      iconBg: '#F3E3B4',
    },
    training: {
      title: '인지 훈련',
      img: training,
      bg: '#EEE6F7',
      iconBg: '#E0C9F6',
    },
  }

  const { title, img, bg, iconBg } = STATUS_THEME[theme]

  return (
    <div className='rounded-[15px] p-[21px] min-w-40' style={{ backgroundColor: bg }}>
      <div className='flex justify-between'>
        <p className='font-semibold text-lg text-black'>{title}</p>
        <div className='px-[5px] py-2.5 rounded-[15px]' style={{ backgroundColor: iconBg }}>
          <img
            src={img}
            alt={title}
            className={`aspect-square ${theme === 'diary' ? 'w-[26px]' : 'w-[30px]'}`}
          />
        </div>
      </div>
      <div>
        <p className='font-semibold text-[28px] text-black py-5'>완료</p>
        {/* <img src="" alt="" /> */}
        <p className='font-normal text-[15px] text-black text-end'>
          이번 주 <br /> 5/7회{' '}
        </p>
      </div>
    </div>
  )
}

export default StatusCard
