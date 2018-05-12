import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Badge', () =>
        <div className='badge-container'>
          <span className='badge badge-default'>Default</span>
          <span className='badge badge-primary'>Primary</span>
          <span className='badge badge-secondary'>Secondary</span>
          <span className='badge badge-warning'>Warning</span>
          <span className='badge badge-error'>Error</span>
          <span className='badge badge-success'>Success</span>
        </div>
    )
