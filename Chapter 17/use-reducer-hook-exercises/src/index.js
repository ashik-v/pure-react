import React, {useReducer, useRef, useState} from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const Room = () => {
  const LIGHT_SETTINGS = ['off', 'low', 'medium', 'high']

  const reducer = (state, action) => {
    console.log(state)
    switch(action.type) {
      case 'increment':
        if(state > 2) { // doing state > 3 leads to a blank render - why?
          return 0
        } else {
          return state + 1
        }
      case 'off':
        return 0
      default:
        return state
    }
  }


  const [lightLevel, dispatch] = useReducer(reducer, 0)

  return (
    <>
      <button onClick={() => dispatch({type: 'increment'})}>Change light level</button>
      <button onClick={() => dispatch({type: 'off'})}>Turn light off</button>
      <div>{LIGHT_SETTINGS[lightLevel]}</div>
    </>
  )
}

const Keypad = () => {
  const PASSWORD = '123456'

  const reducer = (state, action) => {
    const enteredPassword = state + action.value;
    if(enteredPassword == PASSWORD) {
      return 'correct'
    } else {
      return state + action.value
    }
  }

  const [password, dispatch] = useReducer(reducer, '')

  return (
    <>
      <button onClick={() => dispatch({value: 1})}>1</button>
      <button onClick={() => dispatch({value: 2})}>2</button>
      <button onClick={() => dispatch({value: 3})}>3</button>
      <button onClick={() => dispatch({value: 4})}>4</button>
      <button onClick={() => dispatch({value: 5})}>5</button>
      <button onClick={() => dispatch({value: 6})}>6</button>
      <div>{password === 'correct' ? 'unlocked' : 'locked' }</div>
    </>
  )
}

const ShoppingList = () => {
  const inputRef = useRef()

  const reducer = (state, action) => {
    switch(action.type) {
      case 'add':
        return [
          ...state,
          {
            id: state.length,
            name: action.name
          }
        ]
      case 'delete':
        return state.filter((item, index) => index !== action.id)
      case 'clear':
        return []
      default:
        return state
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'add', name: inputRef.current.value})
    inputRef.current.value = ''
  }

  const [items, dispatch] = useReducer(reducer, [])
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <div> Shopping List:
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}
              <button onClick={() => dispatch({type: 'delete', id: item.id})}>X</button>
            </li>
          ))}
        </ul>
      </div>
      {items.length > 0 && <button onClick={() => dispatch({type: 'clear'})}>Clear List</button>}
    </>
  )
}

root.render(
  <ShoppingList />
)