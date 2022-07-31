import React from 'react'
import ReactDOM from 'react-dom'

const NavBar = () => {
  return (
    <Nav>
      <NavItem url="/">Home</NavItem>
      <NavItem url="/about">About</NavItem>
      <NavItem url="/contact">Contact</NavItem>
    </Nav>
  )
}

const Nav = ({children}) => {
  let items = React.Children.toArray(children)

  for(let i = items.length - 1; i >= 1; i--) {
    items.splice(
      i,
      0,
      <span key={i} className="separator">
        |
      </span>
    )
  }
  return <div>{items}</div>
}

const NavItem = ({url, children}) => <a href={url}>{children}</a>

ReactDOM.render(<NavBar />, document.querySelector("#root"))