import React, {useState, useRef} from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

// exercise 1 - multiple controlled inputs

const Hello = () => {
  const [name, setName] = useState({
    firstName: '',
    lastName: '',
  })

  const handleChange = () => {
    setName({
      ...name,
      [event.target.id]: event.target.value
    })
  }

  return (
    <>
      <input id="firstName" type="text" placeholder="first name" onChange={handleChange} />
      <input id="lastName" type="text" placeholder="last name" onChange={handleChange} />
      <div>{`Hello, ${name.firstName} ${name.lastName}`}</div>
    </>
  )
}

// exercise 2

const RefHello = () => {
  const firstName = useRef()
  const lastName = useRef()

  const handleClick = () => {
    alert(`Hello, ${firstName.current.value} ${lastName.current.value}`)
  }

  return(
    <>
      <input type="text" placeholder="first name" ref={firstName} />
      <input type="text" placeholder="last name" ref={lastName} />
      <button onClick={handleClick}>Submit</button>
    </>
  )
}

// exercise 3



root.render(<Hello />)
