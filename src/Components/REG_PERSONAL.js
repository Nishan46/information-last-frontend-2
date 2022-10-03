import React from 'react'
import './REG_PERSONAL.css'
import {TextField, RadioGroup ,FormControlLabel, FormControl, Button ,Alert} from '@mui/material'
import Radio from '@mui/material/Radio'
import Checkbox from '@mui/material/Checkbox';
import { useState ,useEffect } from 'react';
import BirthDay from './BirthDay'
import {useDispatch} from 'react-redux';
import { setData , setLoader} from '../Frontend/features/memberSlice';
import Language from '../Languages'
import {useSelector} from 'react-redux';
import { render } from '@testing-library/react';
import { Key } from '@mui/icons-material';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const registerData = {user_name:"",first_name:"",last_name:"",admission_id:"",grade:"",full_name:"",email:"",phone:"",address:"",birthday:"",gender:""}

const categoryData = {photoghaphy:false,videography:false,technical:false,announcing:false,reporting:false,photo_editing:false,video_editing:false,graphic_design:false,web_design:false}

function useWindowSize(){
  const [width,setWidth] = useState(window.outerWidth);
  useEffect(()=>{
    const HandleResize = ()=>{
      setWidth(window.outerWidth);
    }
    window.addEventListener("resize",HandleResize)
    return ()=>{
      window.removeEventListener("resize",HandleResize);
    }
  },[])
  return width;
}

 
function REG_PERSONAL() {
  const [registerValues,setRegisterValues] = useState(registerData);
  const [categoryValues,setCategoryValues] = useState(categoryData);
  const [errorValues,setErrorValues] = useState({});
  const [isSubmitted,setIssubmitted] = useState(false);
  const [isCategoryChoosed,setisCategoryChoosed] = useState(true);
  const currentLanguage = useSelector((state)=>state.lang.language);
  const [isGenderRow,setIsGenderRow] = useState(false);
  const innerWithh = useWindowSize();

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

  const dispatch = useDispatch();

  useEffect(() => {
    if(innerWithh >= 750){
      setIsGenderRow(true);
    }
    else{
      setIsGenderRow(false);
    }
    if (Object.keys(errorValues).length === 0 && isSubmitted && isCategoryChoosed) {
      for(let items in categoryValues)
      {
        if(categoryValues[items] === true)
        {
          dispatch(setData({isload:true ,member_data:registerValues,category_data:categoryValues}))
          setisCategoryChoosed(true);
          break;
        }
        else
        {
          setisCategoryChoosed(false);
        }
      }
    }
  }, [errorValues , innerWithh]);




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
    setisCategoryChoosed(true);
  }

  return (
    <form onSubmit={HandleSubmit}>
          <label htmlFor='txtmail'>{Language[currentLanguage].email}</label>
          <TextField id='txtmail' type={'email'} required name='email'  fullWidth placeholder={Language[currentLanguage].email}  value={registerValues.email} error={errorValues.email && true} onChange={HandleChange}/>
          {errorValues.email && <div style={{'display':'block'}} className='error-alert'><p>{errorValues.email}</p></div>}

          <label htmlFor='txtfirst'>{Language[currentLanguage].first_name}</label>
          <TextField id='txtfirst'  required name='first_name' placeholder={Language[currentLanguage].first_name}  fullWidth value={registerValues.first_name} error={errorValues.first_name && true} onChange={HandleChange}/>
          {errorValues.first_name && <div style={{'display':'block'}} className='error-alert'><p>{errorValues.first_name}</p></div>}
          
          <label htmlFor='txtlast'>{Language[currentLanguage].last_name}</label>
          <TextField id='txtlast' required name='last_name' fullWidth placeholder={Language[currentLanguage].last_name}  value={registerValues.last_name} error={errorValues.last_name && true} onChange={HandleChange}/>
          {errorValues.last_name && <div style={{'display':'block'}} className='error-alert'><p>{errorValues.last_name}</p></div>}

          <label htmlFor='txtfull'>{Language[currentLanguage].full_name}</label>
          <TextField id='txtfull' required name='full_name' fullWidth placeholder={Language[currentLanguage].full_name}  value={registerValues.full_name} error={errorValues.full_name && true} onChange={HandleChange}/>
          {errorValues.full_name && <div style={{'display':'block'}} className='error-alert'><p>{errorValues.full_name}</p></div>}

          <label htmlFor='txtbirth'>{Language[currentLanguage].birthday}</label>

          <BirthDay value={registerValues.birthday} name='birthday' onChange={HandleChange} error={errorValues.birthday && true}/>
            {errorValues.birthday && <div style={{'display':'block','top':'-1px'}} className='error-alert'><p>{errorValues.birthday}</p></div>}
          

          <label htmlFor='txtaddress'>{Language[currentLanguage].address}</label>
          <TextField id='txtaddress' required name='address' fullWidth placeholder={Language[currentLanguage].address}  value={registerValues.address} error={errorValues.address && true} onChange={HandleChange}/>
          {errorValues.address && <div style={{'display':'block'}} className='error-alert'><p>{errorValues.address}</p></div>}

          <label htmlFor='txtgrade'>{Language[currentLanguage].grade}</label>
          <TextField id='txtgrade' required name='grade' fullWidth placeholder={Language[currentLanguage].grade}  value={registerValues.grade} error={errorValues.grade && true} onChange={HandleChange}/>
          {errorValues.grade && <div style={{'display':'block'}} className='error-alert'><p>{errorValues.grade}</p></div>}

          <label htmlFor='txtindex'>{Language[currentLanguage].admission_id}</label>
          <TextField id='txtindex' required name='admission_id' fullWidth placeholder={Language[currentLanguage].admission_id} value={registerValues.admission_id} error={errorValues.admission_id && true} onChange={HandleChange}/>
          {errorValues.admission_id && <div style={{'display':'block'}} className='error-alert'><p>{errorValues.admission_id}</p></div>}

          <label htmlFor='txtmobile'>{Language[currentLanguage].phone}</label>
          <TextField id='txtmobile' required name='phone' fullWidth placeholder={Language[currentLanguage].phone} value={registerValues.phone} error={errorValues.phone && true} onChange={HandleChange}/>
          {errorValues.phone && <div style={{'display':'block'}} className='error-alert'><p>{errorValues.phone}</p></div>}

          <label htmlFor='gndbox'>{Language[currentLanguage].gender}</label>
          <Valid_Gender isGenderRow={isGenderRow} currentLanguage={Language[currentLanguage]}  error={errorValues.gender && true} onChange={HandleChange} er={errorValues.gender}/>
          
          <label>{Language[currentLanguage].Categories_Your_Interested}</label>
          <ValidCategory currentLanguage={currentLanguage} valid={isCategoryChoosed} HandleChecked={HandleChecked}/>
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
            row={props.isGenderRow}
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="gender"
            onChange={props.onChange}
            error={props.er}
          >
            <FormControlLabel sx={{color:'rgb(255,0,0)'}} value="Male" control={<Radio required size='small'/>} label={props.currentLanguage.male} />
            <FormControlLabel sx={{color:'rgb(255,0,0)'}} value="Female" control={<Radio required size='small'/>} label={props.currentLanguage.female}/>
            <FormControlLabel sx={{color:'rgb(255,0,0)'}} value="Other" control={<Radio required size='small'/>} label={props.currentLanguage.other}/>
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
            row={props.isGenderRow}
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="gender"
            onChange={props.onChange}
            error={props.er}
          >
            <FormControlLabel sx={{color:'rgb(0,0,0)'}} value="Male" control={<Radio size='small'/>} label={props.currentLanguage.male} />
            <FormControlLabel  sx={{color:'rgb(0,0,0)'}} value="Female" control={<Radio size='small'/>} label={props.currentLanguage.female} />
            <FormControlLabel sx={{color:'rgb(0,0,0)'}}  value="Other" control={<Radio size='small'/>} label={props.currentLanguage.other} />
          </RadioGroup>
        </FormControl>
        {props.er && <div style={{'display':'block'}} className='error-alert'><p>{props.er}</p></div>}
      </div> 
    )
  }
}


