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

const RadioButtonForm = () => {
  const [letter, setLetter] = useState('')

  const handleChange = () => {
    setLetter(event.target.value)
  }

  return (
    <form>
      <input
        type="radio"
        value="a"
        checked={letter === 'a'}
        onChange={handleChange}
      />
      <input
        type="radio"
        value="b"
        checked={letter === 'b'}
        onChange={handleChange}
      />
      <input
        type="radio"
        value="c"
        checked={letter === 'c'}
        onChange={handleChange}
      />
    </form>
  )
}

const PizzaForm = () => {
  const [formState, setFormState] = useState({
    size: '',
    topping: 'pepperoni',
    glutenFree: false,
    notes: ''
  })

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.id]: event.target.value
    })
  }

  const handleCheck = () => {
    setFormState({
      ...formState,
      [event.target.id]: !formState[event.target.id]
    })
  }

  const handleSubmit = () => {
    const glutenFree = formState.glutenFree ? ' gluten-free ' : ' '
    alert(`you are ordering a ${formState.size}${glutenFree}${formState.topping} pizza. We will try our best to make it ${formState.notes}`)
  }

  return(
    <>
      <div>Order your pizza</div>
      <div>Size
        <input
          id="size"
          type="radio"
          value="small"
          onChange={handleChange}
          checked={formState['size'] === 'small'}
        />
        <label>Small</label>
        <input
          id="size"
          type="radio"
          value="medium"
          onChange={handleChange}
          checked={formState['size'] === 'medium'}
        />
        <label>Medium</label>
        <input
          id="size"
          type="radio"
          value="large"
          onChange={handleChange}
          checked={formState['size'] === 'large'}
        />
        <label>Large</label>
      </div>
      <div>Topping:
        <select id="topping" onChange={handleChange}>
          <option
            id="topping"
            value="pepperoni"
          >Pepperoni</option>
          <option
            id="topping"
            value="cheese"
          >Cheese</option>
        </select>
      </div>
      <div>Gluten free:
        <input
          type="checkbox"
          id="glutenFree"
          checked={formState.glutenFree}
          onChange={handleCheck}
        />
      </div>
      <div>Special instructions:
        <input
          id="notes"
          value={formState.notes}
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
    )
}

root.render(<PizzaForm />)
