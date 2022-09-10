import React from 'react'
import ReactDOM from 'react-dom'

class OneTimeButtonClass extends React.Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: true })
    this.props.onClick()
  }

  render() {
    return <button onClick={this.handleClick} disabled={this.state.clicked}>one time click only</button>
  }
}

function OneTimeButtonFunction({onClick}) {
  const [clicked, setClicked] = React.useState(false)

  const handleClick = () => {
    setClicked(true)
    onClick()
  }

  return <button onClick={handleClick} disabled={clicked}>one time click only</button>
}

ReactDOM.render(
  <OneTimeButtonFunction onClick={() => alert('no going back now')}/>,
  document.querySelector('#root')
)
