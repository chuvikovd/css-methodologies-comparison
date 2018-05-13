import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Button', () =>
        <React.Fragment>
            <div className='button-container'>
                <button className='a-button default'>Default button</button>
                <button className='a-button primary'>Primary button</button>
                <button className='a-button secondary'>Secondary button</button>
                <button className='a-button warning'>Warning button</button>
                <button className='a-button error'>Error button</button>
                <button className='a-button success'>Success Button</button>
            </div>
            <div className='button-container'>
                <button className='a-button default small'>Small button</button>
                <button className='a-button default'>Default button</button>
                <button className='a-button default large'>Large button</button>
            </div>
        </React.Fragment>
    )
