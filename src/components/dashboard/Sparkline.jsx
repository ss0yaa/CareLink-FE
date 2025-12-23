import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const Sparkline = ({ data, color, stroke, domain, className = 'w-full h-[60px]' }) => {
  return (
    <div className={className}>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart data={data} margin={{ top: 4, right: 4, bottom: 4, left: 4 }}>
          <XAxis hide />
          <YAxis hide domain={domain} />

          <Line
            type='linear'
            dataKey='y'
            stroke={color}
            strokeWidth={stroke}
            dot={false}
            activeDot={false}
            strokeLinecap='round'
            strokeLinejoin='round'
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Sparkline
