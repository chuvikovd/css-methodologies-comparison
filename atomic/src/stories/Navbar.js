import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Navbar', () =>
        <div className='navbar'>
            <a href="/" className='navbar__brand'>BEM</a>

            <nav className='navbar__nav'>
                <a href="/" className='navbar__link navbar__link__active'>Home</a>
                <a href="/" className='navbar__link'>News</a>
                <a href="/" className='navbar__link'>Blog</a>
            </nav>

            <form className='form form__inline navbar__form'>
                <div className='field form__field'>
                    <input type='text' className='input field__input' placeholder='Search' />
                </div>
                <button className='button button__default button__small'>Search</button>
            </form>
        </div>
    )
