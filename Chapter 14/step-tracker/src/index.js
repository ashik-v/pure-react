import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function StepTracker() {
  const [steps, setSteps] = useState(0)

  const takeStep = () => {
    setSteps((steps) => steps + 1 ) // use this when you need to rely on a previous state value over something like setSteps(steps + 1)
  }

  return(
    <>
      <button onClick={takeStep}>Take Step</button>
      <div>You have taken {steps} steps today</div>
    </>
  )
}

ReactDOM.render(
  <StepTracker />,
  document.querySelector('#root')
)
