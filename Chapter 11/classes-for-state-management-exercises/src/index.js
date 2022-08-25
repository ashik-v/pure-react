import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

function House() {
  return (
    <div>
      <Room />
      <Room />
      <Room />
      <Room />
    </div>
  )
}

function Room() {
  return (
    <div>This is a room</div>
  )
}

root.render(<House />)