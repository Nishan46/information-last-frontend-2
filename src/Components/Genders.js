import React from 'react'
import './Genders.css'
import Radio from '@mui/material/Radio/Radio'
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel'

function Genders(Props) {
  return (
    <div className="gender-conts">
        <label htmlFor={Props.value} className='radio'>
            <input id={Props.value} name='Gender' type="radio" value={Props.value} />
            <span></span>
            {Props.value}
        </label>
    </div>   
  )
}

export default Genders