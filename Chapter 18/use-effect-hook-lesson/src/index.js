import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const LogEffect = () => {
  const [text, setText] = useState('')
  useEffect(
    () => console.log('the latest value is:', text) // run this effect every time there is a new render (change to the state)
  )

  return <input value={text} onChange={(e) => setText(e.target.value)} /> // controlled input
}

// if you want to limit when an effect runs, pass in an array of dependencies as the second argument to useEffect
const LogEffectOnMountOnly = () => {
  const [text, setText] = useState('')
  useEffect(
    () => console.log('the latest value is:', text),
    [] // empty array means that the effect runs only during the mounting (this behaviour cannot be changed)
  )

  return <input value={text} onChange={(e) => setText(e.target.value)} />
}

ReactDOM.render(
  <LogEffectOnMountOnly />,
  document.querySelector('#root')
)