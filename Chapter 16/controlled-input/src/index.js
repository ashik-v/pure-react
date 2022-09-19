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

// examples of uncontrolled inputs - uncontrolled as it manages it's own internal state. if you're going to want to change this initial value, best to convert this to a controlled input instead

// there are two ways to get a value from an uncontrolled input
// first, set up an onChange prop
const EasyUncontrolledInput = ({placeholder, onChange}) => {
  return (
  <>
    <input type="text" placeholder={placeholder} onChange={onChange}/>
  </>
  )
}

// and the parent can be updated on any changes; similar effort to a controlled input though
const UncontrolledListener = () => {
  const [child, setChild] = useState('')

  const handleChange = (event) => {
    setChild(event.target.value)
  }

  return (
    <>
      <div>Child's value is {child}</div>
      <EasyUncontrolledInput placeholder="type here..." onChange={handleChange}/>
    </>
  )
}

// second, you can use the useRef hook which will give you access to the input's underlying DOM node

ReactDOM.render(
  <UncontrolledListener />,
  document.querySelector('#root')
)
