import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import cardStyles from '../scss/card.css'
import headingStyles from '../scss/heading.css'
import paragraphStyles from '../scss/paragraph.css'
import containerStyles from '../storybook.css'

storiesOf('Components', module)
    .add('Card', () =>
        <div className={containerStyles['cards-container']}>
          <div className={cardStyles.card}>
            <div className={cardStyles.header}>
              <h4 className={[headingStyles.heading, headingStyles.h4, cardStyles.heading].join(' ')}>Card</h4>
            </div>
            <div className={cardStyles.content}>
              <h5 className={[headingStyles.heading, headingStyles.h5].join(' ')}>Lorem ipsum dolor sit amet.</h5>
              <p className={paragraphStyles.paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className={[cardStyles.card, cardStyles.default].join(' ')}>
            <div className={cardStyles.header}>
              <h4 className={[headingStyles.heading, headingStyles.h4, cardStyles.heading].join(' ')}>Default Card</h4>
            </div>
            <div className={cardStyles.content}>
              <h5 className={[headingStyles.heading, headingStyles.h5].join(' ')}>Lorem ipsum dolor sit amet.</h5>
              <p className={paragraphStyles.paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className={[cardStyles.card, cardStyles.primary].join(' ')}>
            <div className={cardStyles.header}>
              <h4 className={[headingStyles.heading, headingStyles.h4, cardStyles.heading].join(' ')}>Primary Card</h4>
            </div>
            <div className={cardStyles.content}>
              <h5 className={[headingStyles.heading, headingStyles.h5].join(' ')}>Lorem ipsum dolor sit amet.</h5>
              <p className={paragraphStyles.paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className={[cardStyles.card, cardStyles.secondary].join(' ')}>
            <div className={cardStyles.header}>
              <h4 className={[headingStyles.heading, headingStyles.h4, cardStyles.heading].join(' ')}>Secondary Card</h4>
            </div>
            <div className={cardStyles.content}>
              <h5 className={[headingStyles.heading, headingStyles.h5].join(' ')}>Lorem ipsum dolor sit amet.</h5>
              <p className={paragraphStyles.paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className={[cardStyles.card, cardStyles.warning].join(' ')}>
            <div className={cardStyles.header}>
              <h4 className={[headingStyles.heading, headingStyles.h4, cardStyles.heading].join(' ')}>Warning Card</h4>
            </div>
            <div className={cardStyles.content}>
              <h5 className={[headingStyles.heading, headingStyles.h5].join(' ')}>Lorem ipsum dolor sit amet.</h5>
              <p className={paragraphStyles.paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className={[cardStyles.card, cardStyles.error].join(' ')}>
            <div className={cardStyles.header}>
              <h4 className={[headingStyles.heading, headingStyles.h4, cardStyles.heading].join(' ')}>Error Card</h4>
            </div>
            <div className={cardStyles.content}>
              <h5 className={[headingStyles.heading, headingStyles.h5].join(' ')}>Lorem ipsum dolor sit amet.</h5>
              <p className={paragraphStyles.paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className={[cardStyles.card, cardStyles.success].join(' ')}>
          <div className={cardStyles.header}>
              <h4 className={[headingStyles.heading, headingStyles.h4, cardStyles.heading].join(' ')}>Success Card</h4>
            </div>
            <div className={cardStyles.content}>
              <h5 className={[headingStyles.heading, headingStyles.h5].join(' ')}>Lorem ipsum dolor sit amet.</h5>
              <p className={paragraphStyles.paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className={[cardStyles.card, cardStyles.outlined].join(' ')}>
            <div className={cardStyles.header}>
              <h4 className={[headingStyles.heading, headingStyles.h4, cardStyles.heading].join(' ')}>Card</h4>
            </div>
            <div className={cardStyles.content}>
              <h5 className={[headingStyles.heading, headingStyles.h5].join(' ')}>Lorem ipsum dolor sit amet.</h5>
              <p className={paragraphStyles.paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className={[cardStyles.card, cardStyles.default, cardStyles.outlined].join(' ')}>
            <div className={cardStyles.header}>
              <h4 className={[headingStyles.heading, headingStyles.h4, cardStyles.heading].join(' ')}>Default Card</h4>
            </div>
            <div className={cardStyles.content}>
              <h5 className={[headingStyles.heading, headingStyles.h5].join(' ')}>Lorem ipsum dolor sit amet.</h5>
              <p className={paragraphStyles.paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className={[cardStyles.card, cardStyles.primary, cardStyles.outlined].join(' ')}>
            <div className={cardStyles.header}>
              <h4 className={[headingStyles.heading, headingStyles.h4, cardStyles.heading].join(' ')}>Primary Card</h4>
            </div>
            <div className={cardStyles.content}>
              <h5 className={[headingStyles.heading, headingStyles.h5].join(' ')}>Lorem ipsum dolor sit amet.</h5>
              <p className={paragraphStyles.paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className={[cardStyles.card, cardStyles.secondary, cardStyles.outlined].join(' ')}>
            <div className={cardStyles.header}>
              <h4 className={[headingStyles.heading, headingStyles.h4, cardStyles.heading].join(' ')}>Secondary Card</h4>
            </div>
            <div className={cardStyles.content}>
              <h5 className={[headingStyles.heading, headingStyles.h5].join(' ')}>Lorem ipsum dolor sit amet.</h5>
              <p className={paragraphStyles.paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className={[cardStyles.card, cardStyles.warning, cardStyles.outlined].join(' ')}>
            <div className={cardStyles.header}>
              <h4 className={[headingStyles.heading, headingStyles.h4, cardStyles.heading].join(' ')}>Warning Card</h4>
            </div>
            <div className={cardStyles.content}>
              <h5 className={[headingStyles.heading, headingStyles.h5].join(' ')}>Lorem ipsum dolor sit amet.</h5>
              <p className={paragraphStyles.paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className={[cardStyles.card, cardStyles.error, cardStyles.outlined].join(' ')}>
            <div className={cardStyles.header}>
              <h4 className={[headingStyles.heading, headingStyles.h4, cardStyles.heading].join(' ')}>Error Card</h4>
            </div>
            <div className={cardStyles.content}>
              <h5 className={[headingStyles.heading, headingStyles.h5].join(' ')}>Lorem ipsum dolor sit amet.</h5>
              <p className={paragraphStyles.paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className={[cardStyles.card, cardStyles.success, cardStyles.outlined].join(' ')}>
          <div className={cardStyles.header}>
              <h4 className={[headingStyles.heading, headingStyles.h4, cardStyles.heading].join(' ')}>Success Card</h4>
            </div>
            <div className={cardStyles.content}>
              <h5 className={[headingStyles.heading, headingStyles.h5].join(' ')}>Lorem ipsum dolor sit amet.</h5>
              <p className={paragraphStyles.paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>
        </div>
    )
