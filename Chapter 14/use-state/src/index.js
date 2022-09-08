import React from 'react'
import ReactDOM from 'react-dom'

class OneTimeButton extends React.Component {
  state = { clicked: false }

  onClick = () => {
    alert('no going back now')
  }

  handleClick = () => {
    this.onClick()
    this.setState({ clicked: true })
  }

  render() {
    return (
      <button onClick={this.handleClick} disabled={this.state.clicked}>
        Click me - but only once
      </button>
    )
  }
}

function OneTimeButtonFunction() {
  const [clicked, setClicked] = React.useState(false)

  const handleClick = () => {
    alert('no going back now')
    setClicked(true)
  }

  return (
    <button onClick={handleClick} disabled={clicked}>
        Click me - but only once
    </button>
  )
}

ReactDOM.render(
  <OneTimeButtonFunction />,
  document.querySelector('#root')
)