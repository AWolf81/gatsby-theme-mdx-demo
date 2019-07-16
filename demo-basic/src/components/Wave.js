import React, { useState } from 'react'

const Wave = () => {
  const [waves, setWaves] = useState(0)

  return (
    <button type='button' onClick={() => setWaves(waves + 1)}>
      Yay! You waved {waves} times. 👋
    </button>
  )
}

export default Wave
