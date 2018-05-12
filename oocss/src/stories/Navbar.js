import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Navbar', () =>
        <div className='navbar navbar-skin'>
            <a href="/" className='navbar-brand navbar-brand-skin'>BEM</a>

            <nav className='navbar-nav'>
                <a href="/" className='navbar-link navbar-link-skin navbar-link-active'>Home</a>
                <a href="/" className='navbar-link navbar-link-skin'>News</a>
                <a href="/" className='navbar-link navbar-link-skin'>Blog</a>
            </nav>

            <form className='form form-inline navbar-form'>
                <div className='field form-field'>
                    <input type='text' className='field-input field-input-skin' placeholder='Search' />
                </div>
                <button className='button button-default button-small'>Search</button>
            </form>
        </div>
    )
