import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import formStyles from '../scss/form.css'
import fieldStyles from '../scss/field.css'
import inputStyles from '../scss/input.css'

storiesOf('Components', module)
    .add('Form', () =>
        <React.Fragment>
            <form>
                <div className={formStyles.field}>
                    <label htmlFor='input1' className={fieldStyles.field}>Email address</label>
                    <input id='input1' type='text' className={[fieldStyles.input, inputStyles.input].join(' ')} placeholder='email@something.com' />
                    <small className={fieldStyles.help}>We need your email for something.</small>
                </div>

                <div className={formStyles.field}>
                    <label htmlFor='input2' className={fieldStyles.field}>Name</label>
                    <input id='input2' type='text' className={[fieldStyles.input, inputStyles.input].join(' ')} placeholder='Name' />
                </div>

                <div className={formStyles.field}>
                    <label htmlFor='input3' className={fieldStyles.field}>Last Name</label>
                    <input id='input3' type='text' className={[fieldStyles.input, inputStyles.input].join(' ')} placeholder='Last Name' />
                </div>

                <div className={formStyles.field}>
                    <label htmlFor='input4' className={fieldStyles.field}>Password</label>
                    <input id='input4' type='password' className={[fieldStyles.input, inputStyles.input].join(' ')} />
                </div>

                <div className={formStyles.field}>
                    <label htmlFor='input5' className={fieldStyles.field}>Confirm Password</label>
                    <input id='input5' type='password' className={[fieldStyles.input, inputStyles.input].join(' ')} />
                </div>
            </form>
        </React.Fragment>
    )
