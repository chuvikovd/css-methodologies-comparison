import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Form', () =>
        <React.Fragment>
            <form className='o-form'>
                <div className='m-field'>
                    <label htmlFor='input1' className='a-label'>Email address</label>
                    <input id='input1' type='text' className='a-input' placeholder='email@something.com' />
                    <small className='a-field-help'>We need your email for something.</small>
                </div>

                <div className='m-field'>
                    <label htmlFor='input2' className='a-label'>Name</label>
                    <input id='input2' type='text' className='a-input' placeholder='Name' />
                </div>

                <div className='m-field'>
                    <label htmlFor='input3' className='a-label'>Last Name</label>
                    <input id='input3' type='text' className='a-input' placeholder='Last Name' />
                </div>

                <div className='m-field'>
                    <label htmlFor='input4' className='a-label'>Password</label>
                    <input id='input4' type='password' className='a-input' />
                </div>

                <div className='m-field'>
                    <label htmlFor='input5' className='a-label'>Confirm Password</label>
                    <input id='input5' type='password' className='a-input' />
                </div>
            </form>
        </React.Fragment>
    )
