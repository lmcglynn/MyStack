import React from 'react'
import './Popup.css'
import pinIcon from '../images/pin-icon.png'

function popup(props) {
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}> <img src={pinIcon}/> Close</button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default popup