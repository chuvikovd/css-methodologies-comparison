import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Alert', () =>
        <div className='alert-container'>
            <div className='m-alert default'>
              <button className='a-alert-dismiss'>×</button>
              <h4 className='a-alert-title'>Default</h4>
              <p className='a-alert-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>

            <div className='m-alert primary'>
              <button className='a-alert-dismiss'>×</button>
              <h4 className='a-alert-title'>Primary</h4>
              <p className='a-alert-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>

            <div className='m-alert secondary'>
              <button className='a-alert-dismiss'>×</button>
              <h4 className='a-alert-title'>Secondary</h4>
              <p className='a-alert-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>

            <div className='m-alert success'>
              <button className='a-alert-dismiss'>×</button>
              <h4 className='a-alert-title'>Success</h4>
              <p className='a-alert-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>

            <div className='m-alert warning'>
              <button className='a-alert-dismiss'>×</button>
              <h4 className='a-alert-title'>Warning!</h4>
              <p className='a-alert-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>

            <div className='m-alert error'>
              <button className='a-alert-dismiss'>×</button>
              <h4 className='a-alert-title'>Error</h4>
              <p className='a-alert-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>
        </div>
    )
