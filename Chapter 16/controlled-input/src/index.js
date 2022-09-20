import React, {useState, useRef} from 'react'
import ReactDOM from 'react-dom'

// controlled input exmaples

const SimpleControlledInput = () => {
  const [text, setText] = useState('')

  const handleChange = (event) => {
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

  const handleChange = (event) => {
    setText(event.target.value.replace(/[0-9]/g, ''))
  }

  return <input value={text} onChange={handleChange} />
}

ReactDOM.render(
  <MoreSophisticatedControlledInput />,
  document.querySelector('#root')
)
