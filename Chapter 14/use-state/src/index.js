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

ReactDOM.render(
  <OneTimeButtonClass onClick={() => alert('no going back now')}/>,
  document.querySelector('#root')
)
