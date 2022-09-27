import { ColorRing } from 'react-loader-spinner'
import {React ,useEffect, useState} from 'react'
import './LOADER.css'

function LOADER(props) {

  const [show , setShow] = useState('visible')
  useEffect(()=>{
    
    if(props.show){
      
      setShow('visible')
    }
    else{
      setShow('hidden')
    }
  },[props])

  return (
    <div className='loader-container' style={{visibility:`${show}`}}>
        <ColorRing
        visible={true}
        height="150"
        width="150"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
    </div>
  )
}

export default LOADER