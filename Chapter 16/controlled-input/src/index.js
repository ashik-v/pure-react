import React, {useState} from 'react'
import ReactDOM from 'react-dom'

// examples of controlled inputs - controlled as you are responsible for controlling their state

const InputExample = () => {
  const [text, setText] = useState('')

  const handleChange = () => {
    setText(event.target.value) // event.target gets the element that triggered a specific event
  }

  return <input type="text" value={text} onChange={handleChange} />
}

ReactDOM.render(
  <InputExample />,
  document.querySelector('#root')
)
