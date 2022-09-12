import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Room() {
  const [isLit, setLit] = useState(false)

  const handleFlick = () => {
    setLit(!isLit)
  }

  return (
    <>
      <div>The room is { isLit ? 'lit' : 'not lit' }</div>
      <Lightswitch handleFlick={handleFlick}/>
    </>
  )
}

function Lightswitch({ handleFlick }) {
  return (
    <button onClick={handleFlick}>Flick switch</button>
  )
}

root.render(
  <Room />
)
