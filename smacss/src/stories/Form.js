import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Form', () =>
        <React.Fragment>
            <form className='form'>
                <div className='field'>
                    <label htmlFor='input1' className='label'>Email address</label>
                    <input id='input1' type='text' className='input' placeholder='email@something.com' />
                    <small className='help'>We need your email for something.</small>
                </div>

                <div className='field'>
                    <label htmlFor='input2' className='label'>Name</label>
                    <input id='input2' type='text' className='input' placeholder='Name' />
                </div>

                <div className='field'>
                    <label htmlFor='input3' className='label'>Last Name</label>
                    <input id='input3' type='text' className='input' placeholder='Last Name' />
                </div>

                <div className='field'>
                    <label htmlFor='input4' className='label'>Password</label>
                    <input id='input4' type='password' className='input' />
                </div>

                <div className='field'>
                    <label htmlFor='input5' className='label'>Confirm Password</label>
                    <input id='input5' type='password' className='input' />
                </div>
            </form>
        </React.Fragment>
    )
