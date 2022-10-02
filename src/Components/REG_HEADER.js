import {React , useEffect} from 'react'
import './REG_HEADER.css'
import {Select,MenuItem,FormControl} from '@mui/material'
import {blue} from '@mui/material/colors'
import Logo from '../Assests/MRC PNG.png'
import Language from '../Languages';
import { useDispatch , useSelector} from 'react-redux';
import { setLanguage } from '../Frontend/features/languageSlice';

function REG_HEADER() {
  const dispatch = useDispatch();
  const currentLang = useSelector((state)=>state.lang.language);
  const handleChange = (e) =>{
    dispatch(setLanguage({lang:e.target.value}));
  }
  return (
    <div className='reg-header'>
      <div className='blur-head'>
        <img id='reg-logo' src={Logo}></img>
        <div className='header-texts'>
            <h2 id='welcome-header'>{Language[currentLang].header_title}</h2>
            <p>{Language[currentLang].header_message_1}</p>
            <p>{Language[currentLang].header_message_2}</p>
            <div className='language-selector'>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    value={currentLang}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value={'en'}>English</MenuItem>
                    <MenuItem value={'si'}>සිංහල</MenuItem>
                  </Select>
                </FormControl>
            </div>
        </div> 
      </div>
    </div>
  )
} 

export default REG_HEADER