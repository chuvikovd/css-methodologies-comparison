import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Card', () =>
        <div className='cards-container'>
          <div className='card'>
            <div className='header'>
              <h4 className='heading heading__h4'>Card</h4>
            </div>
            <div className='content'>
              <h5 className='heading heading__h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card default-colored'>
            <div className='header'>
              <h4 className='heading heading__h4'>Default Card</h4>
            </div>
            <div className='content'>
              <h5 className='heading heading__h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card primary-colored'>
            <div className='header'>
              <h4 className='heading heading__h4'>Primary Card</h4>
            </div>
            <div className='content'>
              <h5 className='heading heading__h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card secondary-colored'>
            <div className='header'>
              <h4 className='heading heading__h4'>Secondary Card</h4>
            </div>
            <div className='content'>
              <h5 className='heading heading__h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card warning-colored'>
            <div className='header'>
              <h4 className='heading heading__h4'>Warning Card</h4>
            </div>
            <div className='content'>
              <h5 className='heading heading__h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card error-colored'>
            <div className='header'>
              <h4 className='heading heading__h4'>Error Card</h4>
            </div>
            <div className='content'>
              <h5 className='heading heading__h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card success-colored'>
            <div className='header'>
              <h4 className='heading heading__h4'>Success Card</h4>
            </div>
            <div className='content'>
              <h5 className='heading heading__h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card default-colored is-outlined'>
            <div className='header'>
              <h4 className='heading heading__h4'>Default Card</h4>
            </div>
            <div className='content'>
              <h5 className='heading heading__h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card primary-colored is-outlined'>
            <div className='header'>
              <h4 className='heading heading__h4'>Primary Card</h4>
            </div>
            <div className='content'>
              <h5 className='heading heading__h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card secondary-colored is-outlined'>
            <div className='header'>
              <h4 className='heading heading__h4'>Secondary Card</h4>
            </div>
            <div className='content'>
              <h5 className='heading heading__h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card warning-colored is-outlined'>
            <div className='header'>
              <h4 className='heading heading__h4'>Warning Card</h4>
            </div>
            <div className='content'>
              <h5 className='heading heading__h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card error-colored is-outlined'>
            <div className='header'>
              <h4 className='heading heading__h4'>Error Card</h4>
            </div>
            <div className='content'>
              <h5 className='heading heading__h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card success-colored is-outlined'>
            <div className='header'>
              <h4 className='heading heading__h4'>Success Card</h4>
            </div>
            <div className='content'>
              <h5 className='heading heading__h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>
        </div>
    )
