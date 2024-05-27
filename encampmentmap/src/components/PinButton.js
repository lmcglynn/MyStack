import React from 'react'
import Pin from './Pin'
import './PinButton.css'

function PinButton(props) {
  return (
  <div className={props.name}>
    <div className='container' onClick={props.onClick}>
      <Pin name={props.name} />
    </div>
  </div>
  )
}

export default PinButton