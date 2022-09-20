import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

// exercise 1 - multiple controlled inputs

const Hello = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  })

  const handleChange = (event) => {
    setName({
      ...name,
      [event.target.id]: event.target.value,
    })
  }

  return (
    <>
      <input type="text" id="firstName" placeholder="first name" onChange={handleChange} />
      <input type="text" id="lastName" placeholder="last name" onChange={handleChange} />
      <div>{`Hello, ${name.firstName} ${name.lastName}`}</div>
    </>
  )
}

root.render(<Hello />)