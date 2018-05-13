import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import inputStyles from '../scss/input.css'

storiesOf('Components', module)
    .add('Input', () =>
        <React.Fragment>
            <input type='text' className={inputStyles.input} />
        </React.Fragment>
    )
