import React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import {TextField} from '@mui/material'

function REG_Technical() {
  return (
    <div className='reg-form'>
        <div className='form-data'>
            <form>
                <label>{'TECHNICAL'}</label>
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
                    <label>About courses</label>
                    <div className='dslr-mirrorless-container'>
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={3}
                            placeholder="Courses"
                            style={{width:'100%'}}
                            />
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default REG_Technical