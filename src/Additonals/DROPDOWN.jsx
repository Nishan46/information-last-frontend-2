import React from 'react'
import './DROPDOWN.css'

function DROPDOWN(props) {
  return (
    <button onClick={props.onClick} className='drop-downContainer'>
        <span></span>
        <span></span>
        <span></span>
    </button>
  )
}

export default DROPDOWN