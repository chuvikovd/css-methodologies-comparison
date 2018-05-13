import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Field', () =>
        <React.Fragment>
            <div className='field'>
                <label htmlFor='input' className='field__label'>Email address</label>
                <input id='input' type='text' className='input field__input' placeholder='email@something.com' />
                <small className='field__help'>We need your email for something.</small>
            </div>

            <hr/>

            <div className='field field__success'>
                <label htmlFor='input' className='field__label'>Email address</label>
                <input id='input' type='text' className='input field__input' placeholder='email@something.com' />
                <small className='field__help'>We need your email for something.</small>
            </div>

            <hr/>

            <div className='field field__error'>
                <label htmlFor='input' className='field__label'>Email address</label>
                <input id='input' type='text' className='input field__input' placeholder='email@something.com' />
                <small className='field__help'>We need your email for something.</small>
            </div>
        </React.Fragment>
    )
