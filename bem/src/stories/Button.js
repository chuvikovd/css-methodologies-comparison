import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Button', () =>
        <React.Fragment>
            <div className='button-container'>
                <button className='button button__default'>Default button</button>
                <button className='button button__primary'>Primary button</button>
                <button className='button button__secondary'>Secondary button</button>
                <button className='button button__warning'>Warning button</button>
                <button className='button button__error'>Error button</button>
                <button className='button button__success'>Success Button</button>
            </div>
            <div className='button-container'>
                <button className='button button__default button__small'>Small button</button>
                <button className='button button__default'>Default button</button>
                <button className='button button__default button__large'>Large button</button>
            </div>
        </React.Fragment>
    )
