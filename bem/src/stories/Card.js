import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Card', () =>
        <div className='cards-container'>
          <div className='card'>
            <div className='card__header'>
              <h4 className='heading heading__h4 card__heading'>Card</h4>
            </div>
            <div className='card__content'>
              <h5 className='heading heading__h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card card__default'>
            <div className='card__header'>
              <h4 className='heading heading__h4 card__heading'>Default Card</h4>
            </div>
            <div className='card__content'>
              <h5 className='heading heading__h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card card__primary'>
            <div className='card__header'>
              <h4 className='heading heading__h4 card__heading'>Primary Card</h4>
            </div>
            <div className='card__content'>
              <h5 className='heading heading__h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card card__secondary'>
            <div className='card__header'>
              <h4 className='heading heading__h4 card__heading'>Secondary Card</h4>
            </div>
            <div className='card__content'>
              <h5 className='heading heading__h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card card__warning'>
            <div className='card__header'>
              <h4 className='heading heading__h4 card__heading'>Warning Card</h4>
            </div>
            <div className='card__content'>
              <h5 className='heading heading__h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card card__error'>
            <div className='card__header'>
              <h4 className='heading heading__h4 card__heading'>Error Card</h4>
            </div>
            <div className='card__content'>
              <h5 className='heading heading__h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card card__success'>
            <div className='card__header'>
              <h4 className='heading heading__h4 card__heading'>Success Card</h4>
            </div>
            <div className='card__content'>
              <h5 className='heading heading__h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card card__default card__outlined'>
            <div className='card__header'>
              <h4 className='heading heading__h4 card__heading'>Default Card</h4>
            </div>
            <div className='card__content'>
              <h5 className='heading heading__h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card card__primary card__outlined'>
            <div className='card__header'>
              <h4 className='heading heading__h4 card__heading'>Primary Card</h4>
            </div>
            <div className='card__content'>
              <h5 className='heading heading__h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card card__secondary card__outlined'>
            <div className='card__header'>
              <h4 className='heading heading__h4 card__heading'>Secondary Card</h4>
            </div>
            <div className='card__content'>
              <h5 className='heading heading__h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card card__warning card__outlined'>
            <div className='card__header'>
              <h4 className='heading heading__h4 card__heading'>Warning Card</h4>
            </div>
            <div className='card__content'>
              <h5 className='heading heading__h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card card__error card__outlined'>
            <div className='card__header'>
              <h4 className='heading heading__h4 card__heading'>Error Card</h4>
            </div>
            <div className='card__content'>
              <h5 className='heading heading__h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card card__success card__outlined'>
            <div className='card__header'>
              <h4 className='heading heading__h4 card__heading'>Success Card</h4>
            </div>
            <div className='card__content'>
              <h5 className='heading heading__h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>
        </div>
    )
