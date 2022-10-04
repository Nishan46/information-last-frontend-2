import {React,useState ,useEffect} from 'react'
import './Registration.css'
import REG_HEADER from '../Components/REG_HEADER'
import REG_PERSONAL from '../Components/REG_PERSONAL'
import REG_Photography from '../Components/REG_Photography'
import REG_Technical from '../Components/REG_Technical'
import REG_Announcing from '../Components/REG_Announcing'
import REG_Photoed from '../Components/REG_Photoed'
import REG_Videoed from '../Components/REG_Videoed'
import REG_Graphic from '../Components/REG_Graphics'
import { Button } from '@mui/material'
import {useSelector,useDispatch} from 'react-redux'
import LOADER from '../Additonals/LOADER'
import { setLoad } from '../Frontend/features/memberSlice'
import axios from 'axios';
import DROPDOWN from '../Additonals/DROPDOWN'

function Registration() {
  
  const isloads = useSelector((state)=>state.member.isload);
  const category_data = useSelector((state)=>state.member.category_data);
  const member_data = useSelector((state)=>state.member.member_data);
  const dispatch = useDispatch();

  const PostMember = async () => {
    try{
        const result = await axios.post(`/api/member-data`,{"body-data":{"member-data":member_data,"category-data":category_data}}).catch((error) => {
          console.error(error.message);
          dispatch(setLoad(false));
        });
        console.log(result.data);
        dispatch(setLoad(false));
    }
    catch(e){
      if(e instanceof TypeError){
        console.error('Type Error Ekak Machan');
      }
    }
  };

  useEffect(()=>{
    if(isloads)
    {
      PostMember();
    }
  },[isloads])
  const HandleDropDown = ()=>{
    document.documentElement.scrollTo({
      top:window.innerHeight + 55,
      behavior:'smooth'
    })

  }

  return (
    <div className='reg-container'>
        <div className='reg-body'>
        <DROPDOWN onClick={HandleDropDown}/>
        <LOADER show={isloads}/>
        <div className='reg-heading'>
          <REG_HEADER/>
        </div>
        <div className='personals'>
          <div className='reg-form'>
            <div className='form-data'>
              <REG_PERSONAL/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Registration 