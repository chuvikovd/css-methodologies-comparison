import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Field', () =>
        <React.Fragment>
            <div className='m-field'>
                <label htmlFor='input' className='a-label'>Email address</label>
                <input id='input' type='text' className='a-input' placeholder='email@something.com' />
                <small className='a-field-help'>We need your email for something.</small>
            </div>

            <hr/>

            <div className='m-field m-field-success'>
                <label htmlFor='input' className='a-label'>Email address</label>
                <input id='input' type='text' className='a-input' placeholder='email@something.com' />
                <small className='a-field-help'>We need your email for something.</small>
            </div>

            <hr/>

            <div className='m-field m-field-error'>
                <label htmlFor='input' className='a-label'>Email address</label>
                <input id='input' type='text' className='a-input' placeholder='email@something.com' />
                <small className='a-field-help'>We need your email for something.</small>
            </div>
        </React.Fragment>
    )