const ValidCategory =(props) =>{
  if(props.valid){
    return(
        <div className='category-container-normal'>
                <label><Checkbox onChange={props.HandleChecked}  name={'photoghaphy'}   {...label}  size='small' />{Language[props.currentLanguage].Photography} </label>
                <label><Checkbox onChange={props.HandleChecked}  name={'videography'} {...label}  size='small' />{Language[props.currentLanguage].Videography}</label>
                <label><Checkbox onChange={props.HandleChecked}  name={'technical'} {...label}  size='small' /> {Language[props.currentLanguage].Technical }  </label>
                <label> <Checkbox onChange={props.HandleChecked} name={'announcing'} {...label}  size='small' /> {Language[props.currentLanguage].Announcing } </label>
                <label> <Checkbox onChange={props.HandleChecked} name={'reporting'} {...label}  size='small' /> {Language[props.currentLanguage].Reporting } </label>
                <label><Checkbox onChange={props.HandleChecked} name={'photo_editing'} {...label}  size='small' /> {Language[props.currentLanguage].Photo_Editing} </label>
                <label><Checkbox onChange={props.HandleChecked} name={'video_editing'} {...label}  size='small' /> {Language[props.currentLanguage].Video_Editing}  </label>
                <label><Checkbox onChange={props.HandleChecked} name={'graphic_design'} {...label}  size='small' />{Language[props.currentLanguage].Graphic_Designing} </label>
                <label><Checkbox onChange={props.HandleChecked} name={'web_design'} {...label}  size='small' /> {Language[props.currentLanguage].Web_Designing }</label>
      </div>
    )
  }
  else
  {
    return(
      <div className='category-container-error'>
              <label><Checkbox onChange={props.HandleChecked}  name={'photoghaphy'}   {...label}  size='small' />  {Language[props.currentLanguage].Photography} </label>
              <label><Checkbox onChange={props.HandleChecked}  name={'videography'} {...label}  size='small' />  {Language[props.currentLanguage].Videography}</label>
              <label><Checkbox onChange={props.HandleChecked}  name={'technical'} {...label}  size='small' />  {Language[props.currentLanguage].Technical }  </label>
              <label> <Checkbox onChange={props.HandleChecked} name={'announcing'} {...label}  size='small' />{Language[props.currentLanguage].Announcing } </label>
              <label> <Checkbox onChange={props.HandleChecked} name={'reporting'} {...label}  size='small' />  {Language[props.currentLanguage].Reporting } </label>
              <label><Checkbox onChange={props.HandleChecked} name={'video_editing'} {...label}  size='small' /> {Language[props.currentLanguage].Photo_Editing}</label>
              <label><Checkbox onChange={props.HandleChecked} name={'photo_editing'} {...label}  size='small' /> {Language[props.currentLanguage].Video_Editing}</label>
              <label><Checkbox onChange={props.HandleChecked} name={'graphic_design'} {...label}  size='small' /> {Language[props.currentLanguage].Graphic_Designing}</label>
              <label><Checkbox onChange={props.HandleChecked} name={'web_design'} {...label}  size='small' />  {Language[props.currentLanguage].Web_Designing }</label>
      </div>
    )
  }
}

export default REG_PERSONAL