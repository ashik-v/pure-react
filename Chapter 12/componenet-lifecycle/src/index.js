import React from 'react'
import ReactDOM from 'react-dom'

class ErrorCatcher extends React.Component {
  state = {
    error: null
  }

  componentDidCatch(error, info) {
    console.log('[componentDidCatch]', error)
    this.setState({ error: info.componentStack })
  }

  render() {
    if (this.state.error) {
      return <div>An error occurred: {this.state.error}</div>
    }

    return this.props.children
  }
}

class LifecycleDemo extends React.Component {
  state = {
    counter: 0
  }

  constructor(props) {
    super(props)
    console.log('[constructor]')
    console.log(' State already set:', this.state)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[getDerivedStateFromProps]')
    console.log(' nextProps:', nextProps)
    console.log(' prevState:', prevState)

    return null
  }

  componentDidMount() {
    console.log('[componentDidMount]', 'Mounted')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[shouldComponentUpdate]', 'Deciding to update')
    console.log(' nextProps:', nextProps)
    console.log(' nextState:', nextState)

    return true
  }


  getSnapshotBeforeUpdate(nextProps, nextState) {
    console.log('[getSnapshotBeforeUpdate]')
    console.log(' nextProps:', nextProps)
    console.log(' nextState:', nextState)

    return `The time is ${Date.now()}`
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[componentDidUpdate]', 'Updated')
    console.log(' prevProps:', prevProps)
    console.log(' prevState:', prevState)
    console.log(' snapshot:', snapshot)
  }

  componentDidUnmount() {
    console.log('[componentDidUnmount]', 'Bye bye')
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  handleDestroy = () => {
    this.setState({ causeError: true })
  }

  render() {
    console.log('[render]')

    if (this.state.causeError) {
      throw new Error('you caused an error!')
    }

    return(
      <div>
        <div>Counter: {this.state.counter}</div>
        <button onClick={this.handleClick}>Click to increment counter</button>
        <button onClick={this.handleDestroy}>Cause error</button>
      </div>
    )
  }
}

ReactDOM.render(
  <ErrorCatcher>
    <LifecycleDemo />
  </ErrorCatcher>,
  document.querySelector('#root')
)
