import React from 'react'
import ReactDOM from 'react-dom'

class ErrorCatcher extends React.Component {
  state = { error: null }

  componentDidCatch(error, info) {
    console.log('[componentDidCatch]')
    console.log('   error:', error)
    this.setState( { error: info.componentStack } )
  }

  render() {
    if (this.state.error) {
      return <div>An error occurred {this.state.error}</div>
    }

    return this.props.children
  }
}

class LifecycleDemo extends React.Component {
  state = { count: 0 }

  constructor(props) {
    super(props)
    console.log('[constructor]')
    console.log('   state:', this.state)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[getDerivedStateFromProps]')
    console.log('   nextProps', nextProps)
    console.log('   prevState', prevState)

    return null
  }

  componentDidMount() {
    console.log('[componentDidMount]')
    console.log('   Mounted')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[shouldComponentUpdate]')
    console.log('   nextProps', nextProps)
    console.log('   nextState', nextState)

    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[getSnapshotBeforeUpdate]')
    console.log('   prevProps', prevProps)
    console.log('   prevState', prevState)

    return 'a snapshot'
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[componentDidUpdate]')
    console.log('   prevProps', prevProps)
    console.log('   prevState', prevState)
    console.log('   snapshot:', snapshot)
  }

  componentWillUnmount() {
    console.log('[componentWillUnmount]')
    console.log('   Unmounted')
  }

  handleClick = () => {
    this.setState( (state) => { return { count: state.count + 1 } })
  }

  throwError = () => {
    this.setState( (state) => { return { throwError: true } })
  }

  render() {
    console.log('[render]')
    if (this.state.throwError) {
      throw new Error('threw an error!')
    }
    return (
      <>
        <div>Current count: {this.state.count}</div>
        <button onClick={this.handleClick}>Increment count</button>
        <button onClick={this.throwError}>Throw an error</button>
      </>
    )
  }
}

ReactDOM.render(
  <ErrorCatcher>
    <LifecycleDemo />
  </ErrorCatcher>,
  document.querySelector('#root')
)