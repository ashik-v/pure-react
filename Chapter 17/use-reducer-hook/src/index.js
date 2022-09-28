import React, {useReducer} from 'react'
import ReactDOM from 'react-dom'

// reducer in js
const adder = (total, number) => {
  return total + number
}

const numbers = [1, 2, 3]

console.log(numbers.reduce(adder, 0))

const Counter = () => {
  const [sum, dispatch] = useReducer((state, action) => {
    return state + action
  }, 0)

  return (
    <>
      {sum}
      <button onClick={() => dispatch(1)}>Add 1</button>
    </>
  )
}

ReactDOM.render(
  <Counter />,
  document.querySelector('#root')
)
