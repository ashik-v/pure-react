import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

const LogEffect = () => {
  const [text, setText] = useState('')
  useEffect(
    () => {
      console.log('the latest value is:', text) // run this effect every time there is a new render (change to the state)
      return () => console.log('clean up') // called when the component unmounts or before the effect is called; not called during mount
    }
  )

  return <input value={text} onChange={(e) => setText(e.target.value)} /> // controlled input
}

// if you want to limit when an effect runs, pass in an array of dependencies as the second argument to useEffect
const LogEffectOnMountOnly = () => {
  const [text, setText] = useState('')
  useEffect(
    () => console.log('the latest value is:', text),
    [] // empty array means that the effect runs only during the mounting (this behaviour cannot be changed)
  )

  return <input value={text} onChange={(e) => setText(e.target.value)} />
}

const LogEffectWhenPassword = () => {
  const [pass, setPass] = useState('')
  const inputRef = useRef() // this will be used to auto-focus the cursor on the input box upon render
  const [showSecretMessage, setShowSecretMessage] = useState(false)
  useEffect(
    () => {
      setShowSecretMessage(pass === 'passcode')
      console.log(inputRef.current.value)  //~ inputRef is changing
    },
    [pass] // only runs the side-effect when the 'pass' state is changed
  )
  useEffect(
    () => {
      console.log('inputRef changed?') //~but if it's changing why is this not getting rendered
      inputRef.current.focus()
    },
    [inputRef] // only runs the side-effect when 'inputRef' is changed which is never after the first render
  )

  return (
    <>
      <div>guess passcode...</div>
      <input type="text" value={pass} onChange={(e) => setPass(e.target.value)} ref={inputRef}/>
      {showSecretMessage && <div>Secret revealed!</div>}
    </>
  )
}

const LogEffectWhenPasswordTerse = () => {
  const [pass, setPass] = useState({ enteredValue: '', showSecret: false})
  useEffect(
    () => {
      if(pass.enteredValue === 'passcode') {
        setPass({...pass, showSecret: true})
      }
    },
    [pass]
  )

  return (
    <>
      <div>guess passcode...</div>
      <input type="text" value={pass.enteredValue} onChange={(e) => setPass({...pass, enteredValue: e.target.value})} />
      {pass.showSecret && <div>Secret revealed!</div>}
    </>
  )
}

const Reddit = ({subreddit}) => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then((res) => res.json())
      .then((json) => setPosts(json.data.children.map((c) => c.data))
    )
  })

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

const App = () => {
  const [state, setState] = useState({ loading: false, subreddit: 'personalfinance'})
  const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setState({ loading: false, subreddit: inputRef.current.value })
    inputRef.current.value = ''
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      {state.loading ? <div>Loading...</div> : <Reddit subreddit={state.subreddit} />}
    </>)
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
