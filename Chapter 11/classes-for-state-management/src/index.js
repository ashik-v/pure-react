import React from 'react'
import ReactDOM from 'react-dom'

class CountingParent extends React.Component {
    state = {
      actionCount: 0,
    }

  handleAction = () => {
    this.setState(
      {
        actionCount: this.state.actionCount + 1
      }
    )
  }

  render() {
    return (
      <div>
        <CountedChild onAction={this.handleAction} />
        <p>Clicked {this.state.actionCount} times</p>
      </div>
    )
  }
}

function CountedChild({onAction}) {
  return <button onClick={onAction}>Click Me!</button>
}

ReactDOM.render(<CountingParent />, document.querySelector('#root'))