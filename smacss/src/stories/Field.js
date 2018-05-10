import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Field', () =>
        <React.Fragment>
            <div className='field'>
                <label htmlFor='input' className='label'>Email address</label>
                <input id='input' type='text' className='input' placeholder='email@something.com' />
                <small className='help'>We need your email for something.</small>
            </div>

            <hr/>

            <div className='field success-colored'>
                <label htmlFor='input' className='label'>Email address</label>
                <input id='input' type='text' className='input' placeholder='email@something.com' />
                <small className='help'>We need your email for something.</small>
            </div>

            <hr/>

            <div className='field error-colored'>
                <label htmlFor='input' className='label'>Email address</label>
                <input id='input' type='text' className='input' placeholder='email@something.com' />
                <small className='help'>We need your email for something.</small>
            </div>
        </React.Fragment>
    )
