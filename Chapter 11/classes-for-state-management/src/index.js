import React from 'react'
import ReactDOM from 'react-dom'

// function handleAction(event) {
//   console.log('Child did:', event)
// }

// function Parent() {
//   return <Child onAction={handleAction} />
// }

// // class method with constructor and non-arrow function
// class CountingParent extends React.Component {
//   constructor() {
//     super()

//     this.state = {
//       actionCount: 0,
//     }

//     this.handleAction = this.handleAction.bind(this)
//     this.resetAction = this.resetAction.bind(this)
//   }

//   handleAction(action) {
//     // async setState - bad; do not use as any further calls to this.state might be stale
//     // this.setState({
//     //   actionCount: this.state.actionCount + 1,
//     // })

//     // sequential setState - good when you want to act immediately on the change; the callback is executed immediately
//     // this.setState({actionCount: this.state.actionCount + 1}, function() {
//     // console.log(this.state)
//     // })

//     // sequential setState - preferred as it makes sequential state updates run in sequence - props is optional if you don't have any
//     // this.setState((state, props) => {
//     //   return {
//     //     actionCount: state.actionCount + 1
//     //   }
//     // })


//     // //some weirdness with async setState
//     // console.log(this.state)

//     // this.setState({
//     //   actionCount: this.state.actionCount + 1,
//     // })

//     // console.log(this.state)

//     // this.setState({
//     //   actionCount: this.state.actionCount + 1,
//     // })

//     // console.log(this.state)

//     // this.setState({
//     //   actionCount: this.state.actionCount + 1,
//     // })

//     // console.log(this.state)

//     // // setStates become sequential when called with a function
//     // console.log(this.state)

//     // this.setState((state, props) => {
//     //   return {
//     //     actionCount: state.actionCount + 1
//     //   }
//     // })

//     // console.log(this.state)

//     // this.setState((state, props) => {
//     //   return {
//     //     actionCount: state.actionCount + 1
//     //   }
//     // })

//     // console.log(this.state)

//     // this.setState((state, props) => {
//     //   return {
//     //     actionCount: state.actionCount + 1
//     //   }
//     // })

//     // console.log(this.state)

//     // // same experiment with the other syntax - not good for multiple changes
//     // this.setState({actionCount: this.state.actionCount + 1}, function() {
//     // console.log(this.state)
//     // })

//     // console.log(this.state)

//     // this.setState({actionCount: this.state.actionCount + 1}, function() {
//     // console.log(this.state)
//     // })

//     // console.log(this.state)

//     // this.setState({actionCount: this.state.actionCount + 1}, function() {
//     // console.log(this.state)

//     // console.log(this.state)
//     // })


//     // increase cont by 1 using the preferred syntax
//     this.setState((state, props) => {
//       return {
//         actionCount: state.actionCount + 1
//       }
//     })
//   }

//   resetAction(action) {
//     this.setState({
//       actionCount: 0,
//     })
//   }

//   render() {
//     return (
//       <div>
//         <Child onAction={this.handleAction} onReset={this.resetAction} />
//         <p>Clicked {this.state.actionCount} times</p>
//       </div>
//     )
//   }
// }


// preferred way of writing a classical component - no constructor (property initializer) and using arrow functions to maintain the 'this' binding between renders
class CountingParent extends React.Component {
  state = {
    actionCount: 0,
  }

  handleAction = (action) => {
    this.setState({
      actionCount: this.state.actionCount + 1,
    })
  }

  resetAction = (action) => {
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
