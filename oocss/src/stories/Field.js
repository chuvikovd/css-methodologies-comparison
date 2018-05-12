import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Field', () =>
        <React.Fragment>
            <div className='field'>
                <label htmlFor='input' className='field-label field-label-skin'>Email address</label>
                <input id='input' type='text' className='field-input field-input-skin' placeholder='email@something.com' />
                <small className='field-help'>We need your email for something.</small>
            </div>

            <hr/>

            <div className='field'>
                <label htmlFor='input' className='field-label field-label-skin'>Email address</label>
                <input id='input' type='text' className='field-input field-input-skin field-input-success' placeholder='email@something.com' />
                <small className='field-help field-help-success'>We need your email for something.</small>
            </div>

            <hr/>

            <div className='field'>
                <label htmlFor='input' className='field-label field-label-skin'>Email address</label>
                <input id='input' type='text' className='field-input field-input-skin field-input-error' placeholder='email@something.com' />
                <small className='field-help field-help-error'>We need your email for something.</small>
            </div>
        </React.Fragment>
    )
