import React from 'react'
import ReactDOM from 'react-dom'

const House = () => {
  return(
    <>
      <Room id="kitchen" label="Kitchen" />
      <Room id="livingRoom" label="Living Room" />
      <Room id="bedroom" label="Bedroom" />
      <Room id="bathroom" label="Bathroom" />
    </>
  )
}

class Room extends React.Component {
  state = {
    kitchen: true,
    livingRoom: false,
    bedroom: true,
    bathroom: false,
  }

  handleAction = () => {
    this.setState(
      {
        [this.props.id]: !this.state[this.props.id]
      }
    )
  }

  render() {
    return (
      <div>
        <div>{this.props.label}</div>
        <span>The light is {this.state[this.props.id] ? "on " : "off "}</span>
        <LightSwitch onAction={this.handleAction}/>
      </div>
    )
  }
}

const LightSwitch = ({onAction}) => {
  return <button onClick={onAction}>Flick switch</button>
}

ReactDOM.render(<House />, document.querySelector('#root'))
