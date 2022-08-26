import React from 'react'
import ReactDOM from 'react-dom'

class ErrorCatcher extends React.Component {
  state = { error: null }

  // called if a child component (or any of it's children) throw an error
  // use this method to set error boundaries in your app
  // note: not called when the throw happens inside this component (i.e only catches children's / grandchildren's errors)
  componentDidCatch(error, info) {
    console.log('[componentDidCatch]', error)
    this.setState({ error: info.componentStack})
  }

  render() {
    if (this.state.error) {
      return <div>An error occured: {this.state.error}</div>
    }
    return this.props.children
  }
}

class LifecycleDemo extends React.Component {
  // called before the constructor
  // property initializeer sets the initial state
  state = { counter: 0 }

  constructor(props) {
    super(props)
    console.log('[constructor]')
    console.log(' State already set:', this.state)
  }

  // called immediately after the first render
  // use this if you need to fetch data or do something "before" the component renders (ex: loading indicator)
  // note: componentWillMount is deprecated - use that code in here if you come across it
  componentDidMount() {
    console.log('[componentDidMount]', 'Mounted')
  }

  // note: the above mounting methods are called only once, when the component mounts

  // used to change the state based on props; static so no access to this
  // return an object instead for state
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[getDerivedStateFromProps]')
    console.log(' Next props:', nextProps)
    console.log(' Prev state:', prevState)
    return null
  }

  // decides if a render is needed; here you can prevent rendering if the state/props have not changed
  // return false to skip the remaining lifecycle methods
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[shouldComponentUpdate]', 'Deciding to update')
    return true
  }

  // tracks previous state / props after render but before the changes are committed to the DOM
  // returning anything here is passed to the componentDidUpdate function as the snapshot argument
  getSnapshotBeforeUpdate(nextProps, prevState) {
    console.log('[getSnapshotBeforeUpdate]', 'About to update...')
    return `Time is ${Date.now()}`
  }

  // called after render and DOM changes; can operate on the DOM here if needed
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[componentDidUpdate]', 'Updated')
    console.log(' snapshot:', snapshot)
  }

  // called when the component is about to be unmounted
  // perform clean up here (clear event listeners, any timers etc.)
  // not called if the component was never fully mounted (eg: had errors when rendering)
  componentWillUnmount() {
    console.log('[componentWillUnmount]', 'Goodbye cruel world')
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  causeErrorNextRender = () => {
    this.setState({
      causeError: true,
    })
  }

  render() {
    console.log('[render]')
    if (this.state.causeError) {
      throw new Error('oh no!')
    }

    return(
      <div>
        <div>Counter: {this.state.counter}</div>
        <button onClick={this.handleClick}>Click to increment</button>
        <button onClick={this.causeErrorNextRender}>Throw an error</button>
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