import React from 'react'
import ReactDOM from 'react-dom'

class CountingParent extends React.Component {
  state = {
    buttonCount: 0,
  }

  handleAction = () => {
    this.setState((state) => { return { buttonCount: state.buttonCount + 1 } })
    this.setState((state) => { return { buttonCount: state.buttonCount + 2 } })
  }

  reset = () => {
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
