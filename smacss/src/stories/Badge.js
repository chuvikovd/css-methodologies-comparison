import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Badge', () =>
        <div className='badge-container'>
          <span className='badge default-colored'>Default</span>
          <span className='badge primary-colored'>Primary</span>
          <span className='badge secondary-colored'>Secondary</span>
          <span className='badge warning-colored'>Warning</span>
          <span className='badge error-colored'>Error</span>
          <span className='badge success-colored'>Success</span>
        </div>
    )
