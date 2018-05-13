import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Button Group', () =>
        <React.Fragment>
            <div className='m-button-group'>
                <button className='a-button primary'>Button 1</button>
                <button className='a-button secondary'>Button 2</button>
                <button className='a-button error'>Button 3</button>
            </div>
            <div className='m-button-group-vertical'>
                <button className='a-button primary'>Button 1</button>
                <button className='a-button secondary'>Button 2</button>
                <button className='a-button error'>Button 3</button>
            </div>
        </React.Fragment>
    )
