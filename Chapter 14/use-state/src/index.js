import React from 'react'
import ReactDOM from 'react-dom'

class OneTimeButtonClass extends React.Component {
  state = { clicked: false }

  handleClick = () => {
    this.props.onClick()
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

function OneTimeButtonFunction({onClick}) {
  const [clicked, setClicked] = React.useState(false)

  const handleClick = () => {
    onClick()
    setClicked(true)
  }

  return (
    <button onClick={handleClick} disabled={clicked}>
        Click me - but only once
    </button>
  )
}

ReactDOM.render(
  <OneTimeButtonFunction onClick={() => alert('no going back now')}/>,
  document.querySelector('#root')
)