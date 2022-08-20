import React from 'react'
import ReactDOM from 'react-dom'

// function handleAction(event) {
//   console.log('Child did:', event)
// }

// function Parent() {
//   return <Child onAction={handleAction} />
// }

class CountingParent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      actionCount: 0,
    }

    this.handleAction = this.handleAction.bind(this)
    this.resetAction = this.resetAction.bind(this)
  }

  handleAction(action) {
    this.setState({
      actionCount: this.state.actionCount + 1,
    })
  }

  resetAction(action) {
    this.setState({
      actionCount: 0,
    })
  }

  render() {
    return (
      <div>
        <Child onAction={this.handleAction} onReset={this.resetAction} />
        <p>Clicked {this.state.actionCount} times</p>
      </div>
    )
  }
}

function Child({onAction, onReset}) {
  return (
    <>
      <button onClick={onAction}>Click me!</button>
      <button onClick={onReset}>Reset</button>
    </>
  )
}

function Page() {
  return (
    <div>
      <CountingParent />
      <CountingParent />
      <CountingParent />
    </div>
  )
}

ReactDOM.render(<Page />, document.querySelector('#root'))
