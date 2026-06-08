'use client'
import { useEffect, useState } from 'react'

const TARGET = new Date('2026-07-01T09:00:00-07:00').getTime()

function pad(n: number) { return n < 10 ? '0' + n : '' + n }

export default function Countdown() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0, live: false })

  useEffect(() => {
    function tick() {
      const diff = TARGET - Date.now()
      if (diff <= 0) { setTime({ d: 0, h: 0, m: 0, s: 0, live: true }); return }
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
        live: false,
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (time.live) {
    return (
      <div className="countdown">
        <div className="onMarket">NOW ON THE MARKET</div>
      </div>
    )
  }

  return (
    <div className="countdown">
      <div className="countdownLabel">Going to market in</div>
      <div className="cdBoxes">
        {[['Days', time.d], ['Hours', time.h], ['Minutes', time.m], ['Seconds', time.s]].map(([unit, val]) => (
          <div className="cdBox" key={unit as string}>
            <div className="cdNum">{pad(val as number)}</div>
            <div className="cdUnit">{unit as string}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
