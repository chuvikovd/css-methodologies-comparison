import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Button Group', () =>
        <div className='button-group-container'>
            <div className='button-group'>
                <button className='button primary-colored'>Button 1</button>
                <button className='button secondary-colored'>Button 2</button>
                <button className='button error-colored'>Button 3</button>
            </div>
            <div className='button-group is-vertical'>
                <button className='button primary-colored'>Button 1</button>
                <button className='button secondary-colored'>Button 2</button>
                <button className='button error-colored'>Button 3</button>
            </div>
        </div>
    )
