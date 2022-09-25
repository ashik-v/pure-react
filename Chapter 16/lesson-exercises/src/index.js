import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const Hello = () => {
  const [name, setName] = useState(
    {
      first: '',
      last: ''
    }
  )

  const handleChange = (event) => {
    setName(
      {
        ...name,
        [event.target.id]: event.target.value,
      }
    )
  }

  return(
    <>
      <input
        id="first"
        type="text"
        placeholder="first name"
        onChange={handleChange}
      />
      <input
        id="last"
        type="text"
        placeholder="last name"
        onChange={handleChange}
      />
      <div>{`Hello, ${name.first} ${name.last}`}</div>
    </>
  )
}

root.render(
  <Hello />
)