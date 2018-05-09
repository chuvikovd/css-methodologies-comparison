import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Alert', () =>
        <div className='alert-container'>
            <div className='alert alert__default'>
              <button className='alert__dismiss'>×</button>
              <h4 className='alert__title'>Default</h4>
              <p className='alert__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>

            <div className='alert alert__primary'>
              <button className='alert__dismiss'>×</button>
              <h4 className='alert__title'>Primary</h4>
              <p className='alert__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>

            <div className='alert alert__secondary'>
              <button className='alert__dismiss'>×</button>
              <h4 className='alert__title'>Secondary</h4>
              <p className='alert__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>

            <div className='alert alert__success'>
              <button className='alert__dismiss'>×</button>
              <h4 className='alert__title'>Success</h4>
              <p className='alert__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>

            <div className='alert alert__warning'>
              <button className='alert__dismiss'>×</button>
              <h4 className='alert__title'>Warning!</h4>
              <p className='alert__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>

            <div className='alert alert__error'>
              <button className='alert__dismiss'>×</button>
              <h4 className='alert__title'>Error</h4>
              <p className='alert__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur iure delectus ipsum necessitatibus ex ducimus labore beatae reiciendis. Itaque.</p>
            </div>
        </div>
    )
