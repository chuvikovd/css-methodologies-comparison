import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Input', () =>
        <React.Fragment>
            <input type='text' className='input' />
        </React.Fragment>
    )
