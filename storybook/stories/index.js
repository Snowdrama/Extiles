import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CloseButton, MaximizeButton, MinimizeButton } from '../../src/component/button/window-buttons';
import createLayout from '../../src/component/layout';

const Layout = createLayout();

storiesOf('Main Layout', module)
.add('Main Layout', () => (
  <Layout />
));

storiesOf('Window Buttons', module)
.add('Close Button', () => (
  <CloseButton />
))
.add('Maximize Button', () => (
  <MaximizeButton />
))
.add('Minimize Button', () => (
  <MinimizeButton />
));
