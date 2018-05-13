import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import buttonStyles from '../scss/button.css'
import buttonGroupStyles from '../scss/button-group.css'
import containerStyles from '../storybook.css'

storiesOf('Components', module)
    .add('Button Group', () =>
        <div className={containerStyles['button-group-container']}>
            <div className={buttonGroupStyles.buttonGroupHorizontal}>
                <button className={[buttonStyles.button, buttonStyles.primary, buttonGroupStyles.button].join(' ')}>Button 1</button>
                <button className={[buttonStyles.button, buttonStyles.secondary, buttonGroupStyles.button].join(' ')}>Button 2</button>
                <button className={[buttonStyles.button, buttonStyles.error, buttonGroupStyles.button].join(' ')}>Button 3</button>
            </div>
            <div className={buttonGroupStyles.buttonGroupVertical}>
                <button className={[buttonStyles.button, buttonStyles.primary, buttonGroupStyles.button].join(' ')}>Button 1</button>
                <button className={[buttonStyles.button, buttonStyles.secondary, buttonGroupStyles.button].join(' ')}>Button 2</button>
                <button className={[buttonStyles.button, buttonStyles.error, buttonGroupStyles.button].join(' ')}>Button 3</button>
            </div>
        </div>
    )
