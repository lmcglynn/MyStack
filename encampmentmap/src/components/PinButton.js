import React from 'react'
import Pin from './Pin'
import './PinButton.css'

function PinButton(props) {
  return (
  <div className='container' onClick={props.onClick}>
    <Pin name="props.name" />
  </div>
  )
}

export default PinButton