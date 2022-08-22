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
    return (
      <>
        <div>kitchen</div>
        <span>light {}</span>
        <button>Flip switch</button>
        <div>bathroom</div>
        <button>Flip switch</button>
        <div>living room</div>
        <button>Flip switch</button>
        <div>bedroom</div>
        <button>Flip switch</button>
      </>
    )
  }
}

ReactDOM.render(<House />, document.querySelector('#root'))