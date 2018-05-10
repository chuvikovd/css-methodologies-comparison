import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Button', () =>
        <React.Fragment>
            <div className='button-container'>
                <button className='button default-colored'>Default button</button>
                <button className='button primary-colored'>Primary button</button>
                <button className='button secondary-colored'>Secondary button</button>
                <button className='button warning-colored'>Warning button</button>
                <button className='button error-colored'>Error button</button>
                <button className='button success-colored'>Success Button</button>
            </div>
            <div className='button-container'>
                <button className='button default-colored small-sized'>Small button</button>
                <button className='button default-colored'>Default button</button>
                <button className='button default-colored large-sized'>Large button</button>
            </div>
        </React.Fragment>
    )
