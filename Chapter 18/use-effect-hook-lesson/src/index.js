import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const LogEffect = () => {
  const [text, setText] = useState('')
  useEffect(
    () => console.log('the latest value is:', text) // run this effect every time there is a new render (change to the state)
  )

  return <input value={text} onChange={(e) => setText(e.target.value)} /> // controlled input
}

ReactDOM.render(
  <LogEffect />,
  document.querySelector('#root')
)