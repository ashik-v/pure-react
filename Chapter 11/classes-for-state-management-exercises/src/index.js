import React from 'react'
import ReactDOM from 'react-dom'

class House extends React.Component {
  state = {
    kitchen: true,
    bathroom: false,
    livingRoom: true,
    bedroom: false,
  }

  render() {
    return <h1>mi casa</h1>
  }
}

ReactDOM.render(<House />, document.querySelector('#root'))