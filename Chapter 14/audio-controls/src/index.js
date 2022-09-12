import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

function AudioControl() {
  const [volume, setVolume] = useState(0)
  const [treble, setTreble] = useState(0)
  const [mid, setMid] = useState(0)
  const [bass, setBass] = useState(0)

  return (
    <>
      <div>
        <button>+</button>
        <div>{volume}</div>
        <button>-</button>
      </div>
      <div>
        <button>+</button>
        <div>{treble}</div>
        <button>-</button>
      </div>
      <div>
        <button>+</button>
        <div>{mid}</div>
        <button>-</button>
      </div>
      <div>
        <button>+</button>
        <div>{bass}</div>
        <button>-</button>
      </div>
    </>
  )
}


root.render(
  <AudioControl />
)