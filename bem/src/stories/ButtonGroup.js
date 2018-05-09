import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Button Group', () =>
        <React.Fragment>
            <div className='button-group button-group__horizontal'>
                <button className='button button__primary button-group__button'>Button 1</button>
                <button className='button button__secondary button-group__button'>Button 2</button>
                <button className='button button__error button-group__button'>Button 3</button>
            </div>
            <div className='button-group button-group__vertical'>
                <button className='button button__primary button-group__button'>Button 1</button>
                <button className='button button__secondary button-group__button'>Button 2</button>
                <button className='button button__error button-group__button'>Button 3</button>
            </div>
        </React.Fragment>
    )
