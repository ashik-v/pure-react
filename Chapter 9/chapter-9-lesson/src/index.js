import React from 'react'
import ReactDOM from 'react-dom'

const NavBar = () => {
  return (
    <Nav>
      <NavBarItem url="/">Home</NavBarItem>
      <NavBarItem url="/about">About</NavBarItem>
      <NavBarItem url="/contact">Contact</NavBarItem>
    </Nav>
  )
}

const Nav = ({children}) => {
  let items = React.Children.toArray(children)

  for(let i = 1; i < items.length; i+=2) {
    items.splice(
      i,
      0,
      <span> | </span>
    )
  }

  return <div>{items}</div>
}

const NavBarItem = ({url, children}) => <a href="{url}">{children}</a>

ReactDOM.render(<NavBar />, document.querySelector('#root'))