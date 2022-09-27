import React from 'react'
import './BirthDay.css'

function BirthDay(props) {
  if(props.error == true)
  {
    return <Error_oc onChange={props.onChange} name={props.name} type="date" value={props.value}/>
  }
  else
  {
    return <Normal_oc onChange={props.onChange} name={props.name} type="date" value={props.value}/>
  }
}

function Error_oc(props){
  return(
    <div className='birth-container-error'>
      <div className='birthday-error'>
          <input onChange={props.onChange} name={props.name} type="date" value={props.value}/>
      </div>
    </div>     
  )
}
function Normal_oc(props){
  return(   
    <div className='birth-container-normal'>
      <div className='birthday-normal'>
          <input onChange={props.onChange} name={props.name} type="date" value={props.value}/>
      </div>
    </div>  
  )
}

export default BirthDay