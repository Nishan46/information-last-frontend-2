import React from 'react'
import './DROPDOWN.css'

function DROPDOWN(props) {
  if(window.outerWidth < 550)
    {
        return (
          <button onClick={props.onClick} className='drop-downContainer'>
              <span></span>
              <span></span>
              <span></span>
          </button>
      )
    }
    else if(window.outerWidth > 550 && window.outerHeight < window.outerWidth)
    {
      return (
        <button onClick={props.onClick} className='drop-downContainer'>
            <span></span>
            <span></span>
            <span></span>
        </button>
      )
    }
}

export default DROPDOWN