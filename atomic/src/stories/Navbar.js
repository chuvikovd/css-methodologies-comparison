import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Navbar', () =>
        <div className='o-navbar'>
            <a href="/" className='a-navbar-brand'>BEM</a>

            <nav className='m-navbar-nav'>
                <a href="/" className='a-navbar-link a-navbar-link-active'>Home</a>
                <a href="/" className='a-navbar-link'>News</a>
                <a href="/" className='a-navbar-link'>Blog</a>
            </nav>

            <form className='o-form o-form-inline'>
                <div className='a-field'>
                    <input type='text' className='a-input' placeholder='Search' />
                </div>
                <button className='a-button default small'>Search</button>
            </form>
        </div>
    )
