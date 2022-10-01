import React from 'react'
import './REG_PERSONAL.css'
import {TextField, RadioGroup ,FormControlLabel, FormControl, Button ,Alert} from '@mui/material'
import Radio from '@mui/material/Radio'
import Checkbox from '@mui/material/Checkbox';
import { useState ,useEffect } from 'react';
import BirthDay from './BirthDay'




const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const registerData = {user_name:"",first_name:"",last_name:"",admission_id:"",grade:"",full_name:"",email:"",phone:"",address:"",birthday:"",gender:""}

const categoryData = {photoghaphy:false,videography:false,technical:false,announcing:false,reporting:false,photo_editing:false,video_editing:false,graphic_design:false,web_design:false}



function REG_PERSONAL() {

  const [registerValues,setRegisterValues] = useState(registerData);
  const [categoryValues,setCategoryValues] = useState(categoryData);
  const [errorValues,setErrorValues] = useState({});
  const [isSubmitted,setIssubmitted] = useState(false);

  const HandleSubmit = (event) =>{
    event.preventDefault();
    setErrorValues(validate(registerValues));
    setIssubmitted(true);
  }

  const validate = (values) =>{
    const errors = {};
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(!values.email){
      errors.email = "email required";
    }
    else if(!regex.test(values.email)){
      errors.email = "This is not a valid email format";
    }

    if(!values.first_name){
      errors.first_name = "first Name required";
    }
    if(!values.last_name){
      errors.last_name = "last Name required";
    }
    
    if(!values.full_name){
      errors.full_name = "full Name required";
    }
    
    if(!values.birthday){
      errors.birthday = "date of birth is required";
    }
    
    if(!values.address){
      errors.address = "address required";
    }
    
    if(!values.grade){
      errors.grade = "grade required";
    }
    
    if(!values.admission_id){
      errors.admission_id = "index number required";
    }
    
    if(!values.phone){
      errors.phone = "mobile required";
    }
    
    if(!values.gender){
      errors.gender = "gender required";
    }
    return errors;
  }

  
  useEffect(() => {
    if (Object.keys(errorValues).length === 0 && isSubmitted) {
      console.log(registerValues);
      console.log(categoryValues);
    }
  }, [errorValues]);

  const HandleChange = (e) =>{
    const {name , value} = e.target;
    setRegisterValues({...registerValues,[name]:value, user_name:`${registerValues.first_name.toLowerCase()}@${registerValues.admission_id}`});
    if(name === "gender")
    {
      setErrorValues({...errorValues,[name]:""})
    }else
    {
      setErrorValues({...errorValues,[name]:false})
    }
  }
  const HandleChecked = (e) =>{
    const {name, checked} = e.target;
    setCategoryValues({...categoryValues,[name]:checked});
  }

  return (
    <form onSubmit={HandleSubmit}>
          <label htmlFor='txtmail'>Email Adress</label>
          <TextField id='txtmail' name='email'  fullWidth placeholder='Email' value={registerValues.email} error={errorValues.email && true} onChange={HandleChange}/>
          {errorValues.email && <div style={{'display':'block'}} className='error-alert'><p>{errorValues.email}</p></div>}

          <label htmlFor='txtfirst'>First Name</label>
          <TextField id='txtfirst' name='first_name' placeholder='First Name' fullWidth value={registerValues.first_name} error={errorValues.first_name && true} onChange={HandleChange}/>
          {errorValues.first_name && <div style={{'display':'block'}} className='error-alert'><p>{errorValues.first_name}</p></div>}
          
          <label htmlFor='txtlast'>Last Name</label>
          <TextField id='txtlast' name='last_name' fullWidth placeholder='Last Name' value={registerValues.last_name} error={errorValues.last_name && true} onChange={HandleChange}/>
          {errorValues.last_name && <div style={{'display':'block'}} className='error-alert'><p>{errorValues.last_name}</p></div>}

          <label htmlFor='txtfull'>Full Name</label>
          <TextField id='txtfull' name='full_name' fullWidth placeholder='Full Name' value={registerValues.full_name} error={errorValues.full_name && true} onChange={HandleChange}/>
          {errorValues.full_name && <div style={{'display':'block'}} className='error-alert'><p>{errorValues.full_name}</p></div>}

          <label htmlFor='txtbirth'>Birth Day</label>

          <BirthDay value={registerValues.birthday} name='birthday' onChange={HandleChange} error={errorValues.birthday && true}/>
            {errorValues.birthday && <div style={{'display':'block','top':'-1px'}} className='error-alert'><p>{errorValues.birthday}</p></div>}
          

          <label htmlFor='txtaddress'>Address</label>
          <TextField id='txtaddress' name='address' fullWidth placeholder='Address' value={registerValues.address} error={errorValues.address && true} onChange={HandleChange}/>
          {errorValues.address && <div style={{'display':'block'}} className='error-alert'><p>{errorValues.address}</p></div>}

          <label htmlFor='txtgrade'>Grade</label>
          <TextField id='txtgrade' name='grade' fullWidth placeholder='Grade' value={registerValues.grade} error={errorValues.grade && true} onChange={HandleChange}/>
          {errorValues.grade && <div style={{'display':'block'}} className='error-alert'><p>{errorValues.grade}</p></div>}

          <label htmlFor='txtindex'>Index Number</label>
          <TextField id='txtindex' name='admission_id' fullWidth placeholder='Index Number 'value={registerValues.admission_id} error={errorValues.admission_id && true} onChange={HandleChange}/>
          {errorValues.admission_id && <div style={{'display':'block'}} className='error-alert'><p>{errorValues.admission_id}</p></div>}

          <label htmlFor='txtmobile'>Mobile Number</label>
          <TextField id='txtmobile' name='phone' fullWidth placeholder='Mobile Number 'value={registerValues.phone} error={errorValues.phone && true} onChange={HandleChange}/>
          {errorValues.phone && <div style={{'display':'block'}} className='error-alert'><p>{errorValues.phone}</p></div>}

          <label htmlFor='gndbox'>Gender</label>
          <Valid_Gender error={errorValues.gender && true} onChange={HandleChange} er={errorValues.gender}/>
          
          <label>Categories Your Interested</label>
          <div className='category-container'>
              <label><Checkbox onChange={HandleChecked} name={'photoghaphy'}   {...label}  size='small' />Photography </label>
              <label><Checkbox onChange={HandleChecked} name={'videography'} {...label}  size='small' />Videography</label>
              <label><Checkbox onChange={HandleChecked} name={'technical'} {...label}  size='small' />Technical </label>
              <label> <Checkbox onChange={HandleChecked} name={'announcing'} {...label}  size='small' />Announcing</label>
              <label> <Checkbox onChange={HandleChecked} name={'reporting'} {...label}  size='small' />Reporting</label>
              <label><Checkbox onChange={HandleChecked} name={'photo_editing'} {...label}  size='small' />Photo Editing</label>
              <label><Checkbox onChange={HandleChecked} name={'video_editing'} {...label}  size='small' />Video Editing </label>
              <label><Checkbox onChange={HandleChecked} name={'graphic_design'} {...label}  size='small' />Graphic Designing </label>
              <label><Checkbox onChange={HandleChecked} name={'web_design'} {...label}  size='small' />Web Designing </label>
          </div>
          <div className='btn-container'>
              <Button className='btnsubmit' type='submit' variant='contained'>Register</Button>
            </div>
        </form>
  )
}

