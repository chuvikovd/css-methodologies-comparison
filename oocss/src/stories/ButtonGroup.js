import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Button Group', () =>
        <div className='button-group-container'>
            <div className='button-group-horizontal'>
                <button className='button button-primary button-group-button'>Button 1</button>
                <button className='button button-secondary button-group-button'>Button 2</button>
                <button className='button button-error button-group-button'>Button 3</button>
            </div>
            <div className='button-group-vertical'>
                <button className='button button-primary button-group-button'>Button 1</button>
                <button className='button button-secondary button-group-button'>Button 2</button>
                <button className='button button-error button-group-button'>Button 3</button>
            </div>
        </div>
    )
