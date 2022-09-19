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

const TrickInput = () => {
  const [text, setText] = useState('try typing something')

  const handleChange = () => {
    setText('sike!')
  }

  return <input type="text" value={text} onChange={handleChange} />
}

const NoNumbersInput = () => {
  const [text, setText] = useState('')

  const handleChange = (event) => {
    const text = event.target.value
    setText(text.replace(/[0-9]/g, '')) // no flickering!
  }

  return <input type="text" value={text} onChange={handleChange} />
}

ReactDOM.render(
  <NoNumbersInput />,
  document.querySelector('#root')
)
