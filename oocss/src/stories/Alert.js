import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Alert', () =>
        <div className='alert-container'>
            <div className='alert alert-default'>
              <button className='alert-dismiss alert-dismiss-default'>×</button>
              <h4 className='alert-title alert-title-default'>Default</h4>
              <p className='alert-text alert-text-default'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>

            <div className='alert alert-primary'>
              <button className='alert-dismiss alert-dismiss-primary'>×</button>
              <h4 className='alert-title alert-title-primary'>Primary</h4>
              <p className='alert-text alert-text-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>

            <div className='alert alert-secondary'>
              <button className='alert-dismiss alert-dismiss-secondary'>×</button>
              <h4 className='alert-title alert-title-secondary'>Secondary</h4>
              <p className='alert-text alert-text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>

            <div className='alert alert-success'>
              <button className='alert-dismiss alert-dismiss-success'>×</button>
              <h4 className='alert-title alert-title-success'>Success</h4>
              <p className='alert-text alert-text-success'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>

            <div className='alert alert-warning'>
              <button className='alert-dismiss alert-dismiss-warning'>×</button>
              <h4 className='alert-title alert-title-warning'>Warning!</h4>
              <p className='alert-text alert-text-warning'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>

            <div className='alert alert-error'>
              <button className='alert-dismiss alert-dismiss-error'>×</button>
              <h4 className='alert-title alert-title-error'>Error</h4>
              <p className='alert-text alert-text-error'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>
        </div>
    )
