import React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import {TextField} from '@mui/material'
import Checkbox from '@mui/material/Checkbox';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function REG_Announcing() {
  return (
    <div className='reg-form'>
        <div className='form-data'>
            <form>
                <label>{'ANNOUNCING'}</label>
                <div className='dslr-mirrorless'>
                    <label>Skills and expeariances</label>
                    <div className='dslr-mirrorless-container'>
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={3}
                            placeholder="Skills and expeariances"
                            style={{width:'100%'}}
                            />
                    </div>
                    <label>Languages you prefered</label>
                    <div className='category-container'>
                        <label><Checkbox {...label}  size='small' />Sinhala </label>
                        <label><Checkbox {...label}  size='small' />Tamil</label>
                        <label><Checkbox {...label}  size='small' />English</label>
                    </div>            
                </div>
            </form>
        </div>
    </div>
  )
}

export default REG_Announcing