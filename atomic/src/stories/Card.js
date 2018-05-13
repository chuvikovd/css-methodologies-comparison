import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.css'
import '../storybook.css'

storiesOf('Components', module)
    .add('Card', () =>
        <div className='cards-container'>
          <div className='m-card'>
            <div className='a-card-header'>
              <h4 className='a-heading h4 a-card-heading'>Card</h4>
            </div>
            <div className='a-card-content'>
              <h5 className='a-heading h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='a-paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='m-card m-card-default'>
            <div className='a-card-header'>
              <h4 className='a-heading h4 a-card-heading'>Default Card</h4>
            </div>
            <div className='a-card-content'>
              <h5 className='a-heading h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='a-paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='m-card m-card-primary'>
            <div className='a-card-header'>
              <h4 className='a-heading h4 a-card-heading'>Primary Card</h4>
            </div>
            <div className='a-card-content'>
              <h5 className='a-heading h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='a-paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='m-card m-card-secondary'>
            <div className='a-card-header'>
              <h4 className='a-heading h4 a-card-heading'>Secondary Card</h4>
            </div>
            <div className='a-card-content'>
              <h5 className='a-heading h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='a-paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='m-card m-card-warning'>
            <div className='a-card-header'>
              <h4 className='a-heading h4 a-card-heading'>Warning Card</h4>
            </div>
            <div className='a-card-content'>
              <h5 className='a-heading h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='a-paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='m-card m-card-error'>
            <div className='a-card-header'>
              <h4 className='a-heading h4 a-card-heading'>Error Card</h4>
            </div>
            <div className='a-card-content'>
              <h5 className='a-heading h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='a-paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='m-card m-card-success'>
            <div className='a-card-header'>
              <h4 className='a-heading h4 a-card-heading'>Success Card</h4>
            </div>
            <div className='a-card-content'>
              <h5 className='a-heading h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='a-paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='m-card m-card-default m-card-outlined'>
            <div className='a-card-header'>
              <h4 className='a-heading h4 a-card-heading'>Default Card</h4>
            </div>
            <div className='a-card-content'>
              <h5 className='a-heading h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='a-paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='m-card m-card-primary m-card-outlined'>
            <div className='a-card-header'>
              <h4 className='a-heading h4 a-card-heading'>Primary Card</h4>
            </div>
            <div className='a-card-content'>
              <h5 className='a-heading h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='a-paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='m-card m-card-secondary m-card-outlined'>
            <div className='a-card-header'>
              <h4 className='a-heading h4 a-card-heading'>Secondary Card</h4>
            </div>
            <div className='a-card-content'>
              <h5 className='a-heading h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='a-paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='m-card m-card-warning m-card-outlined'>
            <div className='a-card-header'>
              <h4 className='a-heading h4 a-card-heading'>Warning Card</h4>
            </div>
            <div className='a-card-content'>
              <h5 className='a-heading h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='a-paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='m-card m-card-error m-card-outlined'>
            <div className='a-card-header'>
              <h4 className='a-heading h4 a-card-heading'>Error Card</h4>
            </div>
            <div className='a-card-content'>
              <h5 className='a-heading h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='a-paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>

          <div className='m-card m-card-success m-card-outlined'>
            <div className='a-card-header'>
              <h4 className='a-heading h4 a-card-heading'>Success Card</h4>
            </div>
            <div className='a-card-content'>
              <h5 className='a-heading h5'>Lorem ipsum dolor sit amet.</h5>
              <p className='a-paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id consequatur asperiores omnis, et obcaecati amet eius consectetur inventore iste architecto nesciunt atque natus repellendus eos nobis dolores praesentium quo molestias cum quibusdam dignissimos, nostrum quos quae? Quo quas unde deserunt quisquam, reiciendis est exercitationem nemo numquam iste ipsa atque.</p>
            </div>
          </div>
        </div>
    )
