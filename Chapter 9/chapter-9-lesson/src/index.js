import React from 'react'
import ReactDOM from 'react-dom'

const NavBar = () => {
  return (
    <>
      <NavBarItem>Home</NavBarItem>
      <NavBarItem>Contact</NavBarItem>
      <NavBarItem>About</NavBarItem>
    </>
  )
}

const NavBarItem = ({children}) => {
  return <a href={`/${children}`}>{children} | </a>
}
ReactDOM.render(<NavBar />, document.querySelector('#root'))