import React from 'react'
import ReactDOM from 'react-dom'

function Person(props) {
  return (
    <>
      <div>{props.age}</div>
      <div>{props.fullName}</div>
    </>
  )
}

function Ashik() {
  const first = "Ashik"
  const last = "Varghese"

  return (
    <Person className="person" age={27} fullName={first + ' ' + last} />
  )
}

ReactDOM.render(<Ashik />, document.querySelector('#root') )