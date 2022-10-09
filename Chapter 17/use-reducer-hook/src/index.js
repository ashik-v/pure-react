import React, {useReducer, useState, useRef} from 'react'
import ReactDOM from 'react-dom'

// reducer in js
console.log([1, 2, 3].reduce((total, number) => total + number, 0))

// state management the conventional way
const ConventionalCounter = () => {
  const [count, setCount] =  useState(0)
  const handleAdd = () => {
    setCount((count) => count + 1)
  }
  const handleSubtract = () => {
    setCount((count) => count - 1)
  }

  return (
    <>
      Current Count: {count}
      <div>
        <button onClick={handleAdd}>Add 1</button>
        <button onClick={handleSubtract}>Subtract 1</button>
      </div>
    </>
  )
}

// state management the useReducer way
const ReducerCounter = () => {
  const reducer = (state, action) => {
    switch(action) {
      case 'add':
        return state + 1
      case 'subtract':
        return state - 1
    }
  }

  const [count, dispatch] =  useReducer(reducer, 0)
  return (
    <>
      Current Count: <span>{count}</span>
      <div>
        <button onClick={() => dispatch('add')}>Add 1</button>
        <button onClick={() => dispatch('subtract')}>Subtract 1</button>
      </div>
    </>
  )
}

const ShoppingList = () => {
  const reducer = (items, input) => {
    switch(input.action) {
      case 'add':
        return [
          ...items,
          {
            id: items.length,
            value: input.value
          }
        ]
      case 'clear':
        return []
      case 'delete':
        return items.filter((item, index) => index !== input.value)
    }
  }
  const [items, dispatch] = useReducer(reducer, [])
  const inputRef = useRef()

  const addItem = (event) => {
    event.preventDefault()
    dispatch({ action: 'add', value: inputRef.current.value })
    inputRef.current.value = ''
  }

  return (
    <>
      <div>Shopping List:</div>
      <form onSubmit={addItem}>
        <input type="text" ref={inputRef}/>
      </form>
      <ul>
        {items.map((item, index) => (
          <li id={index}>{item.value}
            <button onClick={() => dispatch({action: 'delete', value: index})}>X</button>
          </li>
        ))}
      </ul>
      {items.length > 0 && <button onClick={() => dispatch({action: 'clear'})}>Clear list</button>}
    </>
  )
}

const Room = () => {
  const LIGHT_SETTINGS = ['off', 'low', 'medium', 'high']
  const reducer = (lightStage, action) => {
    if(lightStage === 3) {
      return 0
    } else {
      return lightStage + 1
    }
  }
  const [lightStage, dispatch] = useReducer(reducer, 0)

  return (
    <>
      <div>The light is {LIGHT_SETTINGS[lightStage]}</div>
      <button onClick={() => dispatch()}>Flick lightswitch</button>
    </>
  )
}

ReactDOM.render(
  <Room />,
  document.querySelector('#root')
)
