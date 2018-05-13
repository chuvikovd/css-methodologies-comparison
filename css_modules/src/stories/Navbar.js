import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import buttonStyles from '../scss/button.css'
import navbarStyles from '../scss/navbar.css'
import fieldStyles from '../scss/field.css'
import inputStyles from '../scss/input.css'
import formStyles from '../scss/form.css'

storiesOf('Components', module)
    .add('Navbar', () =>
        <div className={navbarStyles.navbar}>
            <a href="/" className={navbarStyles.brand}>BEM</a>

            <nav className={navbarStyles.nav}>
                <a href="/" className={[navbarStyles.link, navbarStyles.active].join(' ')}>Home</a>
                <a href="/" className={navbarStyles.link}>News</a>
                <a href="/" className={navbarStyles.link}>Blog</a>
            </nav>

            <form className={[formStyles.inline, navbarStyles.form].join(' ')}>
                <div className={formStyles.field}>
                    <input type='text' className={[inputStyles.input, fieldStyles.input].join(' ')} placeholder='Search' />
                </div>
                <button className={[buttonStyles.button, buttonStyles.default, buttonStyles.small].join(' ')}>Search</button>
            </form>
        </div>
    )
