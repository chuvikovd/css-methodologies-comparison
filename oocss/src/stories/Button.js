import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Button', () =>
        <React.Fragment>
            <div className='button-container'>
                <button className='button button-default'>Default button</button>
                <button className='button button-primary'>Primary button</button>
                <button className='button button-secondary'>Secondary button</button>
                <button className='button button-warning'>Warning button</button>
                <button className='button button-error'>Error button</button>
                <button className='button button-success'>Success Button</button>
            </div>
            <div className='button-container'>
                <button className='button button-default button-small'>Small button</button>
                <button className='button button-default'>Default button</button>
                <button className='button button-default button-large'>Large button</button>
            </div>
        </React.Fragment>
    )
