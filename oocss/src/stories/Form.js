import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Form', () =>
        <React.Fragment>
            <form className='form'>
                <div className='field form-field'>
                    <label htmlFor='input1' className='field-label field-label-skin'>Email address</label>
                    <input id='input1' type='text' className='field-input field-input-skin' placeholder='email@something.com' />
                    <small className='field-help field-help-skin'>We need your email for something.</small>
                </div>

                <div className='field form-field'>
                    <label htmlFor='input2' className='field-label field-label-skin'>Name</label>
                    <input id='input2' type='text' className='field-input field-input-skin' placeholder='Name' />
                </div>

                <div className='field form-field'>
                    <label htmlFor='input3' className='field-label field-label-skin'>Last Name</label>
                    <input id='input3' type='text' className='field-input field-input-skin' placeholder='Last Name' />
                </div>

                <div className='field form-field'>
                    <label htmlFor='input4' className='field-label field-label-skin'>Password</label>
                    <input id='input4' type='password' className='field-input field-input-skin' />
                </div>

                <div className='field form-field'>
                    <label htmlFor='input5' className='field-label field-label-skin'>Confirm Password</label>
                    <input id='input5' type='password' className='field-input field-input-skin' />
                </div>
            </form>
        </React.Fragment>
    )
