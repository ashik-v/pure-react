import React, {useReducer, useState, useRef} from 'react'
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
        return state + 1 // the return value is the value of the new state
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

const ShoppingList = () => {
  const reducer = (state, action) => {
    switch(action.type) {
      case 'add':
        return [
          ...state,
          {
            id: state.length,
            name: action.name
          }
        ];
      case 'remove':
        return state.filter((_, index) => index !== action.index)
      case 'clear':
        return [];
      default:
        return state;
    }
  }

  const inputRef = useRef();
  const [items, dispatch] = useReducer(reducer, [])

  const handleSubmit = (e) => {
    e.preventDefault(); // this prevents the form from re-rendering
    dispatch({
      type: 'add',
      name: inputRef.current.value
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <button onClick={() => dispatch({type: 'clear'})}>Clear list</button>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => dispatch({type: 'remove', index})}>X</button>
          </li>
        ))}
      </ul>
    </>
  )
}

ReactDOM.render(
  <ShoppingList />,
  document.querySelector('#root')
)
