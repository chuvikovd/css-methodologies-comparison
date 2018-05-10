import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Navbar', () =>
        <div className='navbar'>
            <a href="/" className='brand'>BEM</a>

            <nav className='nav'>
                <a href="/" className='link is-active'>Home</a>
                <a href="/" className='link'>News</a>
                <a href="/" className='link'>Blog</a>
            </nav>

            <form className='form is-inline'>
                <div className='field'>
                    <input type='text' className='input' placeholder='Search' />
                </div>
                <button className='button default-colored small-sized'>Search</button>
            </form>
        </div>
    )
