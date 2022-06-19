import React from 'react'
import ReactDOM from 'react-dom'

function Hello(props) {
  return(
  <>
    <div>Hello!</div>
    <div>{props.alternate}</div>
  </>
  )
}

const output = <Hello alternate='Hola'/>

ReactDOM.render(output, document.querySelector('#root'))