import {React, useState} from 'react'
import './HOME_LOGIN.css'

function HOME_LOGIN() { 
  const [userName , setUsername] =useState('')
  const UpdateUserName = (event)=>{
    setUsername(event.target.value)
  }
  return (
    <div className='login-container'>
      <form className='login-items' action={`/login/login-id:${userName}`}> 
        <input className='user_text' placeholder='email or username' id='username' onChange={(event)=>{UpdateUserName(event)}}/>
        <button type='submit' className='btn-login'>LogIn</button>
      </form>
    </div>
  )
}
export default HOME_LOGIN