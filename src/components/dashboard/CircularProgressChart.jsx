import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import './progressbar.css'

const CircularProgressChart = ({ value, color }) => {
  return (
    <div className='w-[100px] aspect-square'>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        strokeWidth={15}
        styles={buildStyles({
          pathColor: `${color}`,
          textColor: '#000',
          trailColor: '#fff',
          textSize: '25px',
        })}
      />
    </div>
  )
}

export default CircularProgressChart
