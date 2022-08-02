import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const ErrorBox = ({children}) => <div className="alert">{children}</div>

ReactDOM.render(<ErrorBox>Something has gone wrong</ErrorBox>, document.querySelector('#root'))