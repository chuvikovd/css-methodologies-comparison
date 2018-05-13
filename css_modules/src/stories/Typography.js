import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import headingStyles from '../scss/heading.css'
import paragraphStyles from '../scss/paragraph.css'
import blockquoteStyles from '../scss/blockquote.css'

storiesOf('Components', module)
    .add('Typography', () =>
        <React.Fragment>
            <h1 className={[headingStyles.heading, headingStyles.h1].join(' ')}>Heading 1</h1>
            <h2 className={[headingStyles.heading, headingStyles.h2].join(' ')}>Heading 2</h2>
            <h3 className={[headingStyles.heading, headingStyles.h3].join(' ')}>Heading 3</h3>
            <h4 className={[headingStyles.heading, headingStyles.h4].join(' ')}>Heading 4</h4>
            <h5 className={[headingStyles.heading, headingStyles.h5].join(' ')}>Heading 5</h5>
            <h6 className={[headingStyles.heading, headingStyles.h6].join(' ')}>Heading 6</h6>

            <hr/>

            <p className={paragraphStyles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className={[paragraphStyles.paragraph, paragraphStyles.default].join(' ')}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className={[paragraphStyles.paragraph, paragraphStyles.primary].join(' ')}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className={[paragraphStyles.paragraph, paragraphStyles.secondary].join(' ')}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className={[paragraphStyles.paragraph, paragraphStyles.warning].join(' ')}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className={[paragraphStyles.paragraph, paragraphStyles.error].join(' ')}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>
            <p className={[paragraphStyles.paragraph, paragraphStyles.success].join(' ')}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt dolorum natus atque laudantium iure ab dolores ad doloribus maiores vel asperiores molestiae sequi quas, culpa vitae ut excepturi in unde hic. Officia odit id quia explicabo consectetur nisi minima!</p>

            <hr/>

            <div>
              <p className={blockquoteStyles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, consequuntur?</p>
              <footer className={blockquoteStyles.author}>
                Someone famous
              </footer>
            </div>

            <hr/>

            <div className={blockquoteStyles.center}>
              <p className={blockquoteStyles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, consequuntur?</p>
              <footer className={blockquoteStyles.author}>
                Someone famous
              </footer>
            </div>

            <hr/>

            <div className={blockquoteStyles.right}>
              <p className={blockquoteStyles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, consequuntur?</p>
              <footer className={blockquoteStyles.author}>
                Someone famous
              </footer>
            </div>
        </React.Fragment>
    )
