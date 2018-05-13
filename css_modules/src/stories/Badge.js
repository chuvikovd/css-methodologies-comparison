import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import styles from '../scss/badge.css'
import containerStyles from '../storybook.css'

storiesOf('Components', module)
    .add('Badge', () =>
        <div className={containerStyles['badge-container']}>
          <span className={[styles.badge, styles.default].join(' ')}>Default</span>
          <span className={[styles.badge, styles.primary].join(' ')}>Primary</span>
          <span className={[styles.badge, styles.secondary].join(' ')}>Secondary</span>
          <span className={[styles.badge, styles.warning].join(' ')}>Warning</span>
          <span className={[styles.badge, styles.error].join(' ')}>Error</span>
          <span className={[styles.badge, styles.success].join(' ')}>Success</span>
        </div>
    )
