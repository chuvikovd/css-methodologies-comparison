import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Badge', () =>
        <div className='badge-container'>
          <span className='a-badge default'>Default</span>
          <span className='a-badge primary'>Primary</span>
          <span className='a-badge secondary'>Secondary</span>
          <span className='a-badge warning'>Warning</span>
          <span className='a-badge error'>Error</span>
          <span className='a-badge success'>Success</span>
        </div>
    )
