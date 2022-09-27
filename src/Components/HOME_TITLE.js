import React from 'react'
import './HOME_TITLE.css'
import Logo from '../Assests/MRC PNG.png'

function HOME_TITLE() {
  return (
    <div className='title-container'>
      <img src={Logo} alt={'Logo'}></img>
      <h1>Media And Broadcasting Unit,</h1>
      <h1>Database Management System.</h1>
      <p>Mahinda Rajapaksha College Pitipana.</p>
    </div>
  )
}

export default HOME_TITLE