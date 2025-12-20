import React from 'react'
import ConditionButton from './ConditionButton'

function ConditionQuestion({ title, options, type, selected, onSelect }) {
  return (
    <div>
      <p className='font-medium text-[23px] text-center'>{title}</p>
      <div className='flex flex-row gap-[35px] mt-5'>
        {options.map((opt) => (
          <ConditionButton
            key={opt.value}
            label={opt.label}
            icon={type === 'icon' ? opt.src : null}
            isSelected={selected === opt.score}
            onClick={() => onSelect(opt.score)}
          />
        ))}
      </div>
    </div>
  )
}

export default ConditionQuestion