const Valid_Gender = (props) =>{
  if(props.error){
    return(
      <div className='gender-container-error'>
        <FormControl>
          <RadioGroup
            row={false}
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="gender"
            onChange={props.onChange}
            error={props.er}
          >
            <FormControlLabel sx={{color:'rgb(255,0,0)'}} value="Male" control={<Radio size='small'/>} label="Male" />
            <FormControlLabel sx={{color:'rgb(255,0,0)'}} value="Female" control={<Radio size='small'/>} label="Female" />
            <FormControlLabel sx={{color:'rgb(255,0,0)'}} value="Other" control={<Radio size='small'/>} label="Other" />
          </RadioGroup>
        </FormControl>
        {props.er && <div style={{'display':'block'}} className='error-alert'><p>{props.er}</p></div>}
      </div>
    )
  }
  else{
    return(
      <div className='gender-container-normal'>
        <FormControl>
          <RadioGroup
            row={false}
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="gender"
            onChange={props.onChange}
            error={props.er}
          >
            <FormControlLabel sx={{color:'rgb(0,0,0)'}} value="Male" control={<Radio size='small'/>} label="Male" />
            <FormControlLabel  sx={{color:'rgb(0,0,0)'}} value="Female" control={<Radio size='small'/>} label="Female" />
            <FormControlLabel sx={{color:'rgb(0,0,0)'}}  value="Other" control={<Radio size='small'/>} label="Other" />
          </RadioGroup>
        </FormControl>
        {props.er && <div style={{'display':'block'}} className='error-alert'><p>{props.er}</p></div>}
      </div> 
    )
  }
}


export default REG_PERSONAL