import React from 'react'
import ReactDOM from 'react-dom'

class CountingParent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      buttonCount: 0,
    }

    this.handleAction = this.handleAction.bind(this)
    this.reset = this.reset.bind(this)
  }

  handleAction() {
    this.setState((state) => { return { buttonCount: state.buttonCount + 1 } })
    this.setState((state) => { return { buttonCount: state.buttonCount + 2 } })
  }

  reset() {
    this.setState(() => { return { buttonCount: 0 } })
  }

  render() {
    return (
      <div>
        <CountedChild onClick={this.handleAction} onReset={this.reset}/>
        <p>Button click count: {this.state.buttonCount}</p>
      </div>
    )
  }
}

function CountedChild({onClick, onReset}) {
  return(
    <>
      <button onClick={onClick}>Click Me!</button>
      <button onClick={onReset}>Reset counter</button>
    </>
  )
}

ReactDOM.render(<CountingParent />, document.querySelector('#root'))
