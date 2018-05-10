import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Alert', () =>
        <div className='alert-container'>
            <div className='alert default-colored'>
              <button className='dismiss'>×</button>
              <h4 className='title'>Default</h4>
              <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>

            <div className='alert primary-colored'>
              <button className='dismiss'>×</button>
              <h4 className='title'>Primary</h4>
              <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>

            <div className='alert secondary-colored'>
              <button className='dismiss'>×</button>
              <h4 className='title'>Secondary</h4>
              <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>

            <div className='alert success-colored'>
              <button className='dismiss'>×</button>
              <h4 className='title'>Success</h4>
              <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>

            <div className='alert warning-colored'>
              <button className='dismiss'>×</button>
              <h4 className='title'>Warning!</h4>
              <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>

            <div className='alert error-colored'>
              <button className='dismiss'>×</button>
              <h4 className='title'>Error</h4>
              <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>
        </div>
    )
