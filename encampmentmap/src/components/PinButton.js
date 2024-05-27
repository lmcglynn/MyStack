import React from 'react'
import Pin from './Pin'
import './PinButton.css'

function PinButton(props) {
  return (
  <div className='container'>
    <Pin name="photo1" onClick={() => alert('click')}/>
  </div>
  )
}

export default PinButton