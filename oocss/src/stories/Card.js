import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Card', () =>
        <div className='cards-container'>
          <div className='card'>
            <div className='card-header'>
              <h4 className='heading heading-h4 card-heading'>Card</h4>
            </div>
            <div className='card-content'>
              <h5 className='heading heading-h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card card-default'>
            <div className='card-header card-header-default'>
              <h4 className='heading heading-h4 card-heading'>Default Card</h4>
            </div>
            <div className='card-content card-content default'>
              <h5 className='heading heading-h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card card-primary'>
            <div className='card-header card-header-primary'>
              <h4 className='heading heading-h4 card-heading'>Primary Card</h4>
            </div>
            <div className='card-content card-content-primary'>
              <h5 className='heading heading-h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card card-secondary'>
            <div className='card-header card-header-secondary'>
              <h4 className='heading heading-h4 card-heading'>Secondary Card</h4>
            </div>
            <div className='card-content card-content-secondary'>
              <h5 className='heading heading-h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card card-warning'>
            <div className='card-header card-header-warning'>
              <h4 className='heading heading-h4 card-heading'>Warning Card</h4>
            </div>
            <div className='card-content card-content-warning'>
              <h5 className='heading heading-h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card card-error'>
            <div className='card-header card-header-error'>
              <h4 className='heading heading-h4 card-heading'>Error Card</h4>
            </div>
            <div className='card-content card-content-error'>
              <h5 className='heading heading-h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card card-success'>
            <div className='card-header card-header-success'>
              <h4 className='heading heading-h4 card-heading'>Success Card</h4>
            </div>
            <div className='card-content card-content-success'>
              <h5 className='heading heading-h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card card-default card-outlined-default'>
            <div className='card-header card-outlined-header-defaut'>
              <h4 className='heading heading-h4 card-heading'>Default Card</h4>
            </div>
            <div className='card-content card-outlined-content-default'>
              <h5 className='heading heading-h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card card-outlined-primary'>
            <div className='card-header card-outlined-header-primary'>
              <h4 className='heading heading-h4 card-heading'>Primary Card</h4>
            </div>
            <div className='card-content card-outlined-content-primary'>
              <h5 className='heading heading-h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card card-outlined-secondary'>
            <div className='card-header card-outlined-header-secondary'>
              <h4 className='heading heading-h4 card-heading'>Secondary Card</h4>
            </div>
            <div className='card-content card-outlined-content-secondary'>
              <h5 className='heading heading-h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card card-outlined-warning'>
            <div className='card-header card-outlined-header-warning'>
              <h4 className='heading heading-h4 card-heading'>Warning Card</h4>
            </div>
            <div className='card-content card-outlined-content-warning'>
              <h5 className='heading heading-h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card card-outlined-error'>
            <div className='card-header card-outlined-header-error'>
              <h4 className='heading heading-h4 card-heading'>Error Card</h4>
            </div>
            <div className='card-content card-outlined-content-error'>
              <h5 className='heading heading-h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='card card-outlined-success'>
            <div className='card-header card-outlined-header-success'>
              <h4 className='heading heading-h4 card-heading'>Success Card</h4>
            </div>
            <div className='card-content card-outlined-content-success'>
              <h5 className='heading heading-h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>
        </div>
    )
