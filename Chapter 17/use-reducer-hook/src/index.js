import React, { useReducer, useRef } from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const ShoppingList = () => {
  const reducer = (input) => {
    switch(input.action) {
      case 'add':
        return [
          ...items,
          {
            id: items.length,
            itemName: input.value
          }
        ]
    }
  }

  const [items, dispatch] = useReducer(reducer, [])

  const itemRef = useRef()

  const addItem = () => {
    dispatch({ action: 'add', value: itemRef.current.value})
  }

  return (
    <>
      Shopping List:
      <form onSubmit={addItem} >
        <input ref={itemRef} />
      </form>
      <ul>
        {items.map((item, index) => (
          <li id={index}>{item.label}</li>
        ))}
      </ul>
    </>
  )
}

root.render(
  <ShoppingList />
)
