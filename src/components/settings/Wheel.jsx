import React, { useRef } from 'react'

function Wheel({ items, value, onChange }) {
  const timeRef = useRef(null)

  const itemHeight = 48
  const mh = 113.5

  const handleScroll = () => {
    const scrollTop = timeRef.current.scrollTop
    const index = Math.round(scrollTop / itemHeight)
    onChange(items[index])
  }

  return (
    <div
      ref={timeRef}
      onScroll={handleScroll}
      style={{
        // 스크롤바 숨기기
        height: '275px',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}
      className='h-full w-[70px] overflow-y-auto scroll-smooth snap-y snap-mandatory text-center'
    >
      {/* 스크롤 상단 여백 */}
      <div style={{ height: mh }} />

      {items.map((item) => (
        <div
          key={item}
          className={`h-12 flex items-center justify-center snap-center text-[23px] ${
            item === value ? 'font-semibold text-black' : 'text-[#8C8C8C]'
          }`}
        >
          {item}
        </div>
      ))}

      {/* 스크롤 하단 여백 */}
      <div style={{ height: mh }} />
    </div>
  )
}

export default Wheel
