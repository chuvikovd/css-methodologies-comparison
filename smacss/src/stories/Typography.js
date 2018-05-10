import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Typography', () =>
        <React.Fragment>
            <h1 className='heading h1-sized'>Heading 1</h1>
            <h2 className='heading h2-sized'>Heading 2</h2>
            <h3 className='heading h3-sized'>Heading 3</h3>
            <h4 className='heading h4-sized'>Heading 4</h4>
            <h5 className='heading h5-sized'>Heading 5</h5>
            <h6 className='heading h6-sized'>Heading 6</h6>

            <hr/>

            <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className='paragraph default-colored'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className='paragraph primary-colored'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className='paragraph secondary-colored'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className='paragraph warning-colored'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className='paragraph error-colored'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className='paragraph success-colored'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>

            <hr/>

            <div className='blockquote'>
              <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, consequuntur?</p>
              <footer className='author'>
                Someone famous
              </footer>
            </div>

            <hr/>

            <div className='blockquote text-aligned-center'>
              <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, consequuntur?</p>
              <footer className='author'>
                Someone famous
              </footer>
            </div>

            <hr/>

            <div className='blockquote text-aligned-right'>
              <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, consequuntur?</p>
              <footer className='author'>
                Someone famous
              </footer>
            </div>
        </React.Fragment>
    )
