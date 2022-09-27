import {React ,useEffect} from 'react'
import HOME_TITLE from '../Components/HOME_TITLE'
import HOME_LOGIN from '../Components/HOME_LOGIN'
import {useParams} from 'react-router-dom'
import './Home.css'


function Home() {
  var {email_id} = useParams();

  useEffect(()=>{
    document.getElementById('username').focus();
    console.log({'id':email_id});
  },[])

  return (
    <div className='home'>
        <div className='home-container'>
          <HOME_TITLE/>
          <HOME_LOGIN/> 
        </div>
    </div>
  )
}

export default Home