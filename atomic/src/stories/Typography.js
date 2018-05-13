import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Typography', () =>
        <React.Fragment>
            <h1 className='a-heading h1'>Heading 1</h1>
            <h2 className='a-heading h2'>Heading 2</h2>
            <h3 className='a-heading h3'>Heading 3</h3>
            <h4 className='a-heading h4'>Heading 4</h4>
            <h5 className='a-heading h5'>Heading 5</h5>
            <h6 className='a-heading h6'>Heading 6</h6>

            <hr/>

            <p className='a-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className='a-paragraph default'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className='a-paragraph primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className='a-paragraph secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className='a-paragraph warning'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className='a-paragraph error'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className='a-paragraph success'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>

            <hr/>

            <div className='m-blockquote'>
              <p className='a-blockquote-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, consequuntur?</p>
              <footer className='a-blockquote-author'>
                Someone famous
              </footer>
            </div>

            <hr/>

            <div className='m-blockquote-center'>
              <p className='a-blockquote-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, consequuntur?</p>
              <footer className='a-blockquote-author'>
                Someone famous
              </footer>
            </div>

            <hr/>

            <div className='m-blockquote-right'>
              <p className='a-blockquote-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, consequuntur?</p>
              <footer className='a-blockquote-author'>
                Someone famous
              </footer>
            </div>
        </React.Fragment>
    )
