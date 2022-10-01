import React from 'react'
import './REG_HEADER.css'
import {Select,MenuItem ,Button,createTheme ,ThemeProvider} from '@mui/material'
import {blue} from '@mui/material/colors'
import Logo from '../Assests/MRC PNG.png'
function REG_HEADER() {

  return (
    <div className='reg-header'>
      <div className='blur-head'>
        <img id='reg-logo' src={Logo}></img>
        <div className='header-texts'>
            <h2 id='welcome-header'>Welcome !</h2>
            <p>This is mahindian's broadcasting unit Registration form.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
        </div> 
      </div>
    </div>
  )
} 

export default REG_HEADER