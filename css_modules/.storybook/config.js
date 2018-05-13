import React from 'react';
import { configure, addDecorator } from '@storybook/react';

addDecorator(storyFn => (
  <div style={{padding: 20}}>
    { storyFn() }
  </div>
))

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
