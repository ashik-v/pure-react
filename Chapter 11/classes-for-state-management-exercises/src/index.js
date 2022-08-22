import React from 'react'
import ReactDOM from 'react-dom'

function House() {
  return (
    <div>
      <Room id="kitchen" label="Kitchen" />
      <Room id="livingRoom" label="Living Room" />
      <Room id="bathroom" label="Bathroom" />
      <Room id="bedroom" label="Bedroom" />
    </div>
  )
}

class Room extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      kitchen: true,
      livingRoom: false,
      bathroom: true,
      bedroom: false,
    }
  }

  render() {
    return (
      <div>{this.props.label}
        <div>
          <LightSwitch />
          <span>The light is currently {this.state[this.props.id] ? "on" : "off"}</span>
        </div>
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
