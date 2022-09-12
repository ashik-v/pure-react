import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

function RandomList() {
  const [items, setItems] = React.useState([])

  const addItem = () => {
    setItems((items) => {
      return(
        [
          ...items,
          {
            id: items.length,
            value: Math.random() * 100
          }
        ]
      )
    })
  }

  return(
    <>
      <button onClick={addItem}>Add an item to the list</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </>
  )
}

root.render(
  <RandomList />
)
