import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Typography', () =>
        <React.Fragment>
            <h1 className='heading heading-h1'>Heading 1</h1>
            <h2 className='heading heading-h2'>Heading 2</h2>
            <h3 className='heading heading-h3'>Heading 3</h3>
            <h4 className='heading heading-h4'>Heading 4</h4>
            <h5 className='heading heading-h5'>Heading 5</h5>
            <h6 className='heading heading-h6'>Heading 6</h6>

            <hr/>

            <p className='paragraph paragraph-skin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className='paragraph paragraph-default'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className='paragraph paragraph-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className='paragraph paragraph-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className='paragraph paragraph-warning'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className='paragraph paragraph-error'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className='paragraph paragraph-success'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>

            <hr/>

            <div className='blockquote'>
              <p className='blockquote-text blockquote-text-skin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, consequuntur?</p>
              <footer className='blockquote-author blockquote-author-skin'>
                Someone famous
              </footer>
            </div>

            <hr/>

            <div className='blockquote blockquote-center'>
              <p className='blockquote-text blockquote-text-skin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, consequuntur?</p>
              <footer className='blockquote-author blockquote-author-skin'>
                Someone famous
              </footer>
            </div>

            <hr/>

            <div className='blockquote blockquote-right'>
              <p className='blockquote-text blockquote-text-skin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, consequuntur?</p>
              <footer className='blockquote-author blockquote-author-skin'>
                Someone famous
              </footer>
            </div>
        </React.Fragment>
    )
