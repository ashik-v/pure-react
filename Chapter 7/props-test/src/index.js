import React from 'react'
import ReactDOM from 'react-dom'

const HelloWorld = (props) => <div>{props.prop1}</div>;

ReactDOM.render(<HelloWorld prop1="1" prop2="2"/>, document.querySelector('#root'))