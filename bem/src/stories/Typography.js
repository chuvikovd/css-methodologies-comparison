import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Typography', () =>
        <React.Fragment>
            <h1 className='heading heading__h1'>Heading 1</h1>
            <h2 className='heading heading__h2'>Heading 2</h2>
            <h3 className='heading heading__h3'>Heading 3</h3>
            <h4 className='heading heading__h4'>Heading 4</h4>
            <h5 className='heading heading__h5'>Heading 5</h5>
            <h6 className='heading heading__h6'>Heading 6</h6>

            <hr/>

            <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className='paragraph paragraph__default'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className='paragraph paragraph__primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className='paragraph paragraph__secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className='paragraph paragraph__warning'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className='paragraph paragraph__error'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className='paragraph paragraph__success'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>

            <hr/>

            <div className='blockquote'>
              <p className='blockquote__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, consequuntur?</p>
              <footer className='blockquote__author'>
                Someone famous
              </footer>
            </div>

            <hr/>

            <div className='blockquote blockquote__center'>
              <p className='blockquote__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, consequuntur?</p>
              <footer className='blockquote__author'>
                Someone famous
              </footer>
            </div>

            <hr/>

            <div className='blockquote blockquote__right'>
              <p className='blockquote__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, consequuntur?</p>
              <footer className='blockquote__author'>
                Someone famous
              </footer>
            </div>
        </React.Fragment>
    )
