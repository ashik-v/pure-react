import React, { useReducer, useRef } from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const ShoppingList = () => {
  const reducer = (items, input) => {
    switch(input.action) {
      case 'add':
        return [
          ...items,
          {
            id: items.length,
            itemName: input.value
          }
        ]
      case 'delete':
        return items.filter((item, index) => item.id !== input.value )
      case 'clear':
        return []
    }
  }

  const [items, dispatch] = useReducer(reducer, [])

  const itemRef = useRef()

  const addItem = (event) => {
    event.preventDefault()
    dispatch({ action: 'add', value: itemRef.current.value})
    itemRef.current.value = ''
  }

  return (
    <>
      Shopping List:
      <form onSubmit={addItem} >
        <input ref={itemRef} />
      </form>
      {items.length > 0 &&
        <div>
          <ul>
          {items.map((item, index) => (
            <li key={index}>{item.itemName}
              <button onClick={() => dispatch({action: 'delete', value: item.id})}>X</button>
            </li>
          ))}
          </ul>
          <button onClick={() => dispatch({action: 'clear'})}>Clear</button>
        </div>
      }
    </>
  )
}

root.render(
  <ShoppingList />
)
