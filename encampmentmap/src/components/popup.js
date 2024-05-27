import React from 'react'

function popup() {
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn">Close</button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default popup