import React from 'react'
import ReactDOM from 'react-dom'

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

class Room extends React.Component {
  state = {
    kitchen: true,
    livingRoom: false,
    bathroom: true,
    bedroom: false,
  }

  render() {
    return (
      <div>
        <LightSwitch />
        <span>The light is currently __</span>
      </div>
    )
  }
}

function LightSwitch() {
  return (
    <button>Flip light switch</button>
  )
}

ReactDOM.render(<House />, document.querySelector('#root'))
