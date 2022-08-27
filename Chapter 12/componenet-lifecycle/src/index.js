import React from 'react'
import ReactDOM from 'react-dom'

class ErrorCatcher extends React.Component {
  state = { error: null }

  componentDidCatch(error, info) {
    console.log('[componentDidCatch]', error)
    this.setState( () => { return { error: info.componentStack } } )
  }

  render() {
    if (this.state.error) {
      return <div>An error occurred: {this.state.error}</div>
    }

    return this.props.children
  }
}

class LifecycleDemo extends React.Component {
  state = { count: 0 }

  constructor(props) {
    super(props)
    console.log('[constructor]')
    console.log('   state already set', this.state)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[getDerivedStateFromProps]')
    console.log('   nextProps', nextProps)
    console.log('   prevState', prevState)

    return null
  }

  render() {
    console.log('[render]')
    if (this.state.causeError) {
      throw new Error('you caused an error!')
    }

    return (
      <div>
        <div>Clicks so far: {this.state.count}</div>
        <button onClick={this.handleClick}>Click me!</button>
        <button onClick={this.handleError}>Cause error!</button>
      </div>
    )
  }

  componentDidMount() {
    console.log('[componentDidMount]')
    console.log('   Mounted.')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[shouldComponentUpdate]')
    console.log('   Deciding to update...')

    return true
  }

  getSnapshotBeforeUpdate(nextProps, nextState) {
    console.log('[getSnapshotBeforeUpdate]')

    return 'something useful from previous state'
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[componentDidUpdate]')
    console.log('   Updated.')
    console.log('   snapshot:', snapshot)
  }

  componentWillUnmount() {
    console.log('[componentWillUnmount')
    console.log('   Unmounted.')
  }

  handleClick = () => {
    this.setState( () => { return { count: this.state.count + 1 } } )
  }

  handleError = () => {
    this.setState( () => { return { causeError: true } } )
  }
}

ReactDOM.render(
  <ErrorCatcher>
    <LifecycleDemo />
  </ErrorCatcher>
  , document.querySelector('#root ')
)