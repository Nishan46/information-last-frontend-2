import React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import {TextField} from '@mui/material'
import Checkbox from '@mui/material/Checkbox';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function REG_Videoed() {
  return (
    <div className='reg-form'>
        <div className='form-data'>
            <form>
                <label>{'VIDEO EDITING'}</label>
                <div className='category-container'>
                        <label>{'Softweres you use'}</label>
                        <label><Checkbox {...label}  size='small' />Premire Pro</label>
                        <label><Checkbox {...label}  size='small' />After Effect</label>
                        <label><Checkbox {...label}  size='small' />Filmora</label>
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={3}
                            placeholder="Other softweres"
                            style={{width:'98%'}}
                            />
                </div>
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
                </div>
            </form>
        </div>
    </div>
  )
}

export default REG_Videoed