import React from 'react'
import pinIcon from '../images/pin-icon.png'

function Pin() {
  return (
    <div className="Pin">
        <button className="Pin-Button" onClick={() => props.setTrigger(false)}> <img src={pinIcon} alt={"altText"} className="pin-icon" /> </button>
    </div>
  )
}

export default Pin