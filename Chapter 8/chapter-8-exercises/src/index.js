import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// exercise 1
const Envelope = ({toPerson, fromPerson}) => (
  <div className='envelope'>
    <div className='sender'>
      <Address person={fromPerson} />
    </div>
    <div className='receiver'>
      <Address className='receiver' person={toPerson} />
    </div>
    <div className='stamp'>
      <Stamp className='stamp'/>
    </div>
  </div>
)

const Address = ({person}) => (
  <div>
    <div>{person.name}</div>
    <div>{person.address}</div>
    <div>{person.address2}</div>
  </div>
)

const Stamp = () => <div>Stamp</div>

const toPerson = {
  name: 'Michelle Hudson',
  address: '42 Wallaby Way',
  address2: 'Sydney, Australia'
}

const fromPerson = {
  name: 'Ashik Varghese',
  address: '42 Wallaby Way',
  address2: 'Sydney, Australia'
}

ReactDOM.render(<Envelope toPerson={toPerson} fromPerson={fromPerson} />, document.querySelector('#root'))