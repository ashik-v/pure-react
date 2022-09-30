import React, {useReducer, useState} from 'react'
import ReactDOM from 'react-dom'

// reducer in js
function adder(total, number) {
  return number + total
}

console.log([1, 2, 3].reduce(adder, 0))

const ConventionalCounter = () => {

  const [number, setNumber] = useState(0) // state is defined

  const addOne = () => setNumber(number + 1) // setNumber is a rather simple function that only does one thing to the state

  const removeOne = () => setNumber(number - 1) // if there was another action to be done, you'd need another onClick handler

  return (
    <>
      <div>{number}</div>
      <button onClick={addOne}>Add 1</button>
      <button onClick={removeOne}>Remove 1</button>
    </>
  )
}

const ReducerCounter = () => {
  const reducer = (state, action) => {
    switch(action) {
      case 'addOne': // the reducer makes it really easy to manage actions
        return state + 1
      case 'removeOne': // you can just add a new one as needed
        return state - 1
      default:
        return state
    }
  }

  const [number, dispatch] = useReducer(reducer, 0)

  return (
    <>
      <div>{number}</div>
      <button onClick={() => dispatch('addOne')}>Add 1</button>
      <button onClick={() => dispatch('removeOne')}>Remove 1</button>
    </>
  )
}

ReactDOM.render(
  <ReducerCounter />,
  document.querySelector('#root')
)
