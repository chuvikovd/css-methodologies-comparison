import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import fieldStyles from '../scss/field.css'
import inputStyles from '../scss/input.css'

storiesOf('Components', module)
    .add('Field', () =>
        <React.Fragment>
            <div>
                <label htmlFor='input' className={fieldStyles.label}>Email address</label>
                <input id='input' type='text' className={[fieldStyles.input, inputStyles.input].join(' ')} placeholder='email@something.com' />
                <small className={fieldStyles.help}>We need your email for something.</small>
            </div>

            <hr/>

            <div className={fieldStyles.success}>
                <label htmlFor='input' className={fieldStyles.label}>Email address</label>
                <input id='input' type='text' className={[fieldStyles.input, inputStyles.input].join(' ')} placeholder='email@something.com' />
                <small className={fieldStyles.help}>We need your email for something.</small>
            </div>

            <hr/>

            <div className={fieldStyles.error}>
                <label htmlFor='input' className={fieldStyles.label}>Email address</label>
                <input id='input' type='text' className={[fieldStyles.input, inputStyles.input].join(' ')} placeholder='email@something.com' />
                <small className={fieldStyles.help}>We need your email for something.</small>
            </div>
        </React.Fragment>
    )
