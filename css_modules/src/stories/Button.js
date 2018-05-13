import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import styles from '../scss/button.css'
import containerStyles from '../storybook.css'

storiesOf('Components', module)
    .add('Button', () =>
        <React.Fragment>
            <div className={containerStyles['button-container']}>
                <button className={[styles.button, styles.default].join(' ')}>Default button</button>
                <button className={[styles.button, styles.primary].join(' ')}>Primary button</button>
                <button className={[styles.button, styles.secondary].join(' ')}>Secondary button</button>
                <button className={[styles.button, styles.warning].join(' ')}>Warning button</button>
                <button className={[styles.button, styles.error].join(' ')}>Error button</button>
                <button className={[styles.button, styles.success].join(' ')}>Success Button</button>
            </div>
            <div className={containerStyles['button-container']}>
                <button className={[styles.button, styles.default, styles.small].join(' ')}>Small button</button>
                <button className={[styles.button, styles.default].join(' ')}>Default button</button>
                <button className={[styles.button, styles.default, styles.large].join(' ')}>Large button</button>
            </div>
        </React.Fragment>
    )
