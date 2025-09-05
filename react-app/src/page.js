import React, { useState } from 'react'
import './page.css'

export default function HeartClicker() {
  const [hearts, setHearts] = useState([])

  const handleClick = e => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()
    const rotation = Math.random() * 30 - 15
    const duration = 1000 + Math.random() * 500
    setHearts(h => [...h, { x, y, id, rotation, duration }])
    setTimeout(() => setHearts(h => h.filter(item => item.id !== id)), duration)
  }

  return (
    <div className="click-area" onClick={handleClick}>
      <div className="cat-wrapper">
        <img
          src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
          alt="Cute Dancing Cat"
          className="cute-cat"
        />
        <div className="click-me">Click me!</div>
      </div>

      {hearts.map(h => (
        <div
          key={h.id}
          className="heart"
          style={{
            left: h.x,
            top: h.y,
            '--rotation': `${h.rotation}deg`,
            '--duration': `${h.duration}ms`
          }}
        >❤️</div>
      ))}
    </div>
  )
}