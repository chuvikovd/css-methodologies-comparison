import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Badge', () =>
        <div className='badge-container'>
          <span className='badge badge__default'>Default</span>
          <span className='badge badge__primary'>Primary</span>
          <span className='badge badge__secondary'>Secondary</span>
          <span className='badge badge__warning'>Warning</span>
          <span className='badge badge__error'>Error</span>
          <span className='badge badge__success'>Success</span>
        </div>
    )
