import React from 'react'
import ReactDOM from 'react-dom'

function HelloWorld() {
  const entity = 'World'
  return (
    <>
      <div>Hello {entity}!</div>
      <strong>{1 + 1}</strong>
    </>
  )
}

ReactDOM.render(<HelloWorld />, document.querySelector('#root'))