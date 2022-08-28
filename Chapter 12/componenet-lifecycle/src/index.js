import React from 'react'
import ReactDOM from 'react-dom'



ReactDOM.render(
  <ErrorCatcher>
    <LifecycleDemo />
  </ErrorCatcher>,
  document.querySelector('#root')
)