import React from 'react'
import { storiesOf } from '@storybook/react'
import '../scss/base.css'
import styles from '../scss/alert.css'
import containerStyles from '../storybook.css'

storiesOf('Components', module)
    .add('Alert', () =>
        <div className={containerStyles['alert-container']}>
            <div className={[styles.alert, styles.default].join(' ')}>
              <button className={styles.dismiss}>×</button>
              <h4 className={styles.title}>Default</h4>
              <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>

            <div className={[styles.alert, styles.primary].join(' ')}>
              <button className={styles.dismiss}>×</button>
              <h4 className={styles.title}>Primary</h4>
              <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>

            <div className={[styles.alert, styles.secondary].join(' ')}>
              <button className={styles.dismiss}>×</button>
              <h4 className={styles.title}>Secondary</h4>
              <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>

            <div className={[styles.alert, styles.success].join(' ')}>
              <button className={styles.dismiss}>×</button>
              <h4 className={styles.title}>Success</h4>
              <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>

            <div className={[styles.alert, styles.warning].join(' ')}>
              <button className={styles.dismiss}>×</button>
              <h4 className={styles.title}>Warning!</h4>
              <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>

            <div className={[styles.alert, styles.error].join(' ')}>
              <button className={styles.dismiss}>×</button>
              <h4 className={styles.title}>Error</h4>
              <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>
        </div>
    )
