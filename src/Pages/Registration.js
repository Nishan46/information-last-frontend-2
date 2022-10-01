import React from 'react'
import './Registration.css'
import REG_HEADER from '../Components/REG_HEADER'
import REG_PERSONAL from '../Components/REG_PERSONAL'
import REG_Photography from '../Components/REG_Photography'
import REG_Technical from '../Components/REG_Technical'
import REG_Announcing from '../Components/REG_Announcing'
import REG_Photoed from '../Components/REG_Photoed'
import REG_Videoed from '../Components/REG_Videoed'
import REG_Graphic from '../Components/REG_Graphics'
import { Button } from '@mui/material'
import LOADER from '../Additonals/LOADER'
function Registration() {
  return (
    <div className='reg-body'>
      {/* <LOADER show={true}/> */}
      <div className='reg-heading'>
        <REG_HEADER/>
      </div>
      <div className='personals'>
        <div className='reg-form'>
          <div className='form-data'>
            <REG_PERSONAL/>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Registration 