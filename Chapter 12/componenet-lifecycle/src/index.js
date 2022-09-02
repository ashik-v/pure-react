import React from 'react'
import ReactDOM from 'react-dom'

class ErrorCatcher extends React.Component {
  state = { error: false }

  componentDidCatch(error, info) {
    console.log('[componentDidCatch]')
    console.log(' error', error)
    this.setState({error: info.componentStack})

  }

  render() {
    if (this.state.error) {
      return <div>The error is:{this.state.error}</div>
    }

    return this.props.children
  }
}

class LifecycleDemo extends React.Component {
  state = { count: 0 }

  constructor(){
    super()
    console.log('[constructor]')
    console.log(' state already defined', this.state)
  }

  static getDerivedStateFromProps(prevState, nextProps){
    console.log('[getDerivedPropsFromState]')
    console.log(' prevState', prevState)
    console.log(' nextProps', nextProps)

    return null
  }

  componentDidMount(){
    console.log('[componentDidMount]')
  }

  shouldComponentUpdate(x, y){
    console.log('[shouldComponentUpdate]')
    console.log(' x', x)
    console.log(' y', y)

    return true
  }

  getSnapshotBeforeUpdate(x, y){
    console.log('[getSnapshotBeforeUpdate]')
    console.log(' x', x)
    console.log(' y', y)

    return 'something useful'
  }

  componentDidUpdate(x, y, snapshot){
    console.log('[componentDidUpdate]')
    console.log(' x', x)
    console.log(' y', y)
    console.log(' snapshot', snapshot)
  }

  componentWillUnmount() {
    console.log('[componentWillUnmount]')
    console.log(' fin.')
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 })
  }

  throwError = () => {
    this.setState( { throwError: true })
  }

  render() {
    console.log('[render]')
    if (this.state.throwError) {
      throw new Error('throwing error')
    }

    return (
      <div>
        <div>Current count: {this.state.count}</div>
        <button onClick={this.handleClick}>Increment count</button>
        <button onClick={this.throwError}>Throw error</button>
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