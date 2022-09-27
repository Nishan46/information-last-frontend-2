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
        <h2 id='welcome-header'>Welcome !</h2>
        <p>This is mahindian's broadcasting unit Registration form.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ips</p>
      </div>
    </div>
  )
}

export default REG_HEADER