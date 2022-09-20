import React, {useState, useRef} from 'react'
import ReactDOM from 'react-dom'

// controlled input examples

const SimpleControlledInput = () => {
  const [text, setText] = useState('')

  const handleChange = () => {
    setText(event.target.value)
  }

  return (
    <>
      <input value={text} onChange={handleChange} />
      <div>{text}</div>
    </>
  )
}

const MoreSophisticatedControlledInput = () => {
  const [text, setText] = useState('')

  const handleChange = () => {
    setText(event.target.value.replace(/[0-9]/g, ''))
  }

  return <input value={text} onChange={handleChange} />
}

// uncontrolled inputs

// simple implementation
const SimpleUncontrolledInput = () => {
  return <input placeholder="type here..." />
}

// keeping track of an uncontrolled input via props
const UncontrolledInputListener = () => {
  const [text, setText] = useState('')

  const handleChange = () => {
    setText(event.target.value)
  }

  return(
    <>
      <UncontrolledInput onChange={handleChange}/>
      <div>The child's value is {text}</div>
    </>
  )
}

const UncontrolledInput = ({onChange}) => {
  return <input onChange={onChange} />
}

// keeping track of an uncontrolled input using the useRef hook
const RefInput = () => {
  const input = useRef()

  const showRef = () => {
    alert(`The ref value is ${input.current.value}`)
  }

  return (
    <>
      <input ref={input} />
      <button onClick={showRef}>Alert the ref</button>
    </>
  )
}

ReactDOM.render(
  <RefInput />,
  document.querySelector('#root')
)
