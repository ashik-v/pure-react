import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

function House() {
  return (
    <div>
      <Room id="kitchen" label="Kitchen"/>
      <Room id="livingRoom" label="Living Room"/>
      <Room id="bedroom" label="Bedroom"/>
      <Room id="bathoom" label="Bathroom"/>
    </div>
  )
}

class Room extends React.Component {
  state = {
    kitchen: false,
    livingRoom: true,
    bedroom: false,
    bathroom: true,
  }

  render() {
    return (
      <>
        <div>This is the {this.props.label}</div>
        <Lightswitch />
        <span>The light is {this.state[this.props.id] ? "on" : "off" }</span>
      </>
    )
  }
}

function Lightswitch() {
  return <button>Lightswitch</button>
}

root.render(<House />)