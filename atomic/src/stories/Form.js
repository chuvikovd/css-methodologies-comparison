import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Form', () =>
        <React.Fragment>
            <form className='form'>
                <div className='field form__field'>
                    <label htmlFor='input1' className='field__label'>Email address</label>
                    <input id='input1' type='text' className='input field__input' placeholder='email@something.com' />
                    <small className='field__help'>We need your email for something.</small>
                </div>

                <div className='field form__field'>
                    <label htmlFor='input2' className='field__label'>Name</label>
                    <input id='input2' type='text' className='input field__input' placeholder='Name' />
                </div>

                <div className='field form__field'>
                    <label htmlFor='input3' className='field__label'>Last Name</label>
                    <input id='input3' type='text' className='input field__input' placeholder='Last Name' />
                </div>

                <div className='field form__field'>
                    <label htmlFor='input4' className='field__label'>Password</label>
                    <input id='input4' type='password' className='input field__input' />
                </div>

                <div className='field form__field'>
                    <label htmlFor='input5' className='field__label'>Confirm Password</label>
                    <input id='input5' type='password' className='input field__input' />
                </div>
            </form>
        </React.Fragment>
    )
